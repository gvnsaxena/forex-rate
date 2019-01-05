import React from "react";
import ReactDOM from "react-dom";
import ExchangePage from './containers/ExchangePage.jsx';
require('./sass/style.scss');

const App = () => {
return (
    <React.Fragment>
        <ExchangePage/>
    </React.Fragment>);
};

ReactDOM.render(<App />, document.getElementById("index"));