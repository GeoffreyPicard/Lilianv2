import React from 'react';
import Welcome from '../welcome/Welcome';
import style from './home.module.css';
import MetaTags from 'react-meta-tags';

const Home = () => {
	return (
		<section className={style['page-wrapper']}>
			<MetaTags>
				<title>Argence en Aubrac pôle d'activités pleine nature</title>
				<meta name="description" content="Page d\'accueil argences aubrac sport nature" />
			</MetaTags>
			<div className={style['main-wrapper']}>
				<Welcome />
			</div>
		</section>
	);
};

export default Home;
