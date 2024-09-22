import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
export default function Widget() {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">123</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        <Person2OutlinedIcon className="icon" />
      </div>
    </div>
  );
}
