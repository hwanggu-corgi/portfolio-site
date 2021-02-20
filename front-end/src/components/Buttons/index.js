import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


class PrintPortal extends PureComponent {
  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    this.printWindow = null;
  }

  componentDidMount() {
    this.printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    this.printWindow.document.title = 'Print Resume';
    this.printWindow.document.body.appendChild(this.container);
    // this.printWindow.print();
    this.printWindow.addEventListener('beforeunload', () => {
      this.props.closePortal();
    });
  }

  componentWillUnmount() {
    this.printWindow.close();
  }

  render() {
    alert("I am here");
    alert(this.container);
    if (!this.container) {
      return null;
    }
    alert("I am here 2");
    console.log(this.container);
    console.log(this.props.children);
    console.log(this.printWindow);
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

    return (
      <>
        { !this.state.on && (
            <Button onClick={this.openPortal}>
              <div>
                <FontAwesomeIcon icon={faFilePdf} />
              </div>
            </Button>
          )
        }
        {
          this.state.on && (
              <PrintPortal closePortal={this.closePortal}>
                {this.props.children}
              </PrintPortal>
            )
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
