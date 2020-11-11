import React, { Component } from 'react';

import { matchPath } from 'react-router'
import { NavLink, withRouter } from 'react-router-dom';

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