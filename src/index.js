import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/App';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( < Root / > , document.getElementById('root'));
registerServiceWorker();