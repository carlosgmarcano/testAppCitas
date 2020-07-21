import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useLocation } from 'react-router-dom';

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

const Navbar = () => {
  const location = useLocation();

  let value = location.pathname.match(/(^\/\w*)\/?/)[1];

  if (!items.some((item) => item.url === value)) {
    value = '/';
  }

  return (
    <BottomNavigation value={value}>
      {items.map((item, index) => (
        <BottomNavigationAction
          key={index}
          component={Link}
          to={item.url}
          value={item.url}
          icon={<item.icon />}
        />
      ))}
    </BottomNavigation>
  );
};

export default Navbar;