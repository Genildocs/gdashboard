import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        Home container
      </div>
    </div>
  );
}
