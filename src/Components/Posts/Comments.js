import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { commentsData } from '../MockData';
import Comment from './Comment';
import { NumberGenerator } from './../Utilities/NumberGenerator';

function Comments(props) {
	const { commentState, handleCommentClose } = props;
	const [comments, setComments] = useState();
	const [reply, setReply] = useState('');
	const [textFocus, setTextFocus] = useState(false);

	useEffect(() => {
		setComments(commentsData);
	}, []);

	const handleClose = () => {
		handleCommentClose();
	};

	const handleCommentChange = event => {
		setReply(event.target.value);
	};

	const handleCommentSubmit = event => {
		event.preventDefault();
		if (reply !== '') {
			const newComment = {
				_id: NumberGenerator(),
				username: 'stha__nitesh',
				text: reply,
			};
			console.log(newComment._id);
			setComments(comments.concat(newComment));
			setReply('');
			handleReplyBlur();
		}
	};

	const inputFocusRef = useRef(null);

	const handleReplyClick = () => {
		setFocus();
		setTextFocus(true);
	};

	const handleReplyBlur = () => {
		setTextFocus(false);
	};

	const setFocus = () => {
		inputFocusRef.current.focus();
	};

	return (
		<Dialog
			onClose={handleClose}
			fullWidth={true}
			aria-labelledby='simple-dialog-title'
			open={commentState}
		>
			<DialogTitle id='simple-dialog-title'>Comments</DialogTitle>
			<Scrollbars
				renderView={props => <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />}
				style={{ height: 580 }}
			>
				<DialogContent>
					{comments &&
						comments.map(comment => (
							<Comment
								key={comment._id}
								comment={comment}
								child={false}
								handleReplyClick={handleReplyClick}
								textFocus={textFocus}
							/>
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
						autoComplete='off'
						inputRef={inputFocusRef}
						onBlur={handleReplyBlur}
					/>
				</form>
			</DialogActions>
		</Dialog>
	);
}

export default Comments;
