import React, { Component } from 'react';
import styles from './Animate.css';
import { Wait } from '../../helper/helper';

class FadeIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	componentDidMount = () => {
		Wait(0, this);
	}

	render() {
		return (
			<div className={this.state.show ? styles.FadeIn : styles.FadeOut}>
				{this.props.children}
			</ div>
		)
	}
}

export default FadeIn;