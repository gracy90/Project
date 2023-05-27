import { useLocation, Link,useNavigate } from "react-router-dom";
import {getAuth} from "firebase/auth"

const NavBar = () => {
  const navigate= useNavigate();
  const location = useLocation();

  const pathName = (route) => {
    if (route == location.pathname) {
      return true;
    }
  };

  const user = true;
  const auth = getAuth();
 const handleLogout = ()=>{
    auth.signOut();
     navigate('/login');  
 }

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
            {auth.currentUser!=null ? (
              <button type="button" className="submit-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div>
        {auth.currentUser&& (
          <div className="ProfileContainer">
            <div className="CircleAvatar">
              <img className="ProfileImage" src="" alt="profileImage" />
            </div>
            <p>{auth.currentUser.displayName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
