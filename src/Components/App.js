import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Layouts/Navbar';
import Feed from './Layouts/Feed';

function App() {
	return (
		<>
			<Container
				style={{
					padding: 0,
					margin: 0,
					outline: '1px solid #D9D9D9',
					maxWidth: '100%',
					position: 'sticky',
					top: 0,
					zIndex: 10,
				}}
			>
				<Container maxWidth='md' style={{ zIndex: 10 }}>
					<Navbar />
				</Container>
			</Container>
			<Container maxWidth='md'>
				<Feed />
			</Container>
		</>
	);
}

export default App;
