import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';


class ResumeScreen extends Component {

    getWork = (id, works) => {

        let res = works.find(element => element.id == id);

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
            <Resume/>
        );
    }
}

export default ResumeScreen;