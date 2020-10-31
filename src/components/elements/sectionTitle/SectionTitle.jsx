import React from 'react';
import './index.less';

const SectionTitle = (props) => {

    return (
        <h3 className="section-title">
            {props.title}
        </h3>
    );
}

export default SectionTitle;
