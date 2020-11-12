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
                        <WorkListItem id={1}/>
                        <WorkListItem id={2}/>
                        <WorkListItem id={3}/>
                        <WorkListItem id={4}/>
                    </article>
                </div>
            </section>
        );
    }
}

export default WorksScreen;

