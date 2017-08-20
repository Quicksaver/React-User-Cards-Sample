// Learning refs:
//   https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc
//   https://facebook.github.io/react/docs/hello-world.html

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
