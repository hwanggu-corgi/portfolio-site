import React, { Component } from 'react';

class HomeScreen extends Component {

    state = {
        text: ""
    };

    handleTyping(string, time, containerClassName) {
        let timeInterval = time / string.length;

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
                let innerContainer = outerContainer.childNodes[i];

                // Measure the size of inner container

                // Increase the outer container by the new width


            }, i * timeInterval);
        }
    }

    componentDidMount() {
        this.handleTyping("Hello,", 3, "typing");
    }

    render() {
        return (
            <section className="content content-home">
                <div className="background-img"></div>
                <article className="article--home">
                    <h1 ref={r => this.outerContainer = r} className="title typing"><div>{this.state.text}</div></h1>
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

