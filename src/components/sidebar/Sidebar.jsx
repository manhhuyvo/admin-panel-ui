import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AndroidIcon from '@mui/icons-material/Android';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className='logo'>ADMIN GROUP</h1>
            </Link>
        </div>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration: 'none'}}>
                    <li>
                        <PersonIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: 'none'}}>
                    <li>
                        <DoorBackIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <CardMembershipIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                </Link>
                <p className='title'>USEFUL</p>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <BarChartIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <NotificationsIcon className='icon'/>
                        <span>Notification</span>
                    </li>
                </Link>
                <p className='title'>SERVICE</p>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <AndroidIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <HistoryIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                </Link>
                <p className='title'>USER</p>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <AccountBoxIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <PowerSettingsNewIcon className='icon'/>
                        <span>Log Out</span>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar