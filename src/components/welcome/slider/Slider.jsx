import React, { useEffect, useState } from 'react'
import style from './Slider.module.css'
import imageBuron from '../../../asset/img/slider/buron.jpg'
import imageDisc from '../../../asset/img/slider/disc_golf.png'
import imagePeche from '../../../asset/img/slider/peche2.jpg'
import imageVtt from '../../../asset/img/slider/vtt.png'
import imageLilian from '../../../asset/img/slider/test.png'
import imageEau from '../../../asset/img/slider/eau.png'

const Slider = () => {

  const [index, setIndex] = useState(0)

  const images = [
    imageBuron,
    imageEau,
    imageLilian,
    imageVtt,
    imagePeche,
    imageDisc,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => {
        if (index === images.length - 1)
          return 0
        return index + 1
      }
      )
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={style['center-cropped']}>
        <img className={style.img} src={images[index]} ></img>
      </div>
    </>
  )
}

export default Slider;
