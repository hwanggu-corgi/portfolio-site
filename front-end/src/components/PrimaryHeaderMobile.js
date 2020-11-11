import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheck, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

class PrimaryHeaderMobile extends Component {

    navRef = React.createRef();

    state = {
        addNew: false
    };

    handleAddNewTopic = () => {
        this.setState( prev => {
            return {
                addNew: !prev.addNew
            }
        });
    }

    handleToggleMobileMenu = () => {
        if (this.navRef.current.classList.contains('open')) {
            this.navRef.current.classList.remove('open');
            return;
        }

        this.navRef.current.classList.add('open');
    }

    handleCloseMenu = () => {
        this.navRef.current.classList.remove('open');
    }

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/logout/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        return (
        <header className="primaryHeaderMobile">
            <section className="primaryHeaderMobile--header">
                <button className="button button--menu" onClick={this.handleToggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <section className="primaryHeaderMobile--title">
                    <NavLink onClick={this.handleCloseMenu}  exact to="/home"><strong>Note Sharing Application</strong></NavLink>
                </section>
            </section>
            <nav ref={this.navRef} className="primaryHeaderMobile--navigation">
                <section>
                    <button onClick={this.handleAddNewTopic} className="button button--add">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </section>
                <ul>
                    <li><NavLink onClick={this.handleCloseMenu} to="/notes/physics">Physics</NavLink></li>
                    <li><NavLink onClick={this.handleCloseMenu} to="/notes/social_studies">Social Studies</NavLink></li>
                    <li><NavLink onClick={this.handleCloseMenu} to="/notes/biology">Biology</NavLink></li>
                    <li><NavLink onClick={this.handleCloseMenu} to="/notes/english">English</NavLink></li>
                    {
                        this.state.addNew ?
                        <li>
                            <form className="form--header">
                                <input type="text" placeholder="Name"/>
                                <button className="button button--check" type="submit">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </button>
                                <button className="button button--cancel">
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                </button>
                            </form>
                        </li>

                        : ''
                    }
                </ul>
            </nav>
        </header>
        );
    }
};

export default withRouter(PrimaryHeaderMobile);