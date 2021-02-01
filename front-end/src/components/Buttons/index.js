import styled from 'styled-components';

export function PrintButton(props) {
  const A = styled.a`
    background-color: white;
  `;

  return (
    <A rel="noreferrer" target="_blank" href={props.resume}>
        Print
    </A>
  );
}
