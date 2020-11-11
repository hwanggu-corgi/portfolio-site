import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { AppConsumer } from '../components/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../img/moe.jpeg';

class PrimaryHeaderMobile extends Component {

    render() {

        let headerPrimaryMobile = this.props.appContext.clicked ? "header--primary-mobile opened" : "header--primary-mobile";

        return (
            <header className={headerPrimaryMobile}>
                <nav>
                    <div onclick="toggleMenu()"><i className="fas fa-times"></i></div>
                </nav>
                <section>
                    <img className="logo" src={Logo} alt="Hyungmo Gu"/>
                    <nav className="menu menu--primary mb-4">
                        <h3 className="mb-9"><NavLink to="/">Hyungmo Gu</NavLink></h3>
                        <ul>
                            <li className="mb-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mb-2"><NavLink to="/about">About</NavLink></li>
                            <li className="mb-2"><NavLink to="/skills">Skills</NavLink></li>
                            <li className="mb-2"><NavLink to="/works">Works</NavLink></li>
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
                </section>
            </header>
        );
    }
};

let PrimaryHeaderMobileWithRoute = withRouter(PrimaryHeaderMobile);

export default React.forwardRef((props, ref) => (
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
