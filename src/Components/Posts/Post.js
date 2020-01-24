import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Avatar,
	CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import TextMinimize from './TextMinimize';
import Comments from './Comments';

const useStyles = makeStyles(theme => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

function Post(props) {
	const [commentState, setCommentState] = useState(false);

	const classes = useStyles();
	const postData = props.postData;

	const handleCommentClick = () => {
		setCommentState(true);
	};

	const handleCommentClose = value => {
		setCommentState(false);
	};

	return (
		<Card
			style={{
				marginBottom: 50,
				boxShadow: 'none',
				border: '1px solid #D9D9D9',
			}}
		>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={postData.username}
				subheader={postData.uploadTime}
			/>
			<CardMedia
				className={classes.media}
				image={postData.image}
				title={postData.username + '_post_id_' + postData._id}
			/>
			<CardContent>
				<Typography paragraph={false} variant='body2' color='textSecondary' component='p'>
					<span style={{ fontWeight: 400, color: '#000', marginRight: 6 }}>
						{postData.username}
					</span>
					<TextMinimize as='span' characters={60} text={postData.title} />
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='add to favorites' onClick={handleCommentClick}>
					<ChatBubbleOutlineRoundedIcon />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
			{commentState && (
				<Comments commentState={commentState} handleCommentClose={handleCommentClose} />
			)}
		</Card>
	);
}

export default Post;
