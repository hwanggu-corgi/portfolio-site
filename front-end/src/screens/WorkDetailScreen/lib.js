import styled from 'styled-components';


const Button = styled.a`
    font-size: 0.8rem;
    font-weight: 400;
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

const JumbotronSection = styled.section`
    min-height: 17rem;
    text-align: center;

    & > * {
        max-width: 38.5rem;
    }
`;


export function DemoSection(props) {
    const Section = styled.section`
        margin: 1rem 1rem 0 1rem;
        text-align: center;

        a:first-child {
            margin: 0 0.25rem 0 0;
        }
    `;
    return (
        <Section>
            {props.data.demoURL !== "#" && <ButtonPrimary href={props.data.demoURL}>See Demo</ButtonPrimary>}
            <ButtonPrimaryOutline href={props.data.sourceURL}>Source Code</ButtonPrimaryOutline>
        </Section>
    );
}

export function WorkSummarySection(props) {
    return (
        <>
            <JumbotronSection>
                <h2>{props.data.title}</h2>
                <p>{props.data.shortDescription}</p>
                <p>{props.data.date}</p>
                <DemoSection data={props.data}/>
            </JumbotronSection>
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