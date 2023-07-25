import React from 'react';
import style from './contacts.module.css';
import background from '../../asset/img/prof1.png'
import lilianImg from '../../asset/img/profile.png'

const Contacts = ({ contactsData }) => {
	if (!contactsData) {
		contactsData = {
			phone: '07 88 23 17 95',
			photo: lilianImg,
			diplome: 'Educateur sportif',
			name: 'Lilian Fabre',
			email: 'servicedessports@argencesenaubrac.fr',
			adress: ['Service des sports de la commune d\'Argences en Aubrac', 'Mairie – Place des Tilleuls', 'Ste Geneviève sur Argence', '12420 Argences-en-Aubrac']
		}
	}
	console.log(contactsData)
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
					<img className={style.profilePhoto} src={contactsData.photo} alt="profile" />
				</div>
				<div className={style['profile-wrapper']}>
					<div className={style.name}>{contactsData.name}</div>
					<div className={style.diplome}>{contactsData.diplome}</div>
				</div>
				<div className={style['infos-wrapper']}>
					<div className={style['infos-box']}>
						<div className={style['icon-subject']}>
							<div className={style['icons-right']}>
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div>
								<div className={style['type-right']}>ADRESSE</div>
								{contactsData.adress.map(item => {
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
									{contactsData.phone}
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
										{contactsData.email}
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
