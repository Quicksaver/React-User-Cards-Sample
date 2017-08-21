// Learning refs:
//   https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc
//   https://facebook.github.io/react/docs/hello-world.html

import React from 'react';
import ReactDOM from 'react-dom';

// Refs:
//   https://reacttraining.com/react-router/web/guides/quick-start
//   https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { HashRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router>
		<App/>
	</Router>
), document.getElementById('root'));
registerServiceWorker();
