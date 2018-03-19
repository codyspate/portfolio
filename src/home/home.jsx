import React, { Component } from 'react';
import css from './home.css';

class Home extends Component {
	render() {
		console.log(css);
		return (
			<div className={`container ${css.red}`}>
				<h1>Home Page</h1>
			</div>
		);
	}
}
export default Home;
