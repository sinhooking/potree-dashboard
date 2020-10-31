import { Slider } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../elements/sectionTitle/SectionTitle';
import './index.less';

const usePointBudgetAndFoV = (viewer) => {
    const [pointBudget, setpointBudget] = useState(1000000);
    const [fieldOfView, setfieldOfView] = useState(20);

    const onChangePoint = (value) => setpointBudget(value);
    const onChangeField = (value) => setfieldOfView(value);

    useEffect(() => {
        if (viewer) {
            window.potreeViewer.setPointBudget(pointBudget)
            window.potreeViewer.setFOV(fieldOfView)
        }
    }, [viewer])

    useEffect(() => {
        if (viewer) {
            window.potreeViewer.setPointBudget(pointBudget)
        }
    }, [pointBudget])

    useEffect(() => {
        if (viewer) {
            window.potreeViewer.setFOV(fieldOfView)
        }
    }, [fieldOfView])

    return { 
        pointBudget, fieldOfView,
        onChangePoint, onChangeField
    }

} 

const Appearance = (props) => {
   const  {  pointBudget, fieldOfView, onChangePoint, onChangeField } = usePointBudgetAndFoV(props.viewer)
    return (
        <div className="appearance__wrapper">
            <SectionTitle title="Point budget" />
            <Slider tipFormatter={null} max={10000000} min={10000} value={pointBudget} onChange={onChangePoint} />
            <p>{pointBudget}</p>

            <SectionTitle title="Field of view" />
            <Slider tipFormatter={null} max={100} min={20} value={fieldOfView} onChange={onChangeField} />
            <p>{fieldOfView}</p>
        </div>
    );
}

export default Appearance;
