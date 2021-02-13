import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    background-color: transparent;
    border: 1px solid transparent;
    text-align: center;
    padding: .375rem .75rem;
    border-radius: .25rem;
    text-decoration: none;
`;

const ButtonPrimary = styled(Button)`
    color: #fff;
    background-color: black;
    border-color: black;
`;

const ButtonPrimaryOutline = styled(Button)`
    border-color: black;
    color: black;
`;


export function DemoSection(props) {
    return (
        <section class="text-center mb-8 ml-4 mr-4">
            <div>
            {props.data.demoURL !== "#" && <a href={props.data.demoURL} class="btn btn--primary small">See Demo</a>}
                <a href={props.data.sourceURL} class="btn btn--primary-outline small">Source Code</a>
            </div>
        </section>
    );
}

export function WorkSummarySection(props) {
    return (
        <>
            <section className="jumbotron">
                <div>
                    <h2>{props.data.title}</h2>
                    <p>{props.data.shortDescription}</p>
                    <p>{props.data.date}</p>
                </div>
                <DemoSection data={props.data}/>
            </section>
            <section class="mb-8 mt-8 ml-4 mr-4">
                <h3>Technologies Used</h3>
                <ul>
                    {
                        props.data.techUsed.map(element => {
                            return (
                                <li>
                                    <strong>{element.name}</strong>: {element.items.join(", ")}
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
            {
                props.data.highlights && props.data.highlights.length > 0 && (
                    <section class="mb-8 mt-8 ml-4 mr-4">
                        <h3>Highlights</h3>
                        <ul>
                            {
                                props.data.highlights.map(highlight => {
                                    return (
                                        <li>{highlight}</li>
                                    );
                                })
                            }
                        </ul>
                    </section>
                )
            }
        </>
    );
}

export function ImagesSection(props) {
    return (
        <section className="ml-4 mr-4 images text-center mb-8">
            {
                props.data.images.map((imageURL, index) => {
                    return <img src={imageURL} class="img-fluid mb-3" alt={"Responsive image " + index} />
                })
            }
        </section>
    );
}