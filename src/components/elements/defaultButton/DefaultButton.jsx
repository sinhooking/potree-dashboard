import React from 'react';
import './index.less';

const DefaultButton = (props) => {
    const style = { ...props.style}
    return (
        <button
            className={`default-button ${props.active ? 'active' : ''}`}
            style={style}
            onClick={props.onClick}
            >
                
            {props.content}
        </button>
    );
}

export default DefaultButton;
