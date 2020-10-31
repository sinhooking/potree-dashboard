const Cesium = window.Cesium;
const THREE = window.THREE;
const proj4 = window.proj4;
const Potree = window.Potree;

const isReadyLibs = () => (Cesium && THREE && proj4 && Potree) ? true: false;

let tm;
export function potreeInit(reactSetViewer) {

	if (!isReadyLibs()) {
		clearTimeout(tm)
		return tm = setTimeout(() => {
			potreeInit(reactSetViewer)
		}, 1000);
	}
	
    window.cesiumViewer = new Cesium.Viewer('cesiumContainer', {
        useDefaultRenderLoop: false,
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        navigationHelpButton: false,
        imageryProvider: Cesium.createOpenStreetMapImageryProvider({ url: 'https://a.tile.openstreetmap.org/' }),
        terrainShadows: Cesium.ShadowMode.DISABLED,
    });

    let cp = new Cesium.Cartesian3(4303414.154026048, 552161.235598733, 4660771.704035539);
	window.cesiumViewer.camera.setView({
		destination : cp,
		orientation: {
			heading : 10, 
			pitch : -Cesium.Math.PI_OVER_TWO * 0.5, 
			roll : 0.0 
		}
	});

	window.potreeViewer = new Potree.Viewer(document.getElementById("potree_render_area"), {
		useDefaultRenderLoop: false
	});
	window.potreeViewer.setEDLEnabled(true);
	window.potreeViewer.setFOV(60);
	window.potreeViewer.setPointBudget(4*1000*1000);
	window.potreeViewer.setMinNodeSize(50);
	window.potreeViewer.loadSettingsFromURL();
	window.potreeViewer.setBackground(null);
	window.potreeViewer.useHQ = true;


	// window.potreeViewer.setDescription(`
	// 	Potree using <a href="https://cesiumjs.org/" target="_blank">Cesium</a> to display an 
	// 	<a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a> map below.<br>
	// 	Point cloud courtesy of <a href="http://riegl.com/" target="_blank">Riegl</a><br>`);

	// window.potreeViewer.loadGUI(() => {
	// 	window.potreeViewer.setLanguage('en');
	// 	$("#menu_appearance").next().show();
	// 	$("#menu_tools").next().show();
	// 	$("#menu_scene").next().show();
	// 	window.potreeViewer.toggleSidebar();
    // });
    
    reactSetViewer(window.potreeViewer)
	
	Potree.loadPointCloud("/model/voltotal/cloud.js", "Retz", function(e){
		let scene = window.potreeViewer.scene;
		
		scene.addPointCloud(e.pointcloud);
		

		e.pointcloud.position.set(569277.402752, 5400050.599046, 0);
		e.pointcloud.rotation.set(0, 0, -0.035);

		let material = e.pointcloud.material;
		material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
		material.size = 0.7;
		material.elevationRange = [0, 70];
		material.weightRGB = 1.0;
		material.weightElevation = 1.0;
		
		scene.view.position.set(570975.577, 5398630.521, 1659.311);
		scene.view.lookAt(569377.402752, 5400450.599046, 30.009);

		Potree.measureTimings = true;

		//let pointcloudProjection = e.pointcloud.projection;
		let pointcloudProjection = "+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
		let mapProjection = proj4.defs("WGS84");

		window.toMap = proj4(pointcloudProjection, mapProjection);
		window.toScene = proj4(mapProjection, pointcloudProjection);
		
		// {
		// 	let bb = window.potreeViewer.getBoundingBox();

		// 	let minWGS84 = proj4(pointcloudProjection, mapProjection, bb.min.toArray());
		// 	let maxWGS84 = proj4(pointcloudProjection, mapProjection, bb.max.toArray());
		// }
	});

	function loop(timestamp){
		requestAnimationFrame(loop);

		window.potreeViewer.update(window.potreeViewer.clock.getDelta(), timestamp);

		window.potreeViewer.render();

		if(window.toMap !== undefined){

			{
				let camera = window.potreeViewer.scene.getActiveCamera();

				let pPos		= new THREE.Vector3(0, 0, 0).applyMatrix4(camera.matrixWorld);
				let pRight  = new THREE.Vector3(600, 0, 0).applyMatrix4(camera.matrixWorld);
				let pUp		 = new THREE.Vector3(0, 600, 0).applyMatrix4(camera.matrixWorld);
				let pTarget = window.potreeViewer.scene.view.getPivot();

				let toCes = (pos) => {
					let xy = [pos.x, pos.y];
					let height = pos.z;
					let deg = window.toMap.forward(xy);
					let cPos = Cesium.Cartesian3.fromDegrees(...deg, height);

					return cPos;
				};

				let cPos = toCes(pPos);
				let cUpTarget = toCes(pUp);
				let cTarget = toCes(pTarget);

				let cDir = Cesium.Cartesian3.subtract(cTarget, cPos, new Cesium.Cartesian3());
				let cUp = Cesium.Cartesian3.subtract(cUpTarget, cPos, new Cesium.Cartesian3());

				cDir = Cesium.Cartesian3.normalize(cDir, new Cesium.Cartesian3());
				cUp = Cesium.Cartesian3.normalize(cUp, new Cesium.Cartesian3());

				window.cesiumViewer.camera.setView({
					destination : cPos,
					orientation : {
						direction : cDir,
						up : cUp
					}
				});
				
			}

			let aspect = window.potreeViewer.scene.getActiveCamera().aspect;
			if(aspect < 1){
				let fovy = Math.PI * (window.potreeViewer.scene.getActiveCamera().fov / 180);
				window.cesiumViewer.camera.frustum.fov = fovy;
			}else{
				let fovy = Math.PI * (window.potreeViewer.scene.getActiveCamera().fov / 180);
				let fovx = Math.atan(Math.tan(0.5 * fovy) * aspect) * 2
				window.cesiumViewer.camera.frustum.fov = fovx;
			}
			
		}

		window.cesiumViewer.render();
	}

	requestAnimationFrame(loop);

}

