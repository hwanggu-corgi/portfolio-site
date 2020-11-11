import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { AppProvider } from './components/Context';

import PrimaryHeader from './components/PrimaryHeader';
import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';

import HomeScreen from './screens/HomeScreen';
import './App.scss';

class App extends Component {

    state = {

    }

    render() {
        return (
            <AppProvider value={{...this.state}}>
                <BrowserRouter basename={"portfolio-site"}>
                    <div className="App">
                        <main role="main">
                            <PrimaryHeader/>
                            <PrimaryHeaderMobile/>
                            <Switch>
                                {/* <Route path="/about" component={AboutScreen}/>
                                <Route path="/works" component={WorksScreen}/> */}
                                <Route exact path="/" component={HomeScreen}/>
                                {/* <Route component={NotFoundScreen}/> */}
                            </Switch>
                        </main>
                    </div>
                </BrowserRouter>
            </AppProvider>
        );
    }
}

export default App;
