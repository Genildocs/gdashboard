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
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
}
