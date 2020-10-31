import React, { useState } from 'react';
import { Collapse } from 'antd';

import appearanceIcon from '../../../assets/icons/icon-appearance.svg';
import sceneIcon from '../../../assets/icons/icon-scene.svg';
import toolIcon from '../../../assets/icons/icon-tool.svg';

import Appearance from '../appearance/Appearance';
import Tools from '../tools/Tools';

import './index.less';
import UIScene from '../scene/UIScene';

const { Panel } = Collapse;

const useUpdateScene = () => {
    const [tempArr, settempArr] = useState(['d']);

    const disposeScene = () => settempArr([...tempArr]);

    return [tempArr, disposeScene];
}

const DefaultCollapse = (props) => {
    const [activeKey, setactiveKey] = useState(['1']);
    const onChangeKeys = (key) => setactiveKey(key);

    const [tempArr, disposeScene] = useUpdateScene();

    const panelItems = [{
        title: (<><img src={appearanceIcon} className="collapse__header_icon" alt="appearance icon"/> Appearance</>),
        children: (<Appearance viewer={props.viewer} />)
    },
    {
        title: (<><img src={toolIcon} className="collapse__header_icon" alt="scene icon"/>Tools</>),
        children: (<Tools disposeScene={disposeScene} />)
    },
    {
        title: (<><img src={sceneIcon} className="collapse__header_icon" alt="tool icon"/>Scene</>),
        children: (<UIScene update={tempArr} />)
    }]

    return (
        <div className="collapse__wrapper">
        <Collapse
          defaultActiveKey={activeKey}
          onChange={onChangeKeys}
          expandIconPosition={'right'}
        >
            {panelItems.map((item, index) => (
                <Panel header={item.title} style={{
                    fontWeight: activeKey.find(itemKey => +itemKey === (index + 1)) ? 'bold': null
                }} key={index + 1}>
                {item.children}
              </Panel>
            ))}
        </Collapse>
        </div>
    );
}

export default DefaultCollapse;
