import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout({ user, logoutHandler }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar  user={user} logoutHandler={logoutHandler}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}