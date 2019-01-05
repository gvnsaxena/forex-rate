import React from "react";
import ReactDOM from "react-dom";
import ExchangePage from './containers/ExchangePage.jsx';
require('./sass/style.scss');
import configureStore from './store/store'

const store = configureStore();
const App = () => {
return (
    <React.Fragment>
        <ExchangePage store={store}/>
    </React.Fragment>);
};

ReactDOM.render(<App />, document.getElementById("index"));