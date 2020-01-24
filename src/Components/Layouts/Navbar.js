import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, FavoriteBorder, Explore, Instagram } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1,
	},
	fontColor: {
		color: '#000',
	},
}));

function Navbar() {
	const classes = useStyles();

	return (
		<>
			<AppBar
				className={classes.fontColor}
				style={{
					background: '#fff',
					// position: 'sticky',
					// top: 0,
					paddingTop: 12,
					paddingBottom: 12,
					boxShadow: 'none',

					marginTop: 0,
				}}
				position='static'
			>
				<Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
					<Instagram
						style={{
							fontSize: 30,
							marginRight: 14,
							borderRight: '1px solid #000',
							paddingRight: 14,
						}}
					/>
					<Typography
						variant='h6'
						style={{
							fontFamily: 'Brush Script MT, Brush Script Std, cursive',
							fontSize: 28,
							fontStyle: 'italic',
						}}
						className={classes.title}
					>
						Niteshgram
					</Typography>
					<Explore style={{ fontSize: 26, marginRight: 20 }} />
					<FavoriteBorder style={{ fontSize: 26, marginRight: 20 }} />
					<AccountCircle style={{ fontSize: 26 }} />
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Navbar;
