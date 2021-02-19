import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


class PrintPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = null;
    this.printWindow = null;
  }

  componentDidMount() {
    console.log("I am here 3");
    // STEP 1: Create a new window, a div, and append it to the window. The div
    // *MUST** be created by the window it is to be appended to (Edge only)
    this.printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    this.container = this.printWindow.document.createElement('div');
    this.printWindow.document.body.appendChild(this.container);
    this.printWindow.print();
  }

  componentWillUnmount() {
    this.printWindow.close();
  }

  render() {
    console.log("I am here 2 ");
    // STEP 3: The first render occurs before componentDidMount (where we open the
    // new window) so container may be null, in this case render nothing.
    if (!this.container) {
      return null;
    }

    // STEP 4: Append props.children to the container <div> in the new window
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
        <Button onClick={this.togglePortal}>
            <div>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
        </Button>
        {
          this.state.on ?
            <PrintPortal>
              {this.props.children}
            </PrintPortal>
            : null
        }
      </>
    );
  }

  togglePortal = () => {
    ReactDOM.render(<PrintPortal />, document.getElementById("portals"));
    // this.setState((state, props) => {
    //   return {
    //     on: !state.on
    //   }
    // })
  }
}
