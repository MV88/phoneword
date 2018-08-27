import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';

export default class ReactDemo extends Component {

	render(){
		return (
			<HashRouter>
	            <div>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
	            </div>
	        </HashRouter>

		);
	}
}

ReactDOM.render(<ReactDemo />, document.getElementById('root'));
