import React from 'react'
import CreateBusinessCardWrapper from './CreateBusinessCard.style'
import { Link } from 'react-router-dom'
import {Icon} from 'antd'

const CreateBusinessCard = () => (
  <CreateBusinessCardWrapper>
  	<Link className="link" to="businesses/new">
	     <Icon type="plus-circle" style={{fontSize: '40px'}}/>
	 </Link>
  	

  </CreateBusinessCardWrapper>
)

export default CreateBusinessCard