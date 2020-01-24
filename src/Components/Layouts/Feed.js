import React from 'react';
import { Paper, Grid, Box } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Suggestions from '../MetaPanel/Suggestions';
import UserInfo from './../MetaPanel/UserInfo';

function Feed() {
	return (
		<Paper style={{ marginTop: 20, paddingLeft: 1, paddingRight: 1, boxShadow: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={8}>
					<Posts />
				</Grid>
				<Grid item md={4}>
					<Box style={{ position: 'sticky', top: 108 }}>
						<UserInfo />
						<Suggestions />
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default Feed;
