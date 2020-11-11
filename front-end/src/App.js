import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { AppProvider } from './components/Context';

// import PrimaryHeader from './components/PrimaryHeader';
// import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';

import HomeScreen from './screens/HomeScreen';
import './App.scss';

class App extends Component {

    state = {
        user: {
            name: null,
            email: null,
            authToken: null
        },
        recentItems: [
            {
                pk: 1,
                name: 'Page 1',
                path: 'physics/lecture1/page1',
                imageURL: 'https://via.placeholder.com/200'
            },
            {
                pk: 2,
                name: 'Page 2',
                path: 'physics/lecture1/page2',
                imageURL: 'https://via.placeholder.com/200'
            },
            {
                pk: 3,
                name: 'Page 3',
                path: 'physics/lecture1/page3',
                imageURL: 'https://via.placeholder.com/200'
            }
        ],
        notes: {
            slug: null,
            imported: false,
            items: []
        },
        folders: {
            info: {
                slug: 'physics',
                name: 'Physics',
                path: 'physics/'
            },
            items: [
                {
                    pk: 1,
                    path: 'physics/lecture1',
                    name: 'Lecture 1'
                },
                {
                    pk: 2,
                    path: 'physics/lecture2',
                    name: 'Lecture 2'
                },
                {
                    pk: 3,
                    path: 'physics/lecture3',
                    name: 'Lecture 3'
                }
            ]
        },
        pages: {
            info: {
                slug: 'lecture1',
                name: 'Lecture 1',
                path: 'physics/lecture1/'
            },
            currentIndex: null,
            items: [
                {
                    pk: 1,
                    name: 'Page 1',
                    path: 'physics/lecture1/page1',
                    imageURL: 'https://via.placeholder.com/200'
                },
                {
                    pk: 2,
                    name: 'Page 2',
                    path: 'physics/lecture1/page2',
                    imageURL: 'https://via.placeholder.com/200'
                },
                {
                    pk: 3,
                    name: 'Page 3',
                    path: 'physics/lecture1/page3',
                    imageURL: 'https://via.placeholder.com/200'
                },
                {
                    pk: 4,
                    name: 'Page 4',
                    path: 'physics/lecture1/page4',
                    imageURL: 'https://via.placeholder.com/200'
                },
                {
                    pk: 5,
                    name: 'Page 5',
                    path: 'physics/lecture1/page5',
                    imageURL: 'https://via.placeholder.com/200'
                }
            ]
        }
    }

    render() {
        return (
            <AppProvider value={{...this.state}}>
                <BrowserRouter basename={"portfolio-site"}>
                    <div className="App">
                        {/* <PrimaryHeaderMobile/>
                        <PrimaryHeader/> */}
                        <Switch>
                            <Route path="/home" component={HomeScreen}/>
                            {/* <Route path="/about" component={LogOutScreen}/>
                            <Route path="/works" component={LogOutScreen}/>
                            <Route component={NotFoundScreen}/> */}
                        </Switch>
                    </div>
                </BrowserRouter>
            </AppProvider>
        );
    }
}

export default App;
