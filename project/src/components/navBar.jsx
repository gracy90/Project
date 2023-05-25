import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const pathName = (route) => {
    if (route == location.pathname) {
      return true;
    }
  };

  const user = true;

  return (
    <div className="NavBarContainer">
      <div className="NavBarMenu">
        <ul className="NavBarList">
          <li className={pathName('/')?'NavItemSelected':'NavItemUnselected'}>
            <Link to="/">Home</Link>
          </li>
          <li className={pathName('/about')?'NavItemSelected':'NavItemUnselected'}>
            <Link to="/about">About</Link>
          </li>
          <li className={pathName('/viewReport')?'NavItemSelected':'NavItemUnselected'}>
            <Link to="/viewReport">View Report</Link>
          </li>
          <li className={pathName('/login')?'NavItemSelected':'NavItemUnselected'}>
            {user ? (
              <button type="button">Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div>
        {user && (
          <div className="ProfileContainer">
            <div className="CircleAvatar">
              <img className="ProfileImage" src="" alt="profileImage" />
            </div>
            <p>username</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
