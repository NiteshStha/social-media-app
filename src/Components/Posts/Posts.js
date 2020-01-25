import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Post from './Post';
import { postDatas } from './../MockData';

function Posts() {
	const [posts, setPosts] = useState();

	useEffect(() => {
		setPosts(postDatas);
	}, []);

	return <Box>{posts && posts.map(post => <Post key={post._id} postData={post} />)}</Box>;
}

export default Posts;
