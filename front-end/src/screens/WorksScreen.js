import React, { Component } from 'react';

class WorksScreen extends Component {

    render() {
        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>About</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hyungmo Gu</h3>
                        <p> is a dedicated and energetic software developer with 2 years of industry experience living in Calgary, Canada.</p>

                        <p>Driven by his love to learn and create new applications, aside from the work hours, he can be found in Github pushing his latest works to repositories.</p>

                        <p class="small"><i>To my love, whom provided nothing but warmth and support to make this website and my 6 years journey as software developer possible.</i></p>

                        <a class="small dotted" target="_blank" href="https://github.com/hyungmogu/personal-dev-log/files/5527452/Hyungmo%2BGu.%2BResume%2B02122020.pdf">Resume</a>
                    </article>
                </div>
            </section>
        );
    }
}

export default WorksScreen;

