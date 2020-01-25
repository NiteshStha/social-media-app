import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import Navbar from './Layouts/Navbar';
import Feed from './Layouts/Feed';

function Main(props) {
	const loginState = useSelector(state => state.loginReducer.loginState);

	useEffect(() => {
		if (!loginState) props.history.push('/login');
	}, [loginState, props.history]);

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

export default Main;
