import { Tree } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SubTitle from '../../elements/subTitle/SubTitle';
import './index.less';

const treeDataStructure = () => [
    {
        title: 'Pointclouds',
        key: 'pointCloud',
    },
    {
        title: 'Measurements',
        key: 'measurement',
    },
    {
        title: 'Annotations',
        key: 'annotation',
    },
];


const UIScene = (props) => {
    const [checkedKeys, setCheckedKeys] = useState([]);
    // const [selectedKeys, setSelectedKeys] = useState([]);
    const [treeData, setTreeData] = useState(treeDataStructure())

    const onCheck = (checkedKeys) => {
        const { measurements, annotations, pointclouds } =  window.potreeViewer.scene;
        
        measurements.map(item => item.visible = false);
        pointclouds.map(item => item.visible = false);
        annotations.children.map(item => item.visible = false);

        checkedKeys
            .filter(item => item !== 'pointCloud' && item !== 'measurement' && item !== 'annotation')
            .map(uuid => {
                if (measurements.find(item => item.uuid === uuid)) {
                    measurements.find(item => item.uuid === uuid).visible = true;
                }

                if (annotations.children.find(item => item.uuid === uuid)) {
                    annotations.children.find(item => item.uuid === uuid).visible = true;
                }

                if (pointclouds.find(item => item.uuid === uuid)) {
                    pointclouds.find(item => item.uuid === uuid).visible = true;
                }
                return;
            })

        setCheckedKeys(checkedKeys);
    };

    // const onSelect = (selectedKeys, info) => {
    //     console.log('onSelect', info);
    //     setSelectedKeys(selectedKeys);
    // };

    useEffect(() => {
        if(window.potreeViewer) {
            const { measurements, annotations, pointclouds } =  window.potreeViewer.scene;

            const initChecked = []
            treeData.map(item => {
                let temp;
                switch (item.key) {
                    case 'pointCloud': temp = pointclouds.map(pointCloud => ({ key: pointCloud.uuid, title: pointCloud.name })); break;
                    case 'measurement': temp = measurements.map(measure => ({ key: measure.uuid, title: measure.name })); break;
                    case 'annotation': temp = annotations.children.map(annotation => ({ key: annotation.uuid, title: annotation.name })); break;
                }

                
                temp.map(hasModel => initChecked.push(hasModel.key));
                item.children = temp;
            })

            setCheckedKeys([...initChecked]);
            setTreeData([...treeData]);
        }
    }, [props.update])

    return (
        <div className="scene-ui-wrap">
            <SubTitle title="Object" />
            <Tree
                showLine={true}
                checkable
                // expandedKeys={expandedKeys}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                // onSelect={onSelect}
                // selectedKeys={selectedKeys}
                treeData={treeData}
            />
        </div>
    );
}

export default UIScene;



//   const treeData = [
//     {
//       title: 'Pointclouds',
//       key: '0-0',
//       children: [
//         {
//           title: '0-0-0',
//           key: '0-0-0',
//           children: [
//             {
//               title: '0-0-0-0',
//               key: '0-0-0-0',
//             },
//             {
//               title: '0-0-0-1',
//               key: '0-0-0-1',
//             },
//             {
//               title: '0-0-0-2',
//               key: '0-0-0-2',
//             },
//           ],
//         },

//         {
//           title: '0-0-2',
//           key: '0-0-2',
//         },
//       ],
//     },
//     {
//       title: 'Measurements',
//       key: '0-1',
//       children: [
//         {
//           title: '0-1-0-0',
//           key: '0-1-0-0',
//         },
//         {
//           title: '0-1-0-1',
//           key: '0-1-0-1',
//         },
//         {
//           title: '0-1-0-2',
//           key: '0-1-0-2',
//         },
//       ],
//     },
//     {
//       title: 'Annotations',
//       key: '0-2',
//     },
//   ];