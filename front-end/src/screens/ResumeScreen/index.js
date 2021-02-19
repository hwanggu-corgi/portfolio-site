import React, { Component } from 'react';
import { renderToString } from 'react-dom/server'

import { AppConsumer } from '../../components/Context';
import Resume from '../../components/Resume';
import { PrintButton } from '../../components/Buttons';
import { Screen } from '../lib';

class PrintPortal extends React.PureComponent {
    constructor(props) {
      super(props);
      this.container = null;
      this.printWindow = null;
    }

    componentDidMount() {
      // STEP 1: Create a new window, a div, and append it to the window. The div
      // *MUST** be created by the window it is to be appended to (Edge only)
      this.printWindow = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      this.containerEl = this.externalWindow.document.createElement('div');
      this.printWindow.document.body.appendChild(this.container);
      this.printWindow.print();
    }

    componentWillUnmount() {
      // STEP 2: This will fire when this.state.showWindowPortal in the parent component
      // becomes false so we tidy up by just closing the window
      this.printWindow.close();
    }

    render() {
      // STEP 3: The first render occurs before componentDidMount (where we open the
      // new window) so container may be null, in this case render nothing.
      if (!this.containerEl) {
        return null;
      }

      // STEP 4: Append props.children to the container <div> in the new window
      return ReactDOM.createPortal(this.props.children, this.container);
    }
  }



class ResumeScreen extends Component {
    constructor(props) {
        super(props);
        this.resumeRef = React.createRef();
        this.data = this.props.appContext.data;
    }

    // ref: https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage
    print = () => {
        const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        const e = renderToString(<Resume data={this.data}/>);
        WinPrint.document.write(e);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
    }

    render() {
        return (
            <Screen title={"Resume"}>
                <Resume data={this.data} ref={this.resumeRef}/>
                <PrintButton onClick={this.print}/>
            </Screen>
        );
    }
}


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ResumeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));