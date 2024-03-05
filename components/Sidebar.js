'use client';

import {
  AccountBox,
  Home,
  ModeNight,
  Person,
  Quiz,
  Settings,
  Storefront,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from '@mui/material';
import Link from 'next/link';
const FullBox = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));
const HalfBox = styled(Box)(({ theme }) => ({
  display: 'block',
  backgroundColor: 'blue',

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const ListItemIcons = styled(ListItemIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontSize: 1,
}));

export default function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1}>
      <FullBox /* sx={{ display: { xs: 'none', sm: 'block' } }} flex={1} p={2} */
        p={2}
      >
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="HomePage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Classroom" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="DataBase" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcon>
                  <Quiz />
                </ListItemIcon>
                <ListItemText primary="Take Quiz" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch
                  onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </FullBox>
      <HalfBox /* sx={{ display: { xs: 'none', sm: 'block' } }} flex={1} p={2} */
      >
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#home">
                <ListItemIcons>
                  <Home />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcons>
                  <Storefront />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcons>
                  <Person />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcons>
                  <Settings />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcons>
                  <AccountBox />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#simple-list">
                <ListItemIcons>
                  <Quiz />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcons>
                  {/*           <ModeNight /> */}
                  <Switch
                    onChange={(e) =>
                      setMode(mode === 'light' ? 'dark' : 'light')
                    }
                  />
                </ListItemIcons>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </HalfBox>
    </Box>
  );
}
