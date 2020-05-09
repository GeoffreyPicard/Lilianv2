import React from 'react'
import Slider from './slider/Slider'
import Map from './map/Map'
import style from './Welcome.module.css'
import Commune from '../../asset/img/commune.png';
import Laurier from '../../asset/img/laurier.png';
import logo from '../../asset/icon.png'

const Welcome = () => {
  return (
    <div>
      <div className={style.pres}>
        <div className={style.logos}>
          <img className={style.commune} src={Commune} alt="commune logo argences" />
          <img className={style.logo} src={logo} />
          <img className={style.laurier} src={Laurier} alt="logo ville argences aubrac" />
        </div>
        <div className={style.title}>
          Bienvenue à Argences en Aubrac !
        </div>
        <div className={style.text}>
          Situé au sud du massif central, dans le Parc Naturel Régional de l’Aubrac, le pôle pleine nature d’Argences en Aubrac vous accueille
      </div>
      </div>

      <Slider key="editor1" />
      <div className={style['map-wrapper']}>
        <div className={style['text-wrapper']}>
          <div className={style.title}>
            Un territoire sportif
          </div>
          <div className={style.text}>
            Les hauts-plateaux de l’Aubrac proposent aux nombreux randonneurs pédestres, à vélo ou trottinettes électriques, de vastes étendues désertiques donnant une impression de bout du monde.
            Non loin de l’Aubrac, vous pourrez découvrir les Gorges de la Truyère ; dans un écrin de verdure des parois abruptes font la joie des grimpeurs (accrobranche, escalade, via ferrata…) et les rivières sont des lieux propices aux sports aquatiques (canyoning, pêche, stand up paddle, pédalos…).
          </div>
        </div>
        <div className={style.map}>
          <Map />
        </div>
      </div>
    </div >
  )
}

export default Welcome;
