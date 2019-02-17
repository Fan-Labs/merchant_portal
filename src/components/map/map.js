import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Icon} from 'antd'

const Map = ({
	centerLat = -33.918861,
	centerLng = 18.423300,
	markerLat = -33.918861,
	markerLng = 18.423300
}) => (
	<div style={{width: '100px', height: '100px'}}>
	<GoogleMapReact
	bootstrapURLKeys={{ key: 'AIzSyCIZxNzm4lJE83DxVAmy45P9R6M-fJcjL4' }}
	defaultCenter={{
      lat: -33.918861,
      lng: 18.423300
    }}
	defaultZoom={11}
	center={{lat: markerLat, lng:markerLng}}
	>
	  {/*<Icon type="trophy" lat={markerLat} lng={markerLng} />*/}
	</GoogleMapReact>
	</div>
)

export default Map