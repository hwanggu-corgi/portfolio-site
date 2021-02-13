import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";

import { Screen } from '../lib';

const measureElement = element => {
    const DOMNode = ReactDOM.findDOMNode(element);
    return {
      width: DOMNode.offsetWidth,
      height: DOMNode.offsetHeight,
    };
}

class TypeWriter extends Component {
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
        const H1 = styled.h1`
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

        return(
            <H1 ref={r => this.outerContainer = r}>
                <div ref={r => this.innerContainer = r}>{this.state.text}</div>
            </H1>
        );
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <Screen>
                <TypeWriter/>
                <h1>
                    <div>Welcome to the</div>
                    <div>portfolio site of</div>
                    <div>Hyungmo Gu</div>
                </h1>
                <strong>A Calgary based software developer who loves to learn, create new app, and push codes to github with his love</strong>
            </Screen>
        );
    }
}

export default HomeScreen;

