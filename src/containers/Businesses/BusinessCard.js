import React from 'react'
import BusinessCardWrapper from './BusinessCard.style'
import placeholder from '../../image/rob.png'
import { Link } from 'react-router-dom'
import {Card, Carousel} from 'antd'
const { Meta } = Card;

const BusinessCard = ({ business: { id, name, streetAddress, googlePlace }, index}) => (
  <BusinessCardWrapper index={index} image={googlePlace && googlePlace.photos? googlePlace.photos[0] : placeholder}>
  	<Card
	    hoverable
	    style={{ width: 200 }}
	    cover={<div alt="example" className="banner" />}
	  >
    <Meta
      title={<Link to={`/app/business/${id}`}>{name}</Link>}
      description={streetAddress}
      className="card-text-container"
    />
  	</Card>
  </BusinessCardWrapper>
)

export default BusinessCard