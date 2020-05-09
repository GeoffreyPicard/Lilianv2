import React, { useState } from 'react';
import { sideBarLinks } from '../../utils/sideBarLinks';
import { Link } from 'react-router-dom';
import style from './SidebarMobile.module.css';
import Commune from '../../asset/img/commune.png';
import Laurier from '../../asset/img/laurier.png';
import StationVerte from '../../asset/img/station_verte.png';
import { activitySwitch } from './sidebarSwitch'


const SidebarMobile = () => {
  const [checkBox, setCheckBox] = useState(false);
  const deselect = () => {
    setCheckBox(!checkBox)
  }
  return (
    <>
      {/* <div className={style.sidenav}>
        <div className={style['list-icon']}>
          {!open && <i onClick={() => setOpen(true)} class="fa fa-bars" aria-hidden="true"></i>}
          {open && <i onClick={() => setOpen(false)} class="fa fa-times" aria-hidden="true"></i>}
        </div>
        <div className={style.title}>Activités</div>
        <div className={style.logos}> */}
      {/* <Link to='/' onClick={() => window.scrollTo(0, 0)}> */}

      {/* </Link> */}
      {/* </div> */}
      {/* {sideBarLinks.map(item => {
        return (
          <Link to={`/activite/${item}`} className={style.link} onClick={() => window.scrollTo(0, 0)}>
            <div className={style['link-name']}>
              <div >{activitySwitch(item)}</div>
            </div>  
          </Link>
        );
      })} */}

      {/* </div> */}
      <div class={style}>

        <nav className={style.navigation} role="navigation">
          <div className={style.menuToggle}>
            <input type="checkbox" checked={checkBox} onClick={() => deselect()} />
            <span></span>
            <span></span>
            <span></span>
            <ul className={style.menu}>
              {sideBarLinks.map(item => {
                return (
                  <Link to={`/activite/${item}`} className={style.link} onClick={() => {
                    deselect()
                    window.scrollTo(0, 0)
                  }
                  }>
                    <li className={style.links}>{item}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={style['menu-text']}>Liste d'activités</div>
          <img className={style.commune} src={Commune} alt="commune logo argences" />
        </nav>
        {/* <div className={style.logos}>
          <img className={style.laurier} src={Laurier} alt="logo ville argences aubrac" />
          <img className={style.commune} src={Commune} alt="commune logo argences" />
          <img className={style['station-verte']} src={StationVerte} alt="logo ville argences aubrac" />
        </div> */}
      </div>
    </>
  );
};

export default SidebarMobile;
