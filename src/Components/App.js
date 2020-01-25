import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from './Main';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

import rootReducer from '../Reducers';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route path='/' exact component={Main} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={SignUp} />
			</Router>
		</Provider>
	);
}

export default App;
