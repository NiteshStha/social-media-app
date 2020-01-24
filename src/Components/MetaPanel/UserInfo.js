import React from 'react';
import {
	Card,
	CardContent,
	Grid,
	CardActions,
	Typography,
	Button,
	Avatar,
} from '@material-ui/core';
import { userData } from '../MockData';

function UserInfo() {
	return (
		<Card
			style={{
				marginBottom: 40,
				boxShadow: 'none',
				border: '1px solid #D9D9D9',
			}}
		>
			<CardContent>
				<Typography variant='subtitle2' color='textSecondary' gutterBottom>
					User Information
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={3}>
						<Avatar
							aria-label='recipe'
							style={{ backgroundColor: 'lightblue', marginTop: 10, width: 50, height: 50 }}
						>
							N
						</Avatar>
					</Grid>
					<Grid item md={6} style={{ paddingTop: 24 }}>
						<Typography variant='subtitle2'>{userData.username}</Typography>
						<Typography variant='caption'>
							{userData.firstName + ' ' + userData.lastName}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>

			<CardActions style={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					style={{
						fontSize: 12,
						textTransform: 'capitalize',
						display: 'inline-block',
					}}
					size='small'
				>
					See All
				</Button>
			</CardActions>
		</Card>
	);
}

export default UserInfo;
