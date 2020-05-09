import React, { useEffect, useRef } from 'react';
import { sideBarLinks } from '../../utils/sideBarLinks';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.css';
import Commune from '../../asset/img/commune.png';
import Laurier from '../../asset/img/laurier.png';
import StationVerte from '../../asset/img/station_verte.png';
import { activitySwitch } from './sidebarSwitch'

const SidebarDesktop = () => {
	return (
		<div className={style.sidenav}>
			{/* <Link to='/' onClick={() => window.scrollTo(0, 0)}>
				<div className={style.logo}>
					<img className={style.commune} src={Commune} alt="commune logo argences" />
					<img className={style['station-verte']} src={StationVerte} alt="logo ville argences aubrac" />
				</div>
			</Link> */}
			{sideBarLinks.map(item => {
				return (
					<Link to={`/activite/${item}`} className={style.link} onClick={() => window.scrollTo(0, 0)}>
						<div className={style['link-name']}>
							<div >{activitySwitch(item)}</div>
						</div>
					</Link>
				);
			})}
			{/* <img className={style.laurier} src={Laurier} alt="logo ville argences aubrac" /> */}
		</div>
	);
};

export default SidebarDesktop;
