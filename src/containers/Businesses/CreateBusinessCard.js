import React from 'react'
import CreateBusinessCardWrapper from './CreateBusinessCard.style'
import { Link } from 'react-router-dom'
import {Card, Carousel, Icon} from 'antd'
const { Meta } = Card;

const CreateBusinessCard = () => (
  <CreateBusinessCardWrapper>
  	<Card
	    hoverable
	    style={{ width: 200 }}
	    cover={<div alt="example" className="banner" />}
	  >
    <Meta
      title="Add Business"
      description={
      	<Link className="link" to="/app/businesses/new">
	    	  <Icon type="plus-circle" style={{fontSize: '40px'}}/>
	 		</Link>
	 	}
      className="card-text-container"
    />
  	</Card>
 
  	

  </CreateBusinessCardWrapper>
)

export default CreateBusinessCard