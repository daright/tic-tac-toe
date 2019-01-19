import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Gameboard from './containers/Gameboard';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CompletedGamesList from './containers/CompletedGamesList';
import Layout from './components/Layout';
import InvalidRoute from './components/InvalidRoute';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                            <Route path="/game" exact component={Gameboard} />
                            <Route path="/score" exact component={CompletedGamesList} />
                            <Route component={InvalidRoute} />
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;
