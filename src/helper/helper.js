const Fade = (object) => {
	object.setState((state) => ({ show: !state.show }));
}

export const Wait = (seconds, object) => {
	setTimeout(() => {
		return Fade(object);
	}, seconds);
}