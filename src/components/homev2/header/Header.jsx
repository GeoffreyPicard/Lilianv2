import React from 'react';
import style from './Header.module.css';
import Commune from '../../../asset/img/commune.png';
import StationVerte from '../../../asset/img/station_verte.png';
import Laurier from '../../../asset/img/laurier.jpg';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<div className={style['desktop-header']}>
			<div className={style.logos}>
				<div className={style['title-wrapper']}>
					<img className={style.commune} src={Commune} alt="commune logo argences" />
					<Link to='/' onClick={() => {
						window.scrollTo(0, 0)
					}
					}>
						<div className={style.title}>
							Argences en aubrac
						</div>
					</Link>
				</div>
				<div className={style['logos-right']}>
					<img className={style.laurier} src={Laurier} alt="logo ville argences aubrac" />
					<img className={style['station-verte']} src={StationVerte} alt="logo ville argences aubrac" />
				</div>
			</div>
		</div>
	);
};

export default Header;
