import React from 'react';
import styles from './Prompt.css';

const Prompt = () => {

	return (
		<div className={styles.Prompt}>
			<span>$</span>
			<form>
				<input className={styles.Input} type="text" name="" id="" autoFocus placeholder={"Enter <command> here or help for help"} />
			</form>
		</div>
	)
}

export default Prompt;