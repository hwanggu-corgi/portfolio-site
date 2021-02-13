import React, { Component } from 'react';
import styled from 'styled-components';

import { Screen, H3 } from '../lib';


class AboutScreen extends Component {
    render() {
        const H3Extended = styled(H3)`
            font-size: 2.5rem;

            @media screen and (min-width: 930px) {
                font-size: 2.9rem;
            }
        `;

        return (
            <Screen title={"About"}>
                <H3Extended>Hyungmo Gu</H3Extended>
                <p> is a dedicated and energetic software developer with 2 years of industry experience living in Calgary, Canada.</p>
                <p>Driven by his love to learn and create new applications, aside from the work hours, he can be found in Github pushing his latest works to repositories.</p>
                <p className="small"><i>To my love, whom provided nothing but warmth and support to make this website and my 6 years journey as software developer possible.</i></p>
            </Screen>
        );
    }
}

export default AboutScreen;

