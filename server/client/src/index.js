import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Helmet } from 'react-helmet';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<div>
		<Helmet><title>InfoGain</title></Helmet>
		<Provider store={store}><App /></Provider>
	</div>,
	 document.querySelector('#root')
 );
