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
            <section className="content content-contacts">
                <header class="header--secondary p-6">
                    <h2>Contact</h2>
                </header>
                <div class="ml-4 mr-4">
                    <article class="p-6">
                        {props.children}
                    </article>
                </div>
            </section>
        );
    }
}