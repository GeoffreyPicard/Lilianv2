import React from 'react';
import style from './description.module.css';

const Description = ({ title, text, link }) => {
	return (
		<section className={style.description}>
			<p className={style.title}>{title}</p>
			{text.map(item => {
				return <p className={style.text}>{item}</p>
			})}
			{link && (
				<a className={style.link} href={link} target="_blank" rel="noopener noreferrer nofollow">{link}</a>
			)}
		</section>
	);
};

export default Description;
