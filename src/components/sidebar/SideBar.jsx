import './sideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">gdashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to={'/'}>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <Link to={'/users'}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <InventoryOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <AppRegistrationOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <DisplaySettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <p className="title">THEME</p>
        <div className="colorsContainer">
          <div className="colorsOption"></div>
          <div className="colorsOption"></div>
        </div>
      </div>
    </div>
  );
}
