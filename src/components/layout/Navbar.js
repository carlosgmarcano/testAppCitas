import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const items = [
  {
    url: '/',
    icon: HomeIcon,
  },
  {
    url: '/calendario',
    icon: DateRangeIcon,
  },
  {
    url: '/favoritos',
    icon: FavoriteIcon,
  },
  {
    url: '/perfil',
    icon: AccountCircleIcon,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  ico: {
    color: theme.palette.background.paper,
  }
}));



const Navbar = () => {

  const classes = useStyles();
  const location = useLocation();

  let value = String(location.pathname.match(/(^\/\w*)\/?/)[1]).toLowerCase();

  if (!items.some((item) => item.url === value)) {
    value = '/';
  }

  return (
    <BottomNavigation value={value} className={classes.root}>
      {items.map((item, index) => (
        <BottomNavigationAction
          className={classes.iconOnly}
          showLabel={false}
          key={index}
          component={Link}
          to={item.url}
          value={item.url}
          icon={<item.icon className={classes.ico} />}
        />
      ))}
    </BottomNavigation>
  );
};

export default Navbar;
