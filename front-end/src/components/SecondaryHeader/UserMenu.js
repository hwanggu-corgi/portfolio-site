import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class UserMenu extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="userMenu">
                    <button className="button button--user">
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </button>
                    <nav className="userMenu--navigation">
                        <ul>
                            <li className="userMenu--item">
                                <NavLink
                                    to="/logout"
                                    className="userMenu--link"
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </section>
            </React.Fragment>
        );
    }
};

export default UserMenu;