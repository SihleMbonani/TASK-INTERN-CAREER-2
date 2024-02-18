import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom"

export default function TopBar(){
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }
    return(
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
           
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >Home</Link>
                    </li>
                    
                    <li className="topListItem">
                    <Link className="link" to="/" >Contact</Link>
                    </li>
                    <li className="topListItem"><Link to="/write" className="link" >Write</Link></li>
                    <li className="topListItem" onClick={handleLogout} >
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
              {
                user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF+user.profilePicture} 
                        alt="profile" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link" >Register</Link>
                        </li>
                    </ul>
                )
              }
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}