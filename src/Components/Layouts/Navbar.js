import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, FavoriteBorder, Explore, Instagram } from '@material-ui/icons';

import ProfileMenu from '../NavMenu/ProfileMenu';

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
	const [profileMenu, setProfileMenu] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleProfileClick = event => {
		setAnchorEl(event.currentTarget);
		setProfileMenu(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setProfileMenu(false);
	};

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
					<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
						<Instagram
							style={{
								fontSize: 30,
								marginRight: 14,
								borderRight: '1px solid #000',
								paddingRight: 14,
							}}
						/>
					</Link>
					<Typography
						variant='h6'
						style={{
							fontFamily: 'Brush Script MT, Brush Script Std, cursive',
							fontSize: 28,
							fontStyle: 'italic',
						}}
						className={classes.title}
					>
						<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
							Niteshgram
						</Link>
					</Typography>
					<Explore style={{ fontSize: 26, marginRight: 20, cursor: 'pointer' }} />
					<FavoriteBorder
						style={{ fontSize: 26, marginRight: 20, cursor: 'pointer' }}
						onClick={handleProfileClick}
					/>
					<AccountCircle style={{ fontSize: 26, cursor: 'pointer' }} onClick={handleProfileClick} />
					{profileMenu && (
						<ProfileMenu profileMenu={profileMenu} anchorEl={anchorEl} handleClose={handleClose} />
					)}
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Navbar;
