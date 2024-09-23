import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import './mainLayout.scss';
export default function MainLayout() {
  return (
    <div className="container">
      <SideBar />
      <div className="mainContainer">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
