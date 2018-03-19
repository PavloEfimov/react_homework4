import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Career from './AboutPages/Career'
import OurStack from './AboutPages/OurStack'
import Team from './AboutPages/Team'
import './About.css'

const About = (props) => {
  return (
    <div className = 'About__Nav'>

				<p>
					<Link to={`${props.match.path}/team`}>TEAM</Link>
				</p>

				<p>
					<Link to={`${props.match.path}/stack`}>STACK</Link>
				</p>

				<p>
					<Link to={`${props.match.path}/career`}>CAREER</Link>
				</p>
				
			
      
    <Switch>
      <Route path={`${props.match.path}/team`} component = { Team } />
      <Route
        path={`${props.match.path}/stack`}
        component = { OurStack }
      />
      <Route path={`${props.match.path}/career`} component = { Career } />
    </Switch>


    </div>
  );
};

export default About;