// {
//     let aTownHall = new Potree.Annotation({
//         position: [569879.768, 5400886.182, 80.691],
//         title: "Town Hall",
//         cameraPosition: [569955.329, 5400822.949, 98.807],
//         cameraTarget: [569879.768, 5400886.182, 46.691]
//     });
//     scene.annotations.add(aTownHall);

//     let aTrainStation = new Potree.Annotation({
//         position: [570337.407, 5400522.730, 30],
//         title: "Train Station",
//         cameraPosition: [570377.074, 5400427.884, 100.576],
//         cameraTarget: [570337.407, 5400522.730, 18.595]
//     });
//     scene.annotations.add(aTrainStation);

//     { // Attribute Selector Annotation

//         // Create title element with jquery
//         let elTitle = $(`
//             <span>
//                 Attribute:
//                 <img title="Elevation" name="action_elevation" src="${Potree.resourcePath}/icons/profile.svg" class="annotation-action-icon"/>
//                 <img title="RGB and Elevation" name="action_both" src="${Potree.resourcePath}/icons/rgb_elevation.png" class="annotation-action-icon"/>
//                 <img title="RGB" name="action_rgb" src="${Potree.resourcePath}/icons/rgb.svg" class="annotation-action-icon"/>
//             </span>`);
//         elTitle.find("img[name=action_elevation]").click( () => {
//             scene.pointclouds.forEach( pc => pc.material.activeAttributeName = "elevation" );
//         });
//         elTitle.find("img[name=action_rgb]").click( () => {
//             scene.pointclouds.forEach( pc => pc.material.activeAttributeName = "rgba" );
//         });
//         elTitle.find("img[name=action_both]").click( () => {
//             scene.pointclouds.forEach( pc => pc.material.activeAttributeName = "composite" );
//         });

//         // Give the annotation a meaningful string representation for the sidebar
//         elTitle.toString = () => "Color Setting";

//         // Same as with other annotations, except title is a jquery object this time.
//         let aActions = new Potree.Annotation({
//             position: [569222.340, 5401213.625, 227],
//             title: elTitle
//         });
//         scene.annotations.add(aActions);
//     }

//     { // Attribute Selector Annotation

//         let elTitle = $(`
//             <span>
//                 Quality:
//                 <span name="low"  style="font-family: monospace; margin-left: 4px">low</span>
//                 <span name="med"  style="font-family: monospace; margin-left: 4px">med</span>
//                 <span name="high" style="font-family: monospace; margin-left: 4px">high</span>
//             </span>`);
        
//         elTitle.find("span").mouseover( (e) => {
//             $(e.target).css("filter", "drop-shadow(0px 0px 1px white)");
//         }).mouseout( (e) => {
//             $(e.target).css("filter", "");
//         });

//         elTitle.find("span[name=low]").click( () => {
//             window.potreeViewer.setPointBudget(1 * 1000 * 1000);
//             window.potreeViewer.useHQ = false;
//         });

//         elTitle.find("span[name=med]").click( () => {
//             window.potreeViewer.setPointBudget(3 * 1000 * 1000);
//             window.potreeViewer.useHQ = false;
//         });

//         elTitle.find("span[name=high]").click( () => {
//             window.potreeViewer.setPointBudget(4 * 1000 * 1000);
//             window.potreeViewer.useHQ = true;
//         });

//         // Give the annotation a meaningful string representation for the sidebar
//         elTitle.toString = () => "Quality Setting";

//         // Same as with other annotations, except title is a jquery object this time.
//         let aActions = new Potree.Annotation({
//             position: [570274.902, 5401873.626, 227],
//             title: elTitle
//         });
//         scene.annotations.add(aActions);
//     }
// }