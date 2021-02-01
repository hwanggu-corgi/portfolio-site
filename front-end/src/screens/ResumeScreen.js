import React, { Component } from 'react';
import Resume from '../components/Resume';

class ResumeScreen extends Component {
    render() {
        return (
            <section className="content content-resume">
                <header class="header--secondary p-6">
                    <h2>Resume</h2>
                </header>
                <Resume/>
            </section>
        );
    }
}

export default ResumeScreen;