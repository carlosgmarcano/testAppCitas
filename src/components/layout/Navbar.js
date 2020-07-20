import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <BottomNavigation>
            <BottomNavigationAction component={Link} to="/" value="recents" icon={<HomeIcon />} />
            <BottomNavigationAction component={Link} to="/Calendario" icon={<DateRangeIcon />} />
            <BottomNavigationAction component={Link} to="/Favoritos" value="nearby" icon={<FavoriteIcon />} />
            <BottomNavigationAction component={Link} to="/Login" value="folder" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    )
};

export default Navbar