import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";

import { AppConsumer } from '../components/Context';

class AboutScreen extends Component {
    render() {
        return (
            <section className="content content-about">
                <header class="header--secondary p-6">
                    <h2>About</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hyungmo Gu</h3>
                        <p> is a dedicated and energetic software developer with 2 years of industry experience living in Calgary, Canada.</p>

                        <p>Driven by his love to learn and create new applications, aside from the work hours, he can be found in Github pushing his latest works to repositories.</p>

                        <p class="small"><i>To my love, whom provided nothing but warmth and support to make this website and my 6 years journey as software developer possible.</i></p>
                    </article>
                </div>
            </section>
        );
    }
}

class ContactScreenBase extends Component {

    render() {
        console.log(this.props);
        let email = this.props.appContext.data.contact.email;
        let linkedIn = this.props.appContext.data.contact.linkedIn;
        let github = this.props.appContext.data.contact.github;

        return (
            <section className="content content-contacts">
                <header class="header--secondary p-6">
                    <h2>Contact</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hire Hyungmo!</h3>
                        <ul>
                            <li>Email: <a href={"mailto:" + email}>{email}</a></li>
                            <li>LinkedIn: <a href={linkedIn.url}>{linkedIn.label}</a></li>
                            <li>Github: <a href={github.url}>{github.label}</a></li>
                        </ul>
                    </article>
                </div>
            </section>
        );
    }
}

const ContactScreen = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ContactScreenBase
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";

const measureElement = element => {
    const DOMNode = ReactDOM.findDOMNode(element);
    return {
      width: DOMNode.offsetWidth,
      height: DOMNode.offsetHeight,
    };
  }

const TypeWriterH1 = styled.h1`
    width: 6.5rem;

    & > * {
        overflow: hidden;
        border-right-color: white;
        border-right-style: solid;
        display: inline-block;
        animation: cursorAnim .5s steps(2) infinite;
    }

    @keyframes cursorAnim{
        0% { border-right-width: 0;}
        100% { border-right-width: 0.25rem;}
    }
`;

class HomeScreen extends Component {
    state = {
        text: ""
    };

    handleTyping(string, time, outerElement, innerElement) {
        let timeInterval = (time / string.length) * 1000; // from ms to seconds

        // Calculate delay time per character
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            setTimeout(() => {
                // Add character to inner container
                this.setState(prevState => {
                    return {
                        text: prevState.text + letter
                    }
                })

                // Determine the width of inner container with newly added character
                let innerElementNewWidth = measureElement(innerElement).width;

                // Increase the width of outer element to the new width
                outerElement.style.width = `${innerElementNewWidth}px`;

            }, i * timeInterval);
        }
    }

    componentDidMount() {
        this.handleTyping("Hello,", 3, this.outerContainer, this.innerContainer);
    }

    render() {
        return (
            <section className="content content-home">
                <div className="background-img"></div>
                <article className="article--home">
                    <TypeWriterH1 ref={r => this.outerContainer = r}>
                        <div ref={r => this.innerContainer = r}>{this.state.text}</div>
                    </TypeWriterH1>
                    <h1>
                        <div>Welcome to the</div>
                        <div>portfolio site of</div>
                        <div>Hyungmo Gu</div></h1>
                    <strong>A Calgary based software developer who loves to learn, create new app, and push codes to github with his love</strong>
                </article>
            </section>
        );
    }
}

export default HomeScreen;


import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import Resume from '../components/Resume';
import { PrintButton } from '../components/Buttons';


class ResumeScreen extends Component {
    render() {
        const data = this.props.appContext.data;
        const pdfURL = this.props.appContext.data.resume.pdfURL;
        return (
            <section className="content content-resume">
                <header class="header--secondary p-6">
                    <h2>Resume</h2>
                </header>
                <Resume data={data}/>
                <PrintButton href={pdfURL}/>
            </section>
        );
    }
}


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ResumeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));



import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
class WorkDetailScreen extends Component {

    getWork = (id, works) => {

        let res = works.find(element => element.id === id);

        if (res === -1) {
            console.error("getWork: element not found");
        }

        return res;
    }

    render() {
        let work = this.getWork(parseInt(this.props.match.params.id), this.props.appContext.data.resume.projectExp);

        return (
            <section className="content contentworks_detail">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <section class="jumbotron">
                    <div>
                        <h2>{work.title}</h2>
                        <p>
                            {work.shortDescription}
                        </p>
                        <p>
                            {work.date}
                        </p>
                        <div>
                            {work.demoURL !== "#" && <a href={work.demoURL} class="btn btn--primary small">See Demo</a>}
                            <a href={work.sourceURL} class="btn btn--primary-outline small">Source Code</a>
                        </div>
                    </div>
                </section>
                <div class="ml-4 mr-4">
                    <article>
                        <section class="mb-8 mt-8">
                            <h3>Technologies Used</h3>
                            <ul>
                                {
                                    work.techUsed.map(element => {
                                        return (
                                            <li>
                                                <strong>{element.name}</strong>: {element.items.join(", ")}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </section>
                        {
                            work.highlights && work.highlights.length > 0 && (
                                <section class="mb-8 mt-8">
                                    <h3>Highlights</h3>
                                    <ul>
                                        {
                                            work.highlights.map(highlight => {
                                                return (
                                                    <li>{highlight}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </section>
                            )
                        }

                        <section class="images text-center mb-8">
                            {
                                work.images.map((imageURL, index) => {
                                    return <img src={imageURL} class="img-fluid mb-3" alt={"Responsive image " + index} />
                                })
                            }
                        </section>

                        <section class="text-center mb-8">
                            <div>
                            {work.demoURL !== "#" && <a href={work.demoURL} class="btn btn--primary small">See Demo</a>}
                                <a href={work.sourceURL} class="btn btn--primary-outline small">Source Code</a>
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


import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';

import WorkListItem from '../components/WorkListItem';

class WorksScreen extends Component {

    render() {
        let works = this.props.appContext.data.resume.projectExp;

        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <div>
                    <article>
                        {works.map((value, index) => <WorkListItem key={index+1} work={value}/>)}
                    </article>
                </div>
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


export {
    HomeScreen,
    AboutScreen,
    ContactScreen,
    ResumeScreen,
    WorkDetailScreen,
    WorksScreen
};