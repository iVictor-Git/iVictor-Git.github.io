import React, { Component } from 'react';
// import styles from './Animate.css';
import { Wait } from '../../helper/helper';

class FadeIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			activeStyle: {
				'opacity': '1',
				'transition': `opacity 1.5s ease-in 500ms`
			},
			nonActiveStyle: {
				'opacity': '0',
				'transition': 'opacity 2s ease-out'
			}
		}
	}

	componentDidMount = () => {
		Wait(0, this);
		this.setState(() => {
			console.log(); // this line of code breaks the animation if removed.
			return {
				activeStyle: {
					'opacity': '1',
					'transition': `opacity 1.5s ease-in ${this.props.delay}ms`
				}
			}
		});
	}

	render() {
		return (
			<div
				style={this.state.show ? this.state.activeStyle : this.state.nonActiveStyle}
			>
				{this.props.children}
			</ div>
		)
	}
}

export default FadeIn;