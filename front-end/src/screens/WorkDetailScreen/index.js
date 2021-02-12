import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';
import { WorkSummarySection, DemoSection, ImagesSection } from './lib';


class WorkDetailScreen extends Component {
    getWork = (id, works) => {
        let res = works.find(element => element.id === id);
        if (res === -1) {
            console.error("getWork: element not found");
        }
        return res;
    }

    render() {
        let work = this.getWork(
            parseInt(this.props.match.params.id),
            this.props.appContext.data.resume.projectExp);

        return (
            <section className="content contentworks_detail">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <WorkSummarySection data={work}/>
                <ImagesSection data={work}/>
                <DemoSection data={work}/>
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