import React, { Component } from 'react';

import { AppConsumer } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class SecondaryHeader extends Component {

    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
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

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <SecondaryHeader
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));