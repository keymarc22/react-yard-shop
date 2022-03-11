import React from 'react';
import { Navbar } from '@components/Navbar';
import { ItemList } from '@containers/ItemList';

const Home = () => {
	return (
		<div>
			<Navbar />
			<ItemList />
		</div>
	);
}

export { Home };