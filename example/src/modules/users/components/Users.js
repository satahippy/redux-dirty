import React from 'react';

export default ({users, isLoading, onReload, loadingText}) => {
	if (isLoading) {
		return <h2>{loadingText}</h2>;
	}
	return (
		<div>
			<h1>Users List <button onClick={onReload}>Reload</button></h1>
			<ul>
				{users.map((user, index) => <li key={index}>{user.name}</li>)}
			</ul>
		</div>
	);
};