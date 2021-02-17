import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';
import Resume from '../../components/Resume';
import { PrintButton } from '../../components/Buttons';
import { Screen } from '../lib';


class ResumeScreen extends Component {
    constructor(props) {
        super(props);
        this.resumeRef = React.createRef();
    }

    // ref: https://stackoverflow.com/questions/12997123/print-specific-part-of-webpage
    print = () => {
        console.log(this.resumeRef);
        // var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        // WinPrint.document.write(this.props.children);
        // WinPrint.focus();
        // WinPrint.print();
    }

    render() {
        const data = this.props.appContext.data;
        const pdfURL = this.props.appContext.data.resume.pdfURL;
        return (
            <Screen title={"Resume"}>
                <Resume data={data} ref={this.resumeRef}/>
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