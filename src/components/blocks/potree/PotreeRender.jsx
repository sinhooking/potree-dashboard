import React, { useEffect, useRef } from 'react';
import { potreeInit } from '../../../potree/init';
import './index.less';

const cssStyle = {
    potreeContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
    },
    potreeRenderArea: {
        backgroundImage: `url('/lib/potree/potree/resources/images/background.jpg')`
    },
    cesiumContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'green'
    },
}

const PotreeRender = (props) => {
    const ref = useRef();

    useEffect(() => {
        if(ref.current) {
            potreeInit(props.setviewer)
        }
    }, [ref]);
    
    return (
        <div className="potree_container" style={cssStyle.potreeContainer} ref={ref}>
            <div id="potree_render_area" style={cssStyle.potreeRenderArea}>
                <div id="cesiumContainer" style={cssStyle.cesiumContainer} />
            </div>
            {/* <div id="potree_sidebar_container" /> */}
        </div>
    );
}

export default PotreeRender;
