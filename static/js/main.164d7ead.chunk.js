(this.webpackJsonppotree=this.webpackJsonppotree||[]).push([[0],{104:function(e,t,n){e.exports=n(170)},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(19),r=n.n(o),c=(n(109),n(110),n(17)),l=n(176),s=(n(111),n(45)),u=n(173),d=n(75),w=n.n(d),m=n(76),p=n.n(m),f=n(77),v=n.n(f),E=n(172),h=(n(112),function(e){return a.a.createElement("h3",{className:"section-title"},e.title)}),b=(n(113),function(e){var t=function(e){var t=Object(i.useState)(1e6),n=Object(c.a)(t,2),a=n[0],o=n[1],r=Object(i.useState)(20),l=Object(c.a)(r,2),s=l[0],u=l[1];return Object(i.useEffect)((function(){e&&(window.potreeViewer.setPointBudget(a),window.potreeViewer.setFOV(s))}),[e]),Object(i.useEffect)((function(){e&&window.potreeViewer.setPointBudget(a)}),[a]),Object(i.useEffect)((function(){e&&window.potreeViewer.setFOV(s)}),[s]),{pointBudget:a,fieldOfView:s,onChangePoint:function(e){return o(e)},onChangeField:function(e){return u(e)}}}(e.viewer),n=t.pointBudget,o=t.fieldOfView,r=t.onChangePoint,l=t.onChangeField;return a.a.createElement("div",{className:"appearance__wrapper"},a.a.createElement(h,{title:"Point budget"}),a.a.createElement(E.a,{tipFormatter:null,max:1e7,min:1e4,value:n,onChange:r}),a.a.createElement("p",null,n),a.a.createElement(h,{title:"Field of view"}),a.a.createElement(E.a,{tipFormatter:null,max:100,min:20,value:o,onChange:l}),a.a.createElement("p",null,o))}),g=(n(124),function(e){var t=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(){return a(!0)},function(){return a(!1)}]}(),n=Object(c.a)(t,3),o=n[0],r=n[1],l=n[2];return a.a.createElement("label",{onMouseEnter:r,onMouseLeave:l,className:"measure-button",onClick:e.onClick},a.a.createElement("div",null,a.a.createElement("img",{src:o?e.srcHover:e.src,alt:e.alt})),a.a.createElement("p",null,e.label))}),C=(n(125),function(e){return a.a.createElement("h2",{className:"sub-title"},e.title)}),O=n(85),V=n.n(O),y=n(86),k=n.n(y),S=n(87),j=n.n(S),P=n(88),A=n.n(P),_=n(89),M=n.n(_),x=n(90),N=n.n(x),R=(n(126),n(103)),I=(n(127),function(e){var t=Object(R.a)({},e.style);return a.a.createElement("button",{className:"default-button ".concat(e.active?"active":""),style:t,onClick:e.onClick},e.content)}),B={POINT_MEASURE:function(){return{showDistances:!1,showAngles:!1,showCoordinates:!0,showArea:!1,closed:!0,maxMarkers:1,name:"Point"}},LINE_MEASURE:function(){return{showDistances:!0,showArea:!1,closed:!1,name:"Distance"}},POLYGON_MEASURE:function(){return{showDistances:!0,showArea:!0,closed:!0,name:"Area"}}};function D(e){window.potreeViewer.measuringTool.startInsertion(B[e]())}var F,L=function(e){var t=Object(i.useState)("show"),n=Object(c.a)(t,2),o=n[0],r=n[1];Object(i.useEffect)((function(){window.potreeViewer&&(window.potreeViewer.measuringTool.showLabels="show"===o)}));var l=[{onClick:function(){e.disposeScene(),D("POINT_MEASURE")},src:V.a,srcHover:A.a,alt:"point icon",label:"Point"},{onClick:function(){e.disposeScene(),D("LINE_MEASURE")},src:k.a,srcHover:M.a,alt:"line icon",label:"Line"},{onClick:function(){e.disposeScene(),D("POLYGON_MEASURE")},src:j.a,srcHover:N.a,alt:"polygon icon",label:"Polygon"}];return a.a.createElement("div",null,a.a.createElement(C,{title:"Measurement"}),a.a.createElement("div",{className:"icon-wrap"},l.map((function(e,t){return a.a.createElement(g,{key:t,onClick:e.onClick,src:e.src,srcHover:e.srcHover,alt:e.src,label:e.label})}))),a.a.createElement(h,{title:"Show/Hide labels"}),a.a.createElement("div",null,a.a.createElement(I,{onClick:function(){return r("show")},active:"show"===o,content:"SHOW"}),a.a.createElement(I,{onClick:function(){return r("hide")},active:"hide"===o,content:"HIDE",style:{marginRight:0}})))},T=(n(128),n(175)),H=(n(129),function(e){var t=Object(i.useState)([]),n=Object(c.a)(t,2),o=n[0],r=n[1],l=Object(i.useState)([{title:"Pointclouds",key:"pointCloud"},{title:"Measurements",key:"measurement"},{title:"Annotations",key:"annotation"}]),u=Object(c.a)(l,2),d=u[0],w=u[1];return Object(i.useEffect)((function(){if(window.potreeViewer){var e=window.potreeViewer.scene,t=e.measurements,n=e.annotations,i=e.pointclouds,a=[];d.map((function(e){var o;switch(e.key){case"pointCloud":o=i.map((function(e){return{key:e.uuid,title:e.name}}));break;case"measurement":o=t.map((function(e){return{key:e.uuid,title:e.name}}));break;case"annotation":o=n.children.map((function(e){return{key:e.uuid,title:e.name}}))}o.map((function(e){return a.push(e.key)})),e.children=o})),r([].concat(a)),w(Object(s.a)(d))}}),[e.update]),a.a.createElement("div",{className:"scene-ui-wrap"},a.a.createElement(C,{title:"Object"}),a.a.createElement(T.a,{showLine:!0,checkable:!0,onCheck:function(e){var t=window.potreeViewer.scene,n=t.measurements,i=t.annotations,a=t.pointclouds;n.map((function(e){return e.visible=!1})),a.map((function(e){return e.visible=!1})),i.children.map((function(e){return e.visible=!1})),e.filter((function(e){return"pointCloud"!==e&&"measurement"!==e&&"annotation"!==e})).map((function(e){n.find((function(t){return t.uuid===e}))&&(n.find((function(t){return t.uuid===e})).visible=!0),i.children.find((function(t){return t.uuid===e}))&&(i.children.find((function(t){return t.uuid===e})).visible=!0),a.find((function(t){return t.uuid===e}))&&(a.find((function(t){return t.uuid===e})).visible=!0)})),r(e)},checkedKeys:o,treeData:d}))}),W=u.a.Panel,z=function(e){var t=Object(i.useState)(["1"]),n=Object(c.a)(t,2),o=n[0],r=n[1],l=function(){var e=Object(i.useState)(["d"]),t=Object(c.a)(e,2),n=t[0],a=t[1];return[n,function(){return a(Object(s.a)(n))}]}(),d=Object(c.a)(l,2),m=d[0],f=d[1],E=[{title:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:w.a,className:"collapse__header_icon",alt:"appearance icon"})," Appearance"),children:a.a.createElement(b,{viewer:e.viewer})},{title:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:v.a,className:"collapse__header_icon",alt:"scene icon"}),"Tools"),children:a.a.createElement(L,{disposeScene:f})},{title:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:p.a,className:"collapse__header_icon",alt:"tool icon"}),"Scene"),children:a.a.createElement(H,{update:m})}];return a.a.createElement("div",{className:"collapse__wrapper"},a.a.createElement(u.a,{defaultActiveKey:o,onChange:function(e){return r(e)},expandIconPosition:"right"},E.map((function(e,t){return a.a.createElement(W,{header:e.title,style:{fontWeight:o.find((function(e){return+e===t+1}))?"bold":null},key:t+1},e.children)}))))},U=(n(164),n(177)),G=n(178),q={arrowStyle:{fontSize:21,color:"var(--selected)"}},J=function(e){return a.a.createElement("div",{className:"hide-collapse-button",onClick:function(){return e.setvisible(!e.visible)}},e.visible?a.a.createElement(U.a,{style:q.arrowStyle}):a.a.createElement(G.a,{style:q.arrowStyle}))},K=window.Cesium,Y=window.THREE,Q=window.proj4,$=window.Potree;function X(e){if(!(K&&Y&&Q&&$))return clearTimeout(F),F=setTimeout((function(){X(e)}),1e3);window.cesiumViewer=new K.Viewer("cesiumContainer",{useDefaultRenderLoop:!1,animation:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,imageryProvider:K.createOpenStreetMapImageryProvider({url:"https://a.tile.openstreetmap.org/"}),terrainShadows:K.ShadowMode.DISABLED});var t=new K.Cartesian3(4303414.154026048,552161.235598733,4660771.704035539);window.cesiumViewer.camera.setView({destination:t,orientation:{heading:10,pitch:.5*-K.Math.PI_OVER_TWO,roll:0}}),window.potreeViewer=new $.Viewer(document.getElementById("potree_render_area"),{useDefaultRenderLoop:!1}),window.potreeViewer.setEDLEnabled(!0),window.potreeViewer.setFOV(60),window.potreeViewer.setPointBudget(4e6),window.potreeViewer.setMinNodeSize(50),window.potreeViewer.loadSettingsFromURL(),window.potreeViewer.setBackground(null),window.potreeViewer.useHQ=!0,e(window.potreeViewer),$.loadPointCloud("/model/voltotal/cloud.js","Retz",(function(e){var t=window.potreeViewer.scene;t.addPointCloud(e.pointcloud),e.pointcloud.position.set(569277.402752,5400050.599046,0),e.pointcloud.rotation.set(0,0,-.035);var n=e.pointcloud.material;n.pointSizeType=$.PointSizeType.ADAPTIVE,n.size=.7,n.elevationRange=[0,70],n.weightRGB=1,n.weightElevation=1,t.view.position.set(570975.577,5398630.521,1659.311),t.view.lookAt(569377.402752,5400450.599046,30.009),$.measureTimings=!0;var i="+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs",a=Q.defs("WGS84");window.toMap=Q(i,a),window.toScene=Q(a,i)})),requestAnimationFrame((function e(t){if(requestAnimationFrame(e),window.potreeViewer.update(window.potreeViewer.clock.getDelta(),t),window.potreeViewer.render(),void 0!==window.toMap){var n=window.potreeViewer.scene.getActiveCamera(),i=new Y.Vector3(0,0,0).applyMatrix4(n.matrixWorld),a=(new Y.Vector3(600,0,0).applyMatrix4(n.matrixWorld),new Y.Vector3(0,600,0).applyMatrix4(n.matrixWorld)),o=window.potreeViewer.scene.view.getPivot(),r=function(e){var t,n=[e.x,e.y],i=e.z,a=window.toMap.forward(n);return(t=K.Cartesian3).fromDegrees.apply(t,Object(s.a)(a).concat([i]))},c=r(i),l=r(a),u=r(o),d=K.Cartesian3.subtract(u,c,new K.Cartesian3),w=K.Cartesian3.subtract(l,c,new K.Cartesian3);d=K.Cartesian3.normalize(d,new K.Cartesian3),w=K.Cartesian3.normalize(w,new K.Cartesian3),window.cesiumViewer.camera.setView({destination:c,orientation:{direction:d,up:w}});var m=window.potreeViewer.scene.getActiveCamera().aspect;if(m<1){var p=Math.PI*(window.potreeViewer.scene.getActiveCamera().fov/180);window.cesiumViewer.camera.frustum.fov=p}else{var f=Math.PI*(window.potreeViewer.scene.getActiveCamera().fov/180),v=2*Math.atan(Math.tan(.5*f)*m);window.cesiumViewer.camera.frustum.fov=v}}window.cesiumViewer.render()}))}n(165);var Z={potreeContainer:{position:"absolute",width:"100%",height:"100%",left:0,top:0},potreeRenderArea:{backgroundImage:"url('/lib/potree/potree/resources/images/background.jpg')"},cesiumContainer:{position:"absolute",width:"100%",height:"100%",backgroundColor:"green"}},ee=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current&&X(e.setviewer)}),[t]),a.a.createElement("div",{className:"potree_container",style:Z.potreeContainer,ref:t},a.a.createElement("div",{id:"potree_render_area",style:Z.potreeRenderArea},a.a.createElement("div",{id:"cesiumContainer",style:Z.cesiumContainer})))},te=l.a.Sider,ne=l.a.Content,ie=function(){var e=Object(i.useState)(!0),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)(null),s=Object(c.a)(r,2),u=s[0],d=s[1];return a.a.createElement(l.a,null,a.a.createElement(te,{width:n?300:0},a.a.createElement(z,{viewer:u}),a.a.createElement(J,{visible:n,setvisible:o})),a.a.createElement(ne,null,a.a.createElement(ee,{setviewer:d})))};var ae=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,n){e.exports=n.p+"static/media/icon-appearance.50854d8c.svg"},76:function(e,t,n){e.exports=n.p+"static/media/icon-scene.c12d77e2.svg"},77:function(e,t,n){e.exports=n.p+"static/media/icon-tool.612199bd.svg"},85:function(e,t,n){e.exports=n.p+"static/media/icon-point-default.ea7ec2e3.svg"},86:function(e,t,n){e.exports=n.p+"static/media/icon-line-default.2799f76f.svg"},87:function(e,t,n){e.exports=n.p+"static/media/icon-polygon-default.ca799c61.svg"},88:function(e,t,n){e.exports=n.p+"static/media/icon-point-white.2c316aac.svg"},89:function(e,t,n){e.exports=n.p+"static/media/icon-line-white.78ad6eb0.svg"},90:function(e,t,n){e.exports=n.p+"static/media/icon-polygon-white.5faddf2f.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.164d7ead.chunk.js.map