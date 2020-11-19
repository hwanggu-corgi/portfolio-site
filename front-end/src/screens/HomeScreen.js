import React, { Component } from 'react';

class HomeScreen extends Component {

    handleTyping() {
        // Add character to inner container

        // Determine the width of inner container with newly added character

        // Measure the size of inner container

        // Increase the outer container by the new width
    }

    render() {
        return (
            <section className="content content-home">
                <div className="background-img"></div>
                <article className="article--home">
                    <h1 className="title typing"><div>Hello,</div></h1>
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

