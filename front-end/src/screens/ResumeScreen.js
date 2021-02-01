import React, { Component } from 'react';
import Resume from '../components/Resume';
import { PrintButton } from '../components/Buttons';


class ResumeScreen extends Component {
    render() {
        return (
            <section className="content content-resume">
                <header class="header--secondary p-6">
                    <h2>Resume</h2>
                </header>
                <Resume/>
                <PrintButton/>
            </section>
        );
    }
}

export default ResumeScreen;