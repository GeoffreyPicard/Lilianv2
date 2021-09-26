import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/homev2/Home';
import Activitev2 from './components/activitev2/Activite';
import SidebarDesktop from './components/sidebar/SidebarDesktop';
import SidebarMobile from './components/sidebar/SideBarMobile';
import Footer from './components/footer/Footer';
import { Desktop, Mobile } from './utils/responsive'
import './index.css';
import style from './index.module.css'
import Header from './components/homev2/header/Header'

const app = {
	width: '100%'
};

const Wrapper = () => {
	return (
		<div className={style['main-page']}>
			<Desktop>
				<Header />
			</Desktop>
			<Route exact path="/" component={Home} />
			<Route exact path="/activite/:activite" component={Activitev2} />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<Router>
		<section style={app}>
			<Desktop>
				<SidebarDesktop />
			</Desktop>
			<Mobile>
				<SidebarMobile />
			</Mobile>
			<Wrapper />
		</section>
	</Router>,
	document.getElementById('root')
);
