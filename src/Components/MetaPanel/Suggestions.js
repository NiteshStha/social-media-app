import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

function Suggestions() {
	return (
		<Card style={{ boxShadow: 'none', border: '1px solid #D9D9D9' }}>
			<CardContent>
				<Typography variant='subtitle2' color='textSecondary' gutterBottom>
					Friend Suggestions
				</Typography>
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

export default Suggestions;
