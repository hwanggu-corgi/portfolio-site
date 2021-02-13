import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

export const H1 = styled.h1`
    margin-top: 0;
`;

export const H3 = styled.h3`
    margin-top: 0;
`;

export function Screen(props) {
    const location = useLocation();
    console.log(location);
    if (location.pathname === "/") {
        return (
            <section className="content content-home">
                <div className="background-img"></div>
                <article className="article--home">
                    {props.children}
                </article>
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