import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../img/moe.jpeg';

class SecondaryHeader extends Component {

    state = {
        clicked: false
    };


    toggleMenu = () => {
        this.setState({clicked: true});
    }

    render() {
        return (
            <header className="header--mobile">
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
                    <div><strong>Hyungmo Gu</strong></div>
                    <div></div>
                </nav>
            </header>
        );
    }
};

export default withRouter(SecondaryHeader);