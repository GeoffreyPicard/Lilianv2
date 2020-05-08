import React from 'react';
import style from './mainPage.module.css';
import Background from '../../asset/img/randonnee/background.jpg';

const MainPage = ({ params }) => {
	console.log(params);
	console.log('ok');
	return (
		<section className={style['page-wrapper']}>
			<div style={background} />
			ok
		</section>
	);
};

export default MainPage;
