import React from 'react';
import Background from '../../asset/img/randonnee/background.jpg';
import Welcome from '../welcome/Welcome';
import style from './home.module.css';

const Home = () => {
	return (
		<section className={style['page-wrapper']}>
			<div className={style['main-wrapper']}>
				<Welcome />
			</div>
		</section>
	);
};

export default Home;
