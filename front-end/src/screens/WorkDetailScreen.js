import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
class WorkDetailScreen extends Component {

    getWork = (id, works) => {

        let res = works.find(element => element.id == (id - 1));

        if (res == -1) {
            console.error("getWork: element not found");
        }

        return res;
    }

    render() {
        let id = this.props.match.params.id;
        let work = this.getWork(this.props.match.params.id, this.props.appContext.data.works);
        console.log(work);

        return (
            <section className="content -contentworks_detail">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <section class="jumbotron">
                    <div>
                        <h2>{work.title}</h2>
                        <p>
                            Portfolio short description goes here
                        </p>
                        <p>
                            August 21st, 2019
                        </p>
                        <div>
                            <a href="#" class="btn btn--primary small">See Demo</a>
                            <a href="#" class="btn btn--primary-outline small">Source Code</a>
                        </div>
                    </div>
                </section>
                <div class="ml-4 mr-4">
                    <article>
                        <section class="mb-8 mt-8">
                            <h3>Technologies Used</h3>
                            <ul>
                                <li><strong>Backend</strong>: Backend 1</li>
                                <li><strong>Frontend</strong>: Frontend 1</li>
                                <li><strong>Database</strong>: Database 1</li>
                            </ul>
                        </section>

                        <section class="images text-center mb-8">
                            <img src="https://hyungmogu-portfolio-site.s3-us-west-2.amazonaws.com/social-team-builder.png" class="img-fluid mb-3" alt="Responsive image" />
                            <img src="https://hyungmogu-portfolio-site.s3-us-west-2.amazonaws.com/social-team-builder-1.png" class="img-fluid mb-3" alt="Responsive image" />
                            <img src="https://hyungmogu-portfolio-site.s3-us-west-2.amazonaws.com/social-team-builder-2.png" class="img-fluid mb-3" alt="Responsive image" />
                        </section>

                        <section class="text-center mb-8">
                            <div>
                                <a href="#" class="btn btn--primary small">See Demo</a>
                                <a href="#" class="btn btn--primary-outline small">Source Code</a>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <WorkDetailScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));