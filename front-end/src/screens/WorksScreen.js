import React, { Component } from 'react';

import WorkListItem from '../components/WorkListItem';

class WorksScreen extends Component {

    render() {
        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <div>
                    <article>
                        <WorkListItem/>
                        <WorkListItem/>
                        <WorkListItem/>
                        <WorkListItem/>
                    </article>
                </div>
            </section>
        );
    }
}

export default WorksScreen;

