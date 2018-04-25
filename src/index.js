import React from 'react';
import { render } from 'react-snapshot-sitemap';
// import ReactDOM from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
render(<App />, document.getElementById('root'));
registerServiceWorker();
