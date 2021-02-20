import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


class PrintPortal extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.printWindow = null;
  }

  componentDidMount() {
    this.printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    this.container = this.printWindow.document.createElement('div');
    this.printWindow.document.body.appendChild(this.container);
    this.printWindow.print();
  }

  render() {
    if (!this.container) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.container);
  }
}


export class PrintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    }
  }
  render() {
    const Button = styled.button`
      border: none;
      background-color: white;
      border-radius: 50%;
      box-shadow: 3px 5px 8px grey;
      position: fixed;
      right: 0;
      bottom: 0;
      font-size: 1.5em;
      text-decoration: none;
      color: inherit;
      padding: 1em;
      margin: 1.25em;

      div {
        width: 1.25em;
        height: 1.25em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
      console.log(this.props.children)
    return (
      <>
        <Button onClick={this.openPortal}>
            <div>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
        </Button>
        {
          this.state.on ?
            <PrintPortal onClose={this.closePortal}>
              {this.props.children}
            </PrintPortal>
            : null
        }
      </>
    );
  }

  openPortal = () => {
    this.setState({on: true})
  }

  closePortal = () => {
    this.setState({on: false})
  }
}
