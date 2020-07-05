import React from 'react';
import ReactDOM from 'react-dom';

// create react component

const App = function() {
    return <div>Hello world</div>
}; 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);