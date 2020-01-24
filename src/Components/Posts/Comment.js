import React, { useRef, useEffect } from 'react';
import { Box, Grid, Avatar, Typography } from '@material-ui/core';

import TextMinimize from './TextMinimize';

function Comment(props) {
	const comment = props.comment;
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, []);

	return (
		<Box style={{ margin: 14 }}>
			<Grid container>
				<Grid item md={2}>
					<Avatar
						aria-label='recipe'
						style={{ backgroundColor: 'lightblue', width: 40, height: 40 }}
					>
						N
					</Avatar>
				</Grid>
				<Grid item md={10} style={{ marginLeft: '-20px' }}>
					<Typography variant='body2' color='textSecondary' component='p' style={{ padding: 5 }}>
						<span style={{ color: '#000', marginRight: 6 }}>{comment.username}</span>
						<span>
							<TextMinimize as='span' characters={30} text={comment.text} />
						</span>
					</Typography>
				</Grid>
			</Grid>
			{comment.children && comment.children.length > 0 && (
				<div style={{ marginLeft: 20, paddingLeft: 10, borderLeft: '1px solid' }}>
					{comment.children.map(comment => (
						<Comment key={comment._id} comment={comment} />
					))}
				</div>
			)}
			<div ref={messagesEndRef} />
		</Box>
	);
}

export default Comment;
