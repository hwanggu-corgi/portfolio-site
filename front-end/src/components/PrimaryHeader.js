import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

class PrimaryHeader extends Component {

    render() {
        return (
            <header className="header--primary-desktop">
                <img className="logo" src="../../img/moe.jpeg"/>
                <nav className="menu menu--primary mb-4">
                    <h3 className="mb-9"><a href="#">Hyungmo Gu</a></h3>
                    <ul>
                        <li className="mb-2"><NavLink to="/">Home</NavLink></li>
                        <li className="mb-2"><NavLink to="/about">About</NavLink></li>
                        <li className="mb-2"><NavLink to="/works">Works</NavLink></li>
                        <li className="mb-2"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <nav className="menu menu--social mb-4">
                    <ul>
                        <li><NavLink className="icon" href="https://www.linkedin.com/in/hyungmo-gu/"><i className="fab fa-linkedin-in"></i></NavLink></li>
                        <li><NavLink className="icon" href="https://github.com/hyungmogu"><i className="fab fa-github"></i></NavLink></li>
                    </ul>
                    <div>Hyungmo Gu</div>
                    <div className="small">Thank you for visiting!</div>
                </nav>
            </header>
        );
    }
};

export default withRouter(PrimaryHeader);