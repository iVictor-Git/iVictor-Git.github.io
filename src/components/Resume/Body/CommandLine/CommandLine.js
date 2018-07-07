import React, { Component } from 'react';
import styles from './CommandLine.css';
import Prompt from './Prompt/Prompt';
// CommandLine will store command
// command will determine what to show the user
// User will be able to enter a command in a commandline style prompt
// ex => >>> <command>
// content will be shown on a new line

class CommandLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			command: ''
		};

	}

	render() {
		return (
			<div className={styles.CommandLine}>
				<Prompt />
			</div>
		)
	}
}

export default CommandLine;