import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { AppProvider } from './components/Context';

// import PrimaryHeader from './components/PrimaryHeader';
// import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';

import HomeScreen from './screens/Home/HomeScreen';
import './App.scss';

class App extends Component {

    state = {

    }

    render() {
        return (
            <AppProvider value={{...this.state}}>
                <BrowserRouter basename={"portfolio-site"}>
                    <div className="App">

                        {/* <PrimaryHeaderMobile/>
                        <PrimaryHeader/> */}
                        <Switch>
                            {/* <Route path="/about" component={AboutScreen}/>
                            <Route path="/works" component={WorksScreen}/> */}
                            <Route path="/" component={HomeScreen}/>
                            {/* <Route component={NotFoundScreen}/> */}
                        </Switch>
                    </div>
                </BrowserRouter>
            </AppProvider>
        );
    }
}

export default App;
