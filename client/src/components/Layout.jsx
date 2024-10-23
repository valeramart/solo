import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
    // <div>Layout</div>
  );
}