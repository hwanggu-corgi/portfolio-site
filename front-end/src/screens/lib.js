import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { headerWidthDesktop } from '../components/Navigation';

export const H1 = styled.h1`
    margin-top: 0;
`;

export const H3 = styled.h3`
    margin-top: 0;
`;

export function Screen(props) {
    const location = useLocation();

    const Section = styled.section`
        width: 100vw;
        margin-top: 4.0rem;

        @media screen and (min-width: 930px) {
            width: calc(100vw - ${headerWidthDesktop});
            margin-top: 0;
        }
    `;

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

        return (
            <Section>
                <div className="background-img"></div>
                <Article>
                    {props.children}
                </Article>
            </Section>
        );
    } else if (location.pathname === "/works") {
        const Article = styled.article`
            display: flex;
            flex-wrap: wrap;
        `;

        return (
            <Section>
                <header className="header--secondary p-6">
                    <h2>{props.title}</h2>
                </header>
                <Article className="p-6 ml-4 mr-4">
                    {props.children}
                </Article>
            </Section>
        );
    } else {
        return (
            <Section>
                <header className="header--secondary p-6">
                    <h2>{props.title}</h2>
                </header>
                <article className="p-6 ml-4 mr-4">
                    {props.children}
                </article>
            </Section>
        );
    }
}