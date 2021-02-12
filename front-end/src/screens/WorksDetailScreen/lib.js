export function WorkDetailScreenHeader(props) {
    return (
        <section className="jumbotron">
            <div>
                <h2>{props.data.title}</h2>
                <p>
                    {props.data.shortDescription}
                </p>
                <p>
                    {props.data.date}
                </p>
                <div>
                    {props.data.demoURL !== "#" && <a href={props.data.demoURL} className="btn btn--primary small">See Demo</a>}
                    <a href={props.data.sourceURL} className="btn btn--primary-outline small">Source Code</a>
                </div>
            </div>
        </section>
    );
}