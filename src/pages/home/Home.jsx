import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import './home.scss';
import Widget from '../../components/widgets/Widget';

export default function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts"></div>
      </div>
    </div>
  );
}
