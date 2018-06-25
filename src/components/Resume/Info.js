import React from 'react';
import FadeIn from '../Animate/FadeIn';

const Info = (props) =>
	(
		<FadeIn>
			<div className={props.className}>{props.data}</div>
		</FadeIn>
	)

export default Info;