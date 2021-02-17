import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderToString } from 'react-dom/server';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';

export function PrintButton(props) {
  const Button = styled.button`
    background-color: white;
    padding: 1em;
    margin: 1.25em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 5px 8px grey;
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: 1.5em;
    text-decoration: none;
    color: inherit;
  `;

  const print = () => {
    const string = renderToString(props.children);
    const pdf = new jsPDF();
    pdf.fromHTML(string);
    pdf.save('pdf')
  }

  return (
    <Button onClick={print}>
        <FontAwesomeIcon icon={faFilePdf} />
    </Button>
  );
}
