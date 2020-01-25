import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';

import { LogotUser } from '../../Actions';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
		marginTop: 16,
	},
})(props => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles(theme => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

function ProfileMenu(props) {
	const profileMenuState = props.profileMenu;
	const anchorEl = props.anchorEl;
	const handleClose = props.handleClose;
	const user = useSelector(state => state.loginReducer.user);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(LogotUser());
	};

	return (
		<div id='helo' style={{ paddingTop: 50 }}>
			<StyledMenu
				id='customized-menu'
				anchorEl={anchorEl}
				keepMounted
				open={profileMenuState}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<EditIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary={user} />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<EditIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary='Edit Profile' />
				</StyledMenuItem>
				<StyledMenuItem onClick={handleLogout}>
					<ListItemIcon>
						<ExitToAppIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText primary='Logout' />
				</StyledMenuItem>
			</StyledMenu>
		</div>
	);
}

export default ProfileMenu;
