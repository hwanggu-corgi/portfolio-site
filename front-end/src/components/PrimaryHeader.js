import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


class PrimaryHeader extends Component {

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

    render() {
        const {location} = this.props;

        if (location.pathname.match(/\/login/) ||
            location.pathname.match(/\/logout/) ||
            location.pathname.match(/\/signup/)
        ) {
            return null;
        }

        let match = matchPath(this.props.history.location.pathname, {
            path: '/notes/:note/:folder/:page/',
            exact: true,
            strict: false
          });


        if ((match) &&
            (match.params) &&
            (match.params.note) &&
            (match.params.folder) &&
            (match.params.page)) {
                return null;
        }

        return (
            <header className="header--primary-desktop">
                <img className="logo" src="https://placehold.it/200x200">
                <nav className="menu menu--primary mb-4">
                    <h3 className="mb-9"><a href="#">Hyungmo Gu</a></h3>
                    <ul>
                        <li className="mb-2"><a href="index.html">Home</a></li>
                        <li className="mb-2"><a href="about.html">About</a></li>
                        <li className="mb-2"><a href="works.html">Works</a></li>
                        <li className="mb-2"><a href="contacts.html">Contacts</a></li>
                    </ul>
                </nav>
                <nav className="menu menu--social mb-4">
                    <ul>
                        <li><a className="icon" href="https://www.linkedin.com/in/hyungmo-gu/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a className="icon" href="https://github.com/hyungmogu"><i className="fab fa-github"></i></a></li>
                    </ul>
                    <div>Hyungmo Gu</div>
                    <div className="small">Thank you for visiting!</div>
                </nav>
            </header>
        );
    }
};

export default withRouter(PrimaryHeader);