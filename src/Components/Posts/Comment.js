import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid, Avatar, Typography } from '@material-ui/core';
import { SyncLoader } from 'react-spinners';

import TextMinimize from './TextMinimize';

function Comment(props) {
	const child = props.child;
	const comment = props.comment;
	const textFocus = props.textFocus;
	const handleReplyClick = props.handleReplyClick;
	const messagesEndRef = useRef(null);

	const [replyState, setReplyState] = useState(false);

	useEffect(() => {
		if (textFocus === false) {
			setReplyState(false);
		}
	}, [textFocus]);

	const handleReply = () => {
		setReplyState(true);
		handleReplyClick();
	};

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(scrollToBottom, []);

	const style = child
		? { height: 46, width: 46, backgroundColor: 'lightblue' }
		: { height: 50, width: 50, backgroundColor: 'lightblue' };

	return (
		<Box style={{ margin: 20 }}>
			<Grid container>
				<Grid item md={2} style={{ alignContent: 'space-around' }}>
					<Avatar aria-label='recipe' style={style}>
						N
					</Avatar>
				</Grid>
				<Grid
					item
					md={10}
					style={{
						marginLeft: '-20px',
						backgroundColor: '#F2F2F2',
						padding: '5px 10px',
						borderRadius: 12,
					}}
				>
					<Typography variant='body2' color='textSecondary' component='p' style={{ padding: 5 }}>
						<span style={{ color: '#000', marginRight: 6 }}>{comment.username}</span>
						<span>
							<TextMinimize as='span' characters={30} text={comment.text} />
						</span>
						<Box
							component='span'
							style={{
								display: 'block',
								fontSize: 12,
								paddingTop: 4,
								paddingLeft: 5,
								color: '#5bc0de',
							}}
						>
							<span
								style={{
									cursor: 'pointer',
									marginRight: 10,
									display: 'inline-block',
								}}
							>
								Like
							</span>
							{!child && (
								<span
									style={{
										cursor: 'pointer',
										display: 'inline-block',
									}}
									onClick={handleReply}
								>
									reply
								</span>
							)}
						</Box>
					</Typography>
				</Grid>
			</Grid>

			{replyState && (
				<div style={{ paddingLeft: 50, paddingTop: 20, paddingBottom: 20 }}>
					<SyncLoader color='lightblue' />
				</div>
			)}

			{comment.children && comment.children.length > 0 && (
				<div style={{ marginLeft: 20, paddingLeft: 10, borderLeft: '1px solid' }}>
					{comment.children.map(comment => (
						<Comment child={true} key={comment._id} comment={comment} />
					))}
				</div>
			)}
			<div ref={messagesEndRef} />
		</Box>
	);
}

export default Comment;
