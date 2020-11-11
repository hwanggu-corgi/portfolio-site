import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../img/moe.jpeg';

class SecondaryHeader extends Component {

    toggleMenu = () => {
        let mobileMenu = (document.getElementsByClassName('header--primary-mobile'))[0];
        let screenOverlay = (document.getElementsByClassName('screen-overlay'))[0];

        // if clicked, then check for class 'opened'
        if (mobileMenu && mobileMenu.classList.contains('opened')) {
            mobileMenu.classList.remove('opened');
            screenOverlay.classList.remove('opened');

            return;
        }
        // if open, then remove 'opened'
        // if not open, add 'opened'
        mobileMenu.classList.add('opened');
        screenOverlay.classList.add('opened');
    }

    render() {
        return (
            <header class="header--mobile">
                <nav>
                    <div onClick={this.toggleMenu}><i class="fas fa-bars"></i></div>
                    <div><strong>Hyungmo Gu</strong></div>
                    <div></div>
                </nav>
            </header>
        );
    }
};

export default withRouter(PrimaryHeader);