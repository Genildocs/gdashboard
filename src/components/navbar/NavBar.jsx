import './navBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}
