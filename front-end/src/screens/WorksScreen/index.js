import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';

import WorkListItem from '../../components/WorkListItem';

class WorksScreen extends Component {

    render() {
        let works = this.props.appContext.data.resume.projectExp;

        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <article>
                    {works.map((value, index) => <WorkListItem key={index+1} work={value}/>)}
                </article>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <WorksScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

