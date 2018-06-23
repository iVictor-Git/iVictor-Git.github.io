import React, { Component } from 'react';
import styles from './Animate.css';
import { setTimeout } from 'timers';

export default class FadeInOut extends Component {
	constructor() {
		super();
		this.state = {
			show: false
		}
	}

	Fade = () => {
		this.setState((state) => ({ show: !state.show }));
	}

	Wait = (seconds) => {
		setTimeout(() => {
			return this.Fade();
		}, seconds);

	}

	FadeInAndOut = () => {
		// this fades in after 100ms
		this.Wait(100);

		// this fades out after 1600ms
		this.Wait(1600);
	}

	componentDidMount() {
		this.FadeInAndOut();
	}


	render() {
		return (
			<div className={this.state.show ? styles.FadeIn : styles.FadeOut}>
				{this.props.children}
			</div>
		)
	}
}