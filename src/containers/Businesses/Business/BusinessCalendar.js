import React, {Component} from 'react'
import {Calendar, Badge} from 'antd'
import TeamLogo from '../../../components/teamLogo'
import moment from 'moment'
import BusinessCalenderModel from '../../../models/Businesses/BusinessCalendar'

function dateCellRender(dateValue, currentBusinessFixtures) {
  const todayFixtures = currentBusinessFixtures.filter((businessFixture) => 
  	moment(businessFixture['fixture.startDateTime']).isSame(dateValue, 'day')
  )
  //console.log(todayFixtures)
  return (
    <ul className="events">
      {
        todayFixtures.map(item => (
        <ui>   
            <span>
            	<Badge key={item.id} status={item.isActive? 'success': 'error'} />
            	<TeamLogo size="small" id={item['fixture.homeTeamId']} /> VS
            	<TeamLogo size="small" id={item['fixture.awayTeamId']} />
            </span>
        </ui>
        ))
      }
    </ul>
  );
}

function monthCellRender(dateValue, currentBusinessFixtures) {
  const monthFixtures = currentBusinessFixtures.filter((businessFixture) => 
  	moment(businessFixture['fixture.startDateTime']).isSame(dateValue, 'month')
  )
  return (
    <ul className="events">
      {
        monthFixtures.map(item => (   
            <div>
	            <span>
	            	<Badge key={item.id} status={item.isActive? 'success': 'error'} />
	            	{moment(item['fixture.startDateTime']).format('Do h:mm a')} &nbsp;&nbsp;
	            	<TeamLogo size="small" id={item['fixture.homeTeamId']} />&nbsp; VS &nbsp;
	            	<TeamLogo size="small" id={item['fixture.awayTeamId']} />
	            </span>
            </div>
        ))
      }
    </ul>
  );
}

const BusinessCalendar = ({ currentBusinessFixtures, onDateSelect, onPanelChange }) => (
  <Calendar 
  	onPanelChange={onPanelChange}
    onSelect={onDateSelect}
  	dateCellRender={(dateValue) => dateCellRender(dateValue, currentBusinessFixtures? currentBusinessFixtures: [])}
  	monthCellRender={(dateValue) => monthCellRender(dateValue, currentBusinessFixtures? currentBusinessFixtures: [])}/>
)

export default BusinessCalenderModel(BusinessCalendar)