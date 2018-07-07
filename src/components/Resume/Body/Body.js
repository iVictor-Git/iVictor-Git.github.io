// this is the layout Body will be the container component
import React, { Component } from 'react';
import styles from './Body.css';

class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className={styles.Body}>
				{this.props.children}
			</div>
		)
	}
}

export default Body;