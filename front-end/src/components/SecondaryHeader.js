import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../img/moe.jpeg';

class SecondaryHeader extends Component {

    state = {
        clicked: false
    };


    toggleMenu = () => {
        this.setState({clicked: true});
    }

    render() {
        let className = this.state.clicked ? "header--mobile opened" : "header--mobile";
        return (
            <header class="header--mobile">
                <nav>
                    <div onClick={this.toggleMenu}><i className={className}></i></div>
                    <div><strong>Hyungmo Gu</strong></div>
                    <div></div>
                </nav>
            </header>
        );
    }
};

export default withRouter(SecondaryHeader);