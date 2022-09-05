import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';
import { IDecodedToken } from '../../interfaces/decodedToken';
import './UserMenu.scss'
import { useApp } from '../../contexts/AppContext';


const StyledMenu = withStyles({
  paper: {
    color: localStorage.getItem('theme') 
      ? localStorage.getItem('theme') === 'dark' 
        ? "rgba(255, 255, 255, 1)" 
        : "rgba(56, 54, 68, 1)" 
      : "rgba(56, 54, 68, 1)",
    backgroundColor: localStorage.getItem('theme') 
      ? localStorage.getItem('theme') === 'dark' 
        ? 'rgba(56, 54, 68, .5)' 
        : 'rgba(243, 239, 229, .7)' 
      : 'rgba(243, 239, 229, .7)'
  },
})((props: MenuProps) => (
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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.common.black,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { 
    color, 
    setToken, 
    decodedToken, 
    setDecodedToken, 
    backgroundColor
  } = useApp();

  const handleLogin = () => {
    localStorage.removeItem('token')
    setToken('')
    setDecodedToken({} as IDecodedToken)
  }

  return (
    <div>
      <button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        color="primary"
        onClick={handleClick}
        className='default-btn menu-btn'
        style={{ color, backgroundColor }}
      >
        Menu
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className='menu-head'
      >
        Hello, {decodedToken.name}!
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
        <Link to='#' style={{ color }} className="login" onClick={handleLogin}>
          <StyledMenuItem>
            Log out
          </StyledMenuItem>
        </Link> 
      </StyledMenu>
    </div>
  );
}
