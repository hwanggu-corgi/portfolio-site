import styled from 'styled-components';

export function PrintButton(props) {
  const A = styled.a`
    background-color: white;
    padding: 1em;
    margin: 1.25em;
    width: 2.75em;
    height: 2.75em;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 5px 8px grey;
  `;

  return (
    <A rel="noreferrer" target="_blank" href={props.resume}>
        Print
    </A>
  );
}
