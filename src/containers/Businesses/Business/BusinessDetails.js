import React from 'react'
import BusinessDetailsWrapper from './BusinessDetails.style'
import GoogleMapReact from 'google-map-react'
import { Link } from 'react-router-dom'
import {Icon} from 'antd'

const BusinessDetails = ({ business }) => (
      <BusinessDetailsWrapper >
      {business? (
        <React.Fragment>
          <div className="row">{business.description}</div>
          <div className="row">{business.phoneNumber}</div>
          <div className="row">{business.streetAddress}</div>
          <div className="row" style={{height: "400px"}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzSyCIZxNzm4lJE83DxVAmy45P9R6M-fJcjL4' }}
              defaultCenter={{
                  lat: -33.918861,
                  lng: 18.423300
                }}
              defaultZoom={15}
              center={business? {lat: business.latitude, lng: business.longitude} : null}
              >
                <Icon type="trophy" style={{fontSize: '22px'}} spin={true}
                  lat={business? business.latitude : null}
                  lng={business? business.longitude : null} 
                />
            </GoogleMapReact>
          </div>
        </React.Fragment>
      ): (
      <div>LOADING...</div>
    )}
        
      </BusinessDetailsWrapper>
)

export default BusinessDetails