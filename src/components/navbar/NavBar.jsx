import './navBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Avatar from '@mui/material/Avatar';
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">
            <SettingsBrightnessOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MenuOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
