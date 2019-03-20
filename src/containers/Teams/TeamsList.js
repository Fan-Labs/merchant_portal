import React from 'react'
import TeamsModel from '../../models/Teams/Teams'
import TeamsListWrapper from './TeamsList.style'
import TeamLogo from '../../components/teamLogo'

const TeamsList = ({teams}) => (
  <TeamsListWrapper>
  	{teams.map((team, i) => 
  		<TeamLogo name={team.name} size="large" />
  	)}
  </TeamsListWrapper>
)

export default TeamsModel(TeamsList)