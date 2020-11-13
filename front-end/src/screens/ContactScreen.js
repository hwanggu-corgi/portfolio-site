import React, { Component } from 'react';

class AboutScreen extends Component {

    render() {
        return (
            <section className="content content-contacts">
                <header class="header--secondary p-6">
                    <h2>About</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        <h3>Hire Moe!</h3>
                        <ul>
                            <li>Email: Add email here</li>
                            <li>Linked-In: linkedin.com/in/hyungmo-gu/</li>
                            <li>Github: linkedin.com/in/hyungmo-gu/</li>
                        </ul>
                    </article>
                </div>
            </section>
        );
    }
}

export default AboutScreen;

