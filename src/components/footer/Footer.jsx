import React, { Component } from 'react';
import Heart from '../../asset/img/heart.png';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='sectionFooter'>
        <span className='footerMade'>Made with</span>
        <img className='footerHeart' src={Heart} alt='circle'></img>
        <span className='footerMade'>by</span>
        <a rel="noopener noreferrer" href='https://www.linkedin.com/in/geoffrey-picard-769290132/' target="_blank" className='footerName'>Geoffrey Picard</a>
      </div>
    );
  }
}

export default Footer;