import React, { useState } from 'react';
import './index.less';

const useHover = () => {
    const [hover, setHover] = useState(false);
    
    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    return [hover, mouseEnter, mouseLeave];
}

const MeasureButton = (props) => {
    const [hover, mouseEnter, mouseLeave] = useHover();

    return (
        <label
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="measure-button" onClick={props.onClick}>
            <div>
                <img src={hover ? props.srcHover : props.src} alt={props.alt} />
            </div>
            <p>{props.label}</p>
        </label>
    );
}

export default MeasureButton;
