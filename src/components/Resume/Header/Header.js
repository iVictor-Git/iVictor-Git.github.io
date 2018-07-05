import React, { Component } from 'react';
import styles from './Header.css';

import AsyncComponent from '../../../hoc/AsyncComponent/AsyncComponent';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			componentList: [],
			component: null
		}
	}
	LoadInfoComponent = () => {
		return AsyncComponent(() => import('../Info'));
	}

	componentDidMount = () => {
		const component = this.LoadInfoComponent();
		this.setState({ component }, () => {
			// after component is set in state
			const Component = this.state.component;
			if (Component) {
				// map data into component set
				const dataSet = this.props.data.map((data, index) => {
					const delay = (index + 1) * 500;
					const FadeIn = this.props.fadeIn;
					return (
						// Info takes data, className as props
						// FadeIn takes a delay in ms
						<FadeIn delay={delay} key={index} >
							<Component className={styles.Info} data={data} />
						</FadeIn>
					)
				})
				this.setState(() => {
					return { componentList: dataSet };
				})
			}
		});
	}

	render() {
		// Send data into loaded AsyncComponent
		return (
			<div className={styles.Header} >
				{this.state.componentList}
			</div>
		)
	}
}

export default Header;