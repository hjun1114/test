import React from 'react';
import ReactDOM from 'react-dom';

// create react component

const App = function() {
    return <div class="w3-red">
     <p>London is the most populous city in the United Kingdom,
        with a metropolitan area of over 9 million inhabitants.</p>
  </div>
}; 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);