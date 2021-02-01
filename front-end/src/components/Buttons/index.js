import styled from 'styled-components';

export function PrintButton(props) {
  const A = styled.a`
    background-color: white;
    padding: 1em;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display:flex;
  `;

  return (
    <A rel="noreferrer" target="_blank" href={props.resume}>
        Print
    </A>
  );
}
