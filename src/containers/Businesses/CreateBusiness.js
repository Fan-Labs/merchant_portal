import React from 'react'
import IntlMessages from '../../components/utility/intlMessages'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import Map from '../../components/map/map'
import {Icon} from 'antd'
import GoogleMapReact from 'google-map-react';
import CreateBusinessModel from '../../models/Businesses/CreateBusiness'
import CreateBusinessForm from './CreateBusinessForm'
import CreateBusinessWrapper from './CreateBusiness.style'

const CreateBusiness = ({ handleSubmit, placeSuggestion, setPlacesAPIBusiness }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <CreateBusinessWrapper>
        <CreateBusinessForm 
          onSubmit={handleSubmit}
          setPlacesAPIBusiness={setPlacesAPIBusiness}
        />
        <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzSyCIZxNzm4lJE83DxVAmy45P9R6M-fJcjL4' }}
          defaultCenter={{
              lat: -33.918861,
              lng: 18.423300
            }}
          defaultZoom={15}
          center={placeSuggestion && placeSuggestion.location? {lat: placeSuggestion.location.lat, lng: placeSuggestion.location.lng} : null}
          >
            <Icon type="trophy" style={{fontSize: '22px'}} spin={true}
              lat={placeSuggestion && placeSuggestion.location? placeSuggestion.location.lat : null}
              lng={placeSuggestion && placeSuggestion.location? placeSuggestion.location.lng : null} 
            />
        </GoogleMapReact>
        
        </div>
      </CreateBusinessWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)


export default CreateBusinessModel(CreateBusiness);