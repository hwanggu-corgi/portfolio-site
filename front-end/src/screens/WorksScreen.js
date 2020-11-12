import React, { Component } from 'react';

import WorkListItem from '../components/WorkListItem';

class WorksScreen extends Component {

    render() {
        let works = this.props.data.works;

        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <div>
                    <article>
                        {works.map((value, index) => {
                            return <WorkListItem key={index+1} work={value}/>
                        })}
                    </article>
                </div>
            </section>
        );
    }
}

export default WorksScreen;

