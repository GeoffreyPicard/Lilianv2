import React, { useEffect, useRef } from 'react';
import { sideBarLinks } from '../../utils/sideBarLinks';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.css';
import { activitySwitch } from './sidebarSwitch'
import logo from '../../asset/img/logo.png'

const SidebarDesktop = () => {
	return (
		<div className={style.sidenav}>
			<Link className={style.accueil} to='/' onClick={() => window.scrollTo(0, 0)}>
				<img className={style.logo} src={logo} />
				<div >ACCUEIL</div>
			</Link>
			{sideBarLinks.map(item => {
				return (
					<Link to={`/activite/${item}`} className={style.link} onClick={() => window.scrollTo(0, 0)}>
						<div className={style['link-name']}>
							<div >{activitySwitch(item)}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default SidebarDesktop;
