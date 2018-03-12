import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.unregister();