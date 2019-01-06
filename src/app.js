import React from "react";
import ReactDOM from "react-dom";
import ExchangePage from './containers/ExchangePage.jsx';
require('./sass/style.scss');
import configureStore from './store/store'
import { Provider } from 'react-redux';
const store = configureStore();
const App = () => {
return (
    <Provider store={store}>
        <ExchangePage />
    </Provider>);
};

ReactDOM.render(<App />, document.getElementById("index"));