import React from 'react';
import { Box } from '@material-ui/core';
import Post from './Post';
import { postDatas } from './../MockData';

function Posts() {
	return <Box>{postDatas && postDatas.map(post => <Post key={post._id} postData={post} />)}</Box>;
}

export default Posts;
