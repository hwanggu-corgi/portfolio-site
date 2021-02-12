import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppConsumer } from '../Context';
import Logo from '../../media/moe.jpeg';

class PrimaryHeaderBase extends Component {
    render() {
        return (
            <header className="header--primary-desktop">
                <img className="logo" src={Logo} alt="Hyungmo Gu"/>
                <nav className="menu menu--primary mb-4">
                    <h3 className="mb-9"><NavLink to="/">Hyungmo Gu</NavLink></h3>
                    <ul>
                        <li className="mb-2"><NavLink to="/">Home</NavLink></li>
                        <li className="mb-2"><NavLink to="/about">About</NavLink></li>
                        <li className="mb-2"><NavLink to="/works">Works</NavLink></li>
                        <li className="mb-2"><NavLink to="/resume">Resume</NavLink></li>
                        <li className="mb-2"><NavLink to="/contact">Contact</NavLink></li>
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

const PrimaryHeaderWithRoute = withRouter(PrimaryHeaderBase);
const PrimaryHeader = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <PrimaryHeaderWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


class PrimaryHeaderMobileBase extends Component {
    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
    }

    render() {
        let headerPrimaryMobile = this.props.appContext.state.toggled ? "header--primary-mobile opened" : "header--primary-mobile";

        return (
            <header className={headerPrimaryMobile}>
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faTimes} /></div>
                </nav>
                <section>
                    <img className="logo" src={Logo} alt="Hyungmo Gu"/>
                    <nav className="menu menu--primary mb-4">
                        <h3 className="mb-9"><NavLink onClick={this.toggleMenu} to="/">Hyungmo Gu</NavLink></h3>
                        <ul>
                            <li className="mb-2"><NavLink onClick={this.toggleMenu} to="/">Home</NavLink></li>
                            <li className="mb-2"><NavLink onClick={this.toggleMenu} to="/about">About</NavLink></li>
                            <li className="mb-2"><NavLink onClick={this.toggleMenu} to="/works">Works</NavLink></li>
                            <li className="mb-2"><NavLink to="/resume">Resume</NavLink></li>
                            <li className="mb-2"><NavLink onClick={this.toggleMenu} to="/contact">Contact</NavLink></li>
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
                </section>
            </header>
        );
    }
};

const PrimaryHeaderMobileWithRoute = withRouter(PrimaryHeaderMobileBase);
const PrimaryHeaderMobile = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <PrimaryHeaderMobileWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


class SecondaryHeaderBase extends Component {
    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
    }

    render() {
        return (
            <header className="header--mobile">
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
                    <div className="menu"><strong><NavLink to="/">Hyungmo Gu</NavLink></strong></div>
                    <div></div>
                </nav>
            </header>
        );
    }
};

const SecondaryHeaderWithRoute = withRouter(SecondaryHeaderBase);
const SecondaryHeader = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <SecondaryHeaderWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


export {
    PrimaryHeader,
    PrimaryHeaderMobile,
    SecondaryHeader
};