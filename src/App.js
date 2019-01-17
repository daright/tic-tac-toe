import React, { Component } from 'react';
import Gameboard from './components/Gameboard';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CompletedGamesList from './containers/CompletedGamesList';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CompletedGamesList />
                <Gameboard />
            </Provider>
        );
    }
}

export default App;
