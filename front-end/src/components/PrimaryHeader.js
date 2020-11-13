import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../media/moe.jpeg';

class PrimaryHeader extends Component {

    render() {
        return (
            <header className="header--primary-desktop">
                <img className="logo" src={Logo} alt="Hyungmo Gu"/>
                <nav className="menu menu--primary mb-4">
                    <h3 className="mb-9"><NavLink to="/">Hyungmo Gu</NavLink></h3>
                    <ul>
                        <li className="mb-2"><NavLink to="/">Home</NavLink></li>
                        <li className="mb-2"><NavLink to="/about">About</NavLink></li>
                        {/* <li className="mb-2"><NavLink to="/skills">Skills</NavLink></li> */}
                        <li className="mb-2"><NavLink to="/works">Works</NavLink></li>
                        <li className="mb-2"><NavLink to="/contact">Contact</NavLink></li>
                        <li className="mb-2"><a rel="noreferrer" target="_blank" href="https://github.com/hyungmogu/personal-dev-log/files/5527452/Hyungmo%2BGu.%2BResume%2B02122020.pdf">Resume</a></li>
                    </ul>
                </nav>
                <nav className="menu menu--social mb-4">
                    <ul>
                        <li><a className="icon" href="https://www.linkedin.com/in/hyungmo-gu/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li><a className="icon" href="https://github.com/hyungmogu"><FontAwesomeIcon icon={faGithub}/></a></li>
                    </ul>
                    <div>Hyungmo Gu</div>
                    <div className="small">Thank you for visiting!</div>
                </nav>
            </header>
        );
    }
};

export default withRouter(PrimaryHeader);