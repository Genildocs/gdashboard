import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import './home.scss';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import List from '../../components/list-table/List';

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
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
}
