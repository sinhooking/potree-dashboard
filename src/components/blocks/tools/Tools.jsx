import React, { useState } from 'react';
import MeasureButton from '../../elements/measureButton/MeasureButton';
import SubTitle from '../../elements/subTitle/SubTitle';
import IconPoint from '../../../assets/icons/icon-point-default.svg';
import IconLine from '../../../assets/icons/icon-line-default.svg';
import IconPolygon from '../../../assets/icons/icon-polygon-default.svg';

import IconPointWhite from '../../../assets/icons/icon-point-white.svg';
import IconLineWhite from '../../../assets/icons/icon-line-white.svg';
import IconPolygonWhite from '../../../assets/icons/icon-polygon-white.svg';

import './index.less';
import SectionTitle from '../../elements/sectionTitle/SectionTitle';
import DefaultButton from '../../elements/defaultButton/DefaultButton';
import { insertion } from '../../../potree/insertion';
import { useEffect } from 'react';

const Tools = (props) => {
    const [active, setactive] = useState('show');

    useEffect(() => {
        if (window.potreeViewer) {
            window.potreeViewer.measuringTool.showLabels = active === 'show';
        }
    })

    const measureItmes = [{
        onClick: () => {
            props.disposeScene();
            insertion('POINT_MEASURE');
        },
        src: IconPoint,
        srcHover: IconPointWhite,
        alt: 'point icon',
        label: 'Point'
    }, {
        onClick: () => {
            props.disposeScene();
            insertion('LINE_MEASURE')
        },
        src: IconLine,
        srcHover: IconLineWhite,
        alt: 'line icon',
        label: 'Line'
    },
    {
        onClick: () => {
            props.disposeScene();
            insertion('POLYGON_MEASURE')
        },
        src: IconPolygon,
        srcHover: IconPolygonWhite,
        alt: 'polygon icon',
        label: 'Polygon'
    }]

    return (
        <div>
            <SubTitle title="Measurement" />
            <div className="icon-wrap">
                {measureItmes.map((item, index) => (
                    <MeasureButton
                        key={index}
                        onClick={item.onClick}
                        src={item.src}
                        srcHover={item.srcHover}
                        alt={item.src}
                        label={item.label} />
                ))}
            </div>

            <SectionTitle title="Show/Hide labels" />
            <div>
                <DefaultButton onClick={() => setactive('show')} active={active === 'show'} content="SHOW" />
                <DefaultButton onClick={() => setactive('hide')} active={active === 'hide'} content="HIDE" style={{ marginRight: 0 }} />
            </div>
        </div>
    );
}

export default Tools;
