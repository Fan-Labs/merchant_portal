import React, {Component} from 'react'
import {Calendar, Badge} from 'antd'
import TeamLogo from '../../../components/teamLogo'
import moment from 'moment'

function dateCellRender(dateValue, businessFixtures) {
  const todayFixtures = businessFixtures.filter((businessFixture) => 
  	moment(businessFixture['fixture.startDateTime']).isSame(dateValue, 'day')
  )
  console.log(todayFixtures)
  return (
    <ul className="events">
      {
        todayFixtures.map(item => (   
            <span>
            	<Badge key={item.id} status={item.isActive? 'success': 'error'} />
            	<TeamLogo size="small" id={item['fixture.homeTeamId']} /> VS
            	<TeamLogo size="small" id={item['fixture.awayTeamId']} />
            </span>
        ))
      }
    </ul>
  );
}

function monthCellRender(dateValue, businessFixtures) {
  const monthFixtures = businessFixtures.filter((businessFixture) => 
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


const onPanelChange = (value, mode) => {
	console.log(value, mode);
}

const BusinessCalendar = ({ fixtures, businessFixtures }) => (
  <Calendar 
  	onPanelChange={onPanelChange}
  	dateCellRender={(dateValue) => dateCellRender(dateValue, businessFixtures)}
  	monthCellRender={(dateValue) => monthCellRender(dateValue, businessFixtures)}/>
)

export default BusinessCalendar