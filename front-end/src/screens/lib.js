import { useLocation } from 'react-router-dom'

export function Screen(props) {
    const location = useLocation();

    if (location.pathname === "/") {
        return (
            <section className="content content-home">
                <div className="background-img"></div>
                <article className="article--home">
                    {props.children}
                </article>
            </section>
        );
    } else {
        return (
            <section className="content">
                <header class="header--secondary p-6">
                    <h2>{props.title}</h2>
                </header>
                <article className="p-6 ml-4 mr-4">
                    {props.children}
                </article>
            </section>
        );
    }
}