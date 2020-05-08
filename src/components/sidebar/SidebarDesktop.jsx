import React, { useEffect, useRef } from 'react';
import { sideBarLinks } from '../../utils/sideBarLinks';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.css';
import Commune from '../../asset/img/commune.png';
import Laurier from '../../asset/img/laurier.png';
import StationVerte from '../../asset/img/station_verte.png';

const activitySwitch = value => {
	switch (value) {
		case 'via':
			return 'VIA FERRATTA';
		case 'cerf-volant':
			return 'CERF VOLANT';
		case 'trottinette':
			return 'TROTINETTE DE DESCENTE';
		case 'randonnee':
			return 'RANDONNÉES';
		case 'tir-a-larc':
			return "TIR À l'ARC";
		case 'accrobranche':
			return 'ACCROBRANCHE';
		case 'canyoning':
			return 'CANYONING';
		case 'vtt':
			return 'VTT';
		case 'disc-golf':
			return 'DISC-GOLF';
		case 'sport-deau':
			return "SPORT D'EAU";
		case 'peche':
			return 'PÊCHE';
		case 'trampoline':
			return 'TRAMPOLINE';
		case 'vtt-electrique':
			return 'VTT ELECTRIQUE';
	}
};

const SidebarDesktop = () => {
	return (
		<div className={style.sidenav}>
			<Link to='/' onClick={() => window.scrollTo(0, 0)}>
				<div className={style.logo}>
					<img className={style.commune} src={Commune} alt="commune logo argences" />
					<img className={style['station-verte']} src={StationVerte} alt="logo ville argences aubrac" />
				</div>
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
			<img className={style.laurier} src={Laurier} alt="logo ville argences aubrac" />
		</div>
	);
};

export default SidebarDesktop;
