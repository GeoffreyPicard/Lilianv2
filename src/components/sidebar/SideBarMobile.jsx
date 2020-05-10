import React, { useState } from 'react';
import { sideBarLinks } from '../../utils/sideBarLinks';
import { Link } from 'react-router-dom';
import style from './SidebarMobile.module.css';
import Commune from '../../asset/img/commune.png';
import logo from '../../asset/img/logo.png'

const SidebarMobile = () => {
  const [checkBox, setCheckBox] = useState(false);
  const deselect = () => {
    setCheckBox(!checkBox)
  }
  return (
    <>
      <div class={style}>
        <nav className={style.navigation} role="navigation">
          <div className={style['nav-wrapper']}>
            <div className={style.menuToggle}>
              <input type="checkbox" checked={checkBox} onClick={() => deselect()} />
              <span></span>
              <span></span>
              <span></span>
              <ul className={style.menu}>
                <Link className={style.accueil} to='/' onClick={() => {
                  deselect()
                  window.scrollTo(0, 0)
                }
                }>
                  <img className={style.logo} src={logo} />
                  <div >ACCUEIL</div>
                </Link>
                <div className={style['links-wrapper']}>
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
                </div>
              </ul>
            </div>
            <Link to='/' onClick={() => {
              window.scrollTo(0, 0)
            }
            }>
              <div className={style['logo-title']}>
                Argences en aubrac
							</div>

            </Link>
            <img className={style.commune} src={Commune} alt="commune logo argences" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarMobile;
