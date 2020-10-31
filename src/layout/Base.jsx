import React, { useState } from 'react';
import { Layout } from 'antd';
import './index.less';
import DefaultCollapse from '../components/blocks/collapse/DefaultCollapse';
import HideCollapse from '../components/elements/hideCollapse/HideCollapse';
import PotreeRender from '../components/blocks/potree/PotreeRender';
const { Sider, Content } = Layout;



const BaseLayout = () => {
    const [visible, setvisible] = useState(true);
    const [viewer, setviewer] = useState(null);
    
    return (
        <Layout>
            <Sider width={visible ? 300 : 0}>
                <DefaultCollapse viewer={viewer} />
                <HideCollapse visible={visible} setvisible={setvisible} />
            </Sider>
            <Content>
                <PotreeRender setviewer={setviewer}/>
            </Content>
        </Layout>
    );
}

export default BaseLayout;
