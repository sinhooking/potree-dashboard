import React from 'react';
import './index.less';

const SubTitle = (props) => {
    return (
        <h2 className="sub-title">
            {props.title}
        </h2>
    );
}

export default SubTitle;
