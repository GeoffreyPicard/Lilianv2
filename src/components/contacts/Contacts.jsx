import React, { Component } from 'react';
import style from './contacts.module.css';
import background from '../../asset/img/prof1.png'
import profile from '../../asset/img/profile.png';
import aloaPhoto from '../../asset/img/aloa_logo.png';

const lilian = {
	photo: profile,
	diplome: 'Educateur sportif',
	name: 'Lilian Fabre',
	email: 'fabrelilian@argencesenaubrac.fr',
	adress: ['Service des sports de la commune d\'Argences en Aubrac', 'Mairie – Place des Tilleuls', 'Ste Geneviève sur Argence', '12420 Argences-en-Aubrac']
}

const aloa = {
	photo: aloaPhoto,
	diplome: 'Educateur sportif BE escalade',
	name: 'Serge Laborie',
	email: 'aloanature@gmail.com',
	adress: ['Route du pont de mels', 'Ste Geneviève sur Argence', '12420 Argences-en-Aubrac']
}

const Contacts = () => {
	const url = window.location.href
	let choice = lilian
	if (url.indexOf("accrobranche") > -1 || url.indexOf("via") > -1 || url.indexOf("canyoning") > -1) {
		choice = aloa
	}
	return (
		<section className={style.contacts}>
			<div className={style.title}>
				Contact
				</div>
			<div className={style.wrapper}>
				<div className={style.header}>
					<div className={style['center-cropped']}>
						<img className={style.img} src={background} ></img>
					</div>
					<img className={style.profilePhoto} src={choice.photo} alt="profile" />
				</div>
				<div className={style['profile-wrapper']}>
					<div className={style.name}>{choice.name}</div>
					<div className={style.diplome}>{choice.diplome}</div>
				</div>
				<div className={style['infos-wrapper']}>
					<div className={style['infos-box']}>
						<div className={style['icon-subject']}>
							<div className={style['icons-right']}>
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div>
								<div className={style['type-right']}>ADRESSE</div>
								{choice.adress.map(item => {
									return <div className={style['info-right']}>{item}</div>
								})}
							</div>
						</div>
					</div>
					<div className={style['infos-box']}>
						<div className={style['icon-subject']}>
							<div className={style['icons-right']}>
								<i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div>
								<div className={style['type-right']}>MOBILE</div>
								<div className={style['info-right']}>
									07 88 23 17 95
								</div>
							</div>
						</div>
						<div>
							<div className={style['icon-subject']}>
								<div className={style['icons-right']}>
									<i class="fa fa-envelope" aria-hidden="true"></i>
								</div>
								<div>
									<div className={style['type-right']} >
										EMAIL
									</div>
									<div className={style['info-right']}>
										{choice.email}
									</div>
								</div>
								<div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
}

export default Contacts;
