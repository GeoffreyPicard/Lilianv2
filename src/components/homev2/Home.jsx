import React from 'react';
import Welcome from '../welcome/Welcome';
import style from './home.module.css';
import MetaTags from 'react-meta-tags';
import Contacts from '../contacts/Contacts';

const line = {
	width: '40%',
	marginTop: '100px',
	marginBottom: '50px'
};

const Home = () => {
	return (
		<div>
			<section className={style['page-wrapper']}>
				<MetaTags>
					<title>Argence en Aubrac pôle d'activités pleine nature</title>
					<meta name="description" content="Page d'accueil argences aubrac sport nature" />
				</MetaTags>
				<div className={style['main-wrapper']}>
					<Welcome />
				</div>
			</section>
			<hr style={line} />
			<Contacts />
		</div>
	);
};

export default Home;
