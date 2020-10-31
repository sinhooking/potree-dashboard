const Structure = {
    POINT_MEASURE: () => ({
        showDistances: false,
        showAngles: false,
        showCoordinates: true,
        showArea: false,
        closed: true,
        maxMarkers: 1,
        name: 'Point'
    }),
    
    LINE_MEASURE: () => ({
        showDistances: true,
        showArea: false,
        closed: false,
        name: 'Distance'
    }),
    
    POLYGON_MEASURE: () => ({
        showDistances: true,
        showArea: true,
        closed: true,
        name: 'Area'
    })
}

export function insertion(key) {
    window.potreeViewer.measuringTool.startInsertion(Structure[key]());
}