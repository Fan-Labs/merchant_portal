import React, {Component} from 'react'
import {Calendar, Badge, Switch, Icon} from 'antd'
import TeamLogo from '../../../components/teamLogo'
import moment from 'moment'
import FixtureSelectionModel from '../../../models/Businesses/FixtureSelection'
import FixtureSelectionWrapper, {Row} from './FixtureSelection.style'

// function dateCellRender(dateValue, currentBusinessFixtures) {
//   const todayFixtures = currentBusinessFixtures.filter((businessFixture) => 
//   	moment(businessFixture['fixture.startDateTime']).isSame(dateValue, 'day')
//   )
//   //console.log(todayFixtures)
//   return (
//     <ul className="events">
//       {
//         todayFixtures.map(item => (
//         <ui>   
//             <span>
//             	<Badge key={item.id} status={item.isActive? 'success': 'error'} />
//             	<TeamLogo size="small" id={item['fixture.homeTeamId']} /> VS
//             	<TeamLogo size="small" id={item['fixture.awayTeamId']} />
//             </span>
//         </ui>
//         ))
//       }
//     </ul>
//   );
// }
const fixtureRow = (toggleFixtureActivation, fixture, index) => (
  <Row isActive={fixture.isActive} index={index}>
    <div className="info-row">
      <div className="date">
        {moment(fixture['fixture.startDateTime']).format('HH:mm, ddd Do')}
      </div>
      <div className="toggle">
        <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} checked={fixture.isActive} onChange={(checked) => toggleFixtureActivation(fixture.id, checked)} />
      </div>
    </div>
    <div className="row">
      <div className="team">
        <TeamLogo size="large" id={fixture['fixture.homeTeamId']} />
        <div className="team-name">
          {fixture['fixture.homeTeam.name']}
        </div>
      </div>
        VS
      <div className="team">
        <TeamLogo size="large" id={fixture['fixture.awayTeamId']} />
        <div className="team-name">
          {fixture['fixture.awayTeam.name']}
        </div>
      </div>
    </div>
  </Row>
)


const FixtureSelection = ({
  filteredFixtures,
  toggleFixtureActivation,
  calendarMode,
  selectedDate
}) => {
  let title
  if(calendarMode==='month') {
    title = moment(selectedDate).format('dddd, MMMM Do YYYY')
  } else {
    title = moment(selectedDate).format('MMMM YYYY')
  }

  return (
    <FixtureSelectionWrapper>
      <div className="title">{title} Fixtures</div>
      {filteredFixtures.map((fixture, i) => 
        fixtureRow(toggleFixtureActivation, fixture, i)
      )}
    </FixtureSelectionWrapper>
  )
}

export default FixtureSelectionModel(FixtureSelection)