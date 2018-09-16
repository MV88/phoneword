import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom';
import GridPhone from './components/containers/GridPhone';
import { Provider } from 'react-redux';
import store from './store/store';

export default class ReactDemo extends Component {

	render(){
		return (
		  	<Provider store={store}>
			  	<BrowserRouter>
					<Route exact path="/" component={GridPhone} />
		        </BrowserRouter>
  			</Provider>
		);
	}
}

ReactDOM.render(<ReactDemo />, document.getElementById('root'));
