import React from 'react';
import style from './informations.module.css';

const Informations = ({ title1, subtitle1, title2, subtitle2, title3, subtitle3 }) => {
	return (
		<section className={style.wrapper}>
			<div className={style['main-title']}>
				Informations
			</div>
			<div className={style.blocks}>
				<div className={style.block}>
					<div className={style.icon}>
						<i class="fa fa-star" aria-hidden="true"></i>
					</div>
					<p className={style.title}>{title1}</p>
					{subtitle1.map(item => {
						return <div className={style.subtitle}>{item}</div	>
					})}
				</div>
				<div className={style.block}>
					<div className={style.icon}>
						<i class="fa fa-calendar-check-o" aria-hidden="true"></i>
					</div>
					<p className={style.title}>{title2}</p>
					{subtitle2.map(item => {
						return <div className={style.subtitle}>{item}</div	>
					})}
				</div>
				<div className={style.block}>
					<div className={style.icon}>
						<i class="fa fa-eur" aria-hidden="true"></i>
					</div>
					<p className={style.title}>{title3}</p>
					{subtitle3.map(item => {
						return <div className={style.subtitle}>{item}</div	>
					})}
				</div>
			</div>
		</section>
	);
};

export default Informations;
