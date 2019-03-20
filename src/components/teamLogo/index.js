import React from 'react'
import { Avatar } from 'antd'
import TeamsModel from '../../models/Teams/Teams'
import { importAll } from '../../helpers/utility'
const logos = importAll(require.context('../../image/teams', false, /\.(png|jpe?g|svg)$/));

const TeamLogo = ({name, size, id, teams}) => {
	let findName = name;

	if(id && teams.length!==0) {
		findName = teams.find((team) => team.id===id).name
	}

	let logo
	switch(findName) {
		case 'Liverpool F.C':
			logo = logos['Liverpool.svg']
			break;
		case 'Manchester United F.C':
			logo = logos['ManUnited.svg']
			break;
		case 'Manchester City F.C':
			logo = logos['ManCity.svg']
			break;
		case 'Arsenal F.C':
			logo = logos['Arsenal.svg']
			break;
		case 'Chelsea F.C':
			logo = logos['Chelsea.svg']
			break;
		case 'Tottenham F.C':
			logo = logos['Tottenham.svg']
			break;
		case 'Wolverhampton Wanderers F.C':
			logo = logos['Wolverhampton.svg']
			break;
		case 'Everton F.C':
			logo = logos['Everton.svg']
			break;
		case 'Fulham F.C':
			logo = logos['Fulham.svg']
			break;
		case 'West Ham United F.C':
			logo = logos['WestHam.svg']
			break;
		case 'Leicester City F.C':
			logo = logos['Leicester.svg']
			break;
		case 'Newcastle United F.C':
			logo = logos['Newcastle.svg']
			break;
		case 'Watford F.C':
			logo = logos['Watford.svg']
			break;
		case 'Swansea City F.C':
			logo = logos['Swansea.svg']
			break;
		case 'Watford F.C':
			logo = logos['Watford.svg']
			break;
		case 'Crystal Palace F.C':
			logo = logos['CrystalPalace.svg']
			break;
		case 'Burnley F.C':
			logo = logos['Burnley.svg']
			break;
		case 'Southampton F.C':
			logo = logos['Southampton.svg']
			break;
		case 'Cardiff City F.C':
			logo = logos['Cardiff.svg']
			break;
		case 'Brighton & Hove Albion F.C':
			logo = logos['Brighton.svg']
			break;
		case 'A.F.C Bournemouth':
			logo = logos['AFCBournemouth.svg']
			break;
		case 'Huddersfield Town A.F.C':
			logo = logos['Huddersfield.svg']
			break;
	}

	return (
	  <Avatar
	  	alt={name}
	  	size={size}
	  	src={logo} />
	)

}

export default TeamsModel(TeamLogo)