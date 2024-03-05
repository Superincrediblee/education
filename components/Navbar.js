'use client';

import { Mail, Notifications, School } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icons = styled(Box)(({ theme }) => ({
  /*  display: 'none', */
  display: 'flex',
  gap: '5px',
  alignItems: 'flex-end',
  width: 25,
  height: 25,

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'flex-end',
  marginLeft: '15px',

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    width: 35,
    height: 35,
  },
}));
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          EDUCATION
        </Typography>
        <School sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          {/*     <Avatar
            sx={{ width: 30, height: 30 }}
            src="@/shoe.webp"
            onClick={(e) => setOpen(true)}
          /> */}
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar /* sx={{ width: 25, height: 25 }} */ src="@/shoe.webp" />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem variant="span" disabled sx={{ backgroundColor: 'grey' }}>
          Hi UserName
        </MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
