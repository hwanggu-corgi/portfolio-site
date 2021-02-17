import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


export class PrintButton extends Component {

  constructor(props) {
    super(props);
    this.resumeRef = React.createRef();
  }

  // ref: https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage
  print = () => {
    let res = React.createElement(this.props.children);
    console.log(res);
    // console.log(this.resumeRef);
    // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    // WinPrint.document.write(this.props.children);
    // WinPrint.focus();
    // WinPrint.print();
  }

  render() {
    const Button = styled.button`
      border: none;
      background-color: white;
      padding: 1.5em;
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

    return (
      <Button onClick={this.print}>
          <FontAwesomeIcon icon={faFilePdf} />
      </Button>
    );
  }
}
