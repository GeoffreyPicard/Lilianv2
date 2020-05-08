import React, { Component } from 'react';
import style from './contacts.module.css';
import background from '../../asset/img/prof.jpg'
import profile from '../../asset/img/profile.png';

const Contacts = () => {
	const url = window.location.href
	let email = 1
	if (url.indexOf("accrobranche") > -1 || url.indexOf("via") > -1 || url.indexOf("canyoning") > -1) {
		email = 0
	}
	return (
		<section className={style.contacts}>
			<div className={style.title}>
				Contacts
				</div>
			<div className={style.wrapper}>
				<div className={style.header}>
					<div className={style['center-cropped']}>
						<img classNameme={style.img} src={background} ></img>
					</div>
					<img className={style.profilePhoto} src={profile} alt="profile" />
				</div>
				<div className={style['profile-wrapper']}>
					<div className={style.name}>Lilian Fabre</div>
					<div className={style.diplome}>Educateur sportif</div>
				</div>
				<div className={style['infos-wrapper']}>
					<div className={style['infos-box']}>
						<div className={style['icon-subject']}>
							<div className={style['icons-right']}>
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div>
								<div className={style['type-right']}>ADRESSE</div>
								<div>
									<div className={style['info-right']}>
										Service des sports de la commune d'Argences en Aubrac
								</div>
									<div className={style['info-right']}>
										Mairie – Place des Tilleuls
								</div>
									<div className={style['info-right']}>
										Ste Geneviève sur Argence
								</div>
									<div className={style['info-right']}>
										12420 Argences-en-Aubrac
								</div>
								</div>
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
										{email ? (<div>
											fabrelilian@argencesenaubrac.fr
										</div>) : <div>aloanature@gmail.com</div>}
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
