import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import style from './Map.module.css'
import imageBuron from '../../../asset/img/slider/favicon-32x32.png'
import { useIsDesktop } from '../../../utils/responsive'


const Map = () => {
  const isDesktop = useIsDesktop()

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZ2VvZmZyZXlwaWNhcmQiLCJhIjoiY2s5dHRsMGswMWhqYTNscWh0dWdieTN0dSJ9.cp3d9WA61k-ebILf_8YTBA'
  });
  return (
    <div className={style.map}>
      <Map
        style="mapbox://styles/geoffreypicard/ck9tw0quz0r531imlt5wdxq38"
        center={[2.759046, 44.803210]}
        containerStyle={{
          height: isDesktop ? '400px' : '100%',
          width: isDesktop ? '400px' : '100%',
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[2.759046, 44.803210]} />
          <img src={imageBuron} />
        </Layer>
        <Marker
          coordinates={[2.759046, 44.803210]}
          anchor="bottom">
          <img src={imageBuron} />
        </Marker>
      </Map>
    </div >
  )
}

export default Map;
