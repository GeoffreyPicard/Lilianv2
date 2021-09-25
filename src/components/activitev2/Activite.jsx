import React from 'react';
import Description from './description/Description';
import Informations from './informations/Informations';
import Photos from './photos/Photos';
import { data } from '../../utils/data';
import { sideBarLinks } from '../../utils/sideBarLinks';
import MetaTags from 'react-meta-tags';
import Contacts from '../contacts/Contacts';
import style from './activite.module.css'


const Activite = ({ match }) => {
	const activity = match.params.activite
	if (!sideBarLinks.includes(activity)) {
		window.location.href = '/'
	}
	return (
		<section className={style['activity-wrapper']}>
			<MetaTags>
				<title>{data[activity].metaTags.title}</title>
				<meta name="description" content={data[activity].metaTags.title} />
			</MetaTags>
			<Description
				title={data[activity].description.title}
				text={data[activity].description.text}
				link={data[activity].description.link ?? data[activity].description.link}
			/>
			<Photos activity={activity} />
			<Informations
				title1={data[activity].informations.title1}
				subtitle1={data[activity].informations.subtitle1}
				title2={data[activity].informations.title2}
				subtitle2={data[activity].informations.subtitle2}
				title3={data[activity].informations.title3}
				subtitle3={data[activity].informations.subtitle3}
			/>
			<Contacts contactsData={data[activity].contacts} />
		</section>
	);
};

export default Activite;
