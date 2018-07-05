import React, { Component } from 'react';
import styles from './Animate.css';

import { Wait } from '../../helper/helper';

export default class FadeInOut extends Component {
	constructor() {
		super();
		this.state = {
			show: false
		}
	}

	FadeInAndOut = () => {
		// this fades in after 100ms
		Wait(100, this);

		// this fades out after 1600ms
		Wait(1600, this);
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