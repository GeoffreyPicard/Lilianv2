import React from 'react';
import BackgroundVtt from '../../../asset/img/vtt/background.jpeg';
import style from './header.module.css';

const background = {
	backgroundImage: `url(${BackgroundVtt})`,
	// backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '70vh'
};

const Header = ({ title }) => {
	return (
		<section style={background}>
			<h1 className={style.title}>{title}</h1>
			<hr className={style.br} />
		</section>
	);
};

export default Header;
