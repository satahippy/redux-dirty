import React from 'react';

export default ({onCreate}) => {
	let input;
	const create = (e) => {
		e.preventDefault();
		onCreate({
			name: input.value
		});
		input.value = "";
	};
	return (
		<form onSubmit={create}>
			<input ref={ref => input = ref} />
			<button>Create</button>
		</form>
	);
};