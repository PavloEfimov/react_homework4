import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{
	render(){
		return(
			<ul className = 'Nav'>
				<li>
					<Link to='/'>HOME</Link>
				</li>

				<li>
					<Link to='/movies'>MOVIES</Link>
				</li>

				<li>
					<Link to='/about'>ABOUT</Link>
				</li>
				
			</ul>
		)
	}
}

export default Nav;