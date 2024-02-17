import "./topbar.css";
import { Link } from "react-router-dom"

export default function TopBar(){
    const user = false;
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
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
              {
                user ? (
                    <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLmOXm_gwuqQ2FunEqSd8KfbCQdpOOO6JgQ&usqp=CAU" 
                    alt="profile" />
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