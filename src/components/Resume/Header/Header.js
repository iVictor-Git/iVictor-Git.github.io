import React from 'react';
import Info from '../Info';
import styles from './Header.css';

const Header = ({ data }) => {

	const infoSet = data.map((info, index) => {
		return <Info key={index} data={info} className={styles.Info} />
	})

	return (
		<div className={styles.Header}>
			{infoSet}
		</div>
	)
}

export default Header;