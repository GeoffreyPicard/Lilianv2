import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './test.js';
import style from './Header.module.css';
import Laurier from '../../../asset/img/laurier.png';

const Header = () => {
	return (
		<section>
			<div className={style.headerv2}>
				<Link to="/">
					<div className={style['logo-wrapper']}>
						<Logo width="90px" height="55px" />
						<div>Argences en Aubrac sport nature</div>
					</div>
				</Link>
				{/* <img className="laurier" src={Laurier} alt="logo ville argences aubrac" /> */}
			</div>
		</section>
	);
};

export default Header;
