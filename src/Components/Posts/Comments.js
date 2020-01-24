import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { commentsData } from '../MockData';
import Comment from './Comment';

function Comments(props) {
	const { commentState, handleCommentClose } = props;
	const [comments, setComments] = useState(commentsData);
	const [reply, setReply] = useState('');

	const handleClose = () => {
		handleCommentClose();
	};

	const handleCommentChange = event => {
		setReply(event.target.value);
	};

	const handleCommentSubmit = event => {
		event.preventDefault();
		const newComment = {
			_id: 14,
			username: 'stha__nitesh',
			text: reply,
		};
		setComments(comments.concat(newComment));
		setReply('');
	};

	return (
		<Dialog
			onClose={handleClose}
			fullWidth={true}
			aria-labelledby='simple-dialog-title'
			open={commentState}
		>
			<DialogTitle id='simple-dialog-title'>Comments</DialogTitle>
			<Scrollbars style={{ height: 580 }}>
				<DialogContent>
					{comments.map(comment => (
						<Comment key={comment._id} comment={comment} />
					))}
				</DialogContent>
			</Scrollbars>
			<DialogActions>
				<form style={{ width: '100%' }} onSubmit={handleCommentSubmit}>
					<TextField
						id='outlined-basic'
						style={{ width: '100%' }}
						label='Comment'
						variant='outlined'
						onChange={handleCommentChange}
						value={reply}
						autoFocus={true}
					/>
				</form>
			</DialogActions>
		</Dialog>
	);
}

export default Comments;
