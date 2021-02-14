import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

import HomeBackgroundImg from '../media/cover-page.jpg';
import { headerHeight } from '../components/Navigation';

export const H1 = styled.h1`
    margin-top: 0;
`;

export const H3 = styled.h3`
    margin-top: 0;
`;

export function Screen(props) {
    const location = useLocation();
    if (location.pathname === "/") {
        const Article = styled.article`
            margin: 5rem 2rem 0 2rem;
            color: white;
            max-width: 430px;

            @media screen and (min-width: 930px) {
                margin-top: 10rem;
                margin-left: 5rem;
                max-width: 430px;
            }
        `;

        // TEMP for now
        const BackgroundImg = styled.div`
            width: inherit;
            padding-top: ${headerHeight};
            height: calc(100vh - ${headerHeight});
            position: absolute;
            z-index: -1;
            top: 0;
            background-image: url(${HomeBackgroundImg});
            background-repeat: no-repeat;
            background-size: cover;

            @media screen and (min-width: 930px) {
                padding-top: 0;
                height: 100vh;
            }

        `;

        return (
            <section>
                <BackgroundImg/>
                <Article>
                    {props.children}
                </Article>
            </section>
        );
    } else if (location.pathname === "/works") {
        const Article = styled.article`
            display: flex;
            flex-wrap: wrap;
        `;

        return (
            <section className="content">
                <header className="header--secondary p-6">
                    <h2>{props.title}</h2>
                </header>
                <Article className="p-6 ml-4 mr-4">
                    {props.children}
                </Article>
            </section>
        );
    } else {
        return (
            <section className="content">
                <header className="header--secondary p-6">
                    <h2>{props.title}</h2>
                </header>
                <article className="p-6 ml-4 mr-4">
                    {props.children}
                </article>
            </section>
        );
    }
}