import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import NoteImageObject from '../components/NoteImageObject';

class HomeScreen extends Component {

    render() {
        let recentItems = this.props.appContext.recentItems;

        return (
            <section className="screen screen--home">
                <main className="main">
                    <h3>Recently Added Notes</h3>
                    <section className="items">
                        {recentItems.map(({pk, ...props}) =>
                            <NoteImageObject key={pk} {...props}/>
                        )}
                    </section>
                </main>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <HomeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

