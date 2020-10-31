import React from 'react';
import './index.less';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

const cssStyle = {
    arrowStyle: {
        fontSize: 21,
        color: 'var(--selected)'
    }
}

const HideCollapse = (props) => {
    const onClick = () => props.setvisible(!props.visible);

    return (
        <div className="hide-collapse-button" onClick={onClick}>
            {props.visible ? <DoubleLeftOutlined style={cssStyle.arrowStyle} /> : <DoubleRightOutlined style={cssStyle.arrowStyle} />}
        </div>
    );
}

export default HideCollapse;
