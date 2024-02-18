import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME!</span>
            <img className="sidebarImg" src="https://media.istockphoto.com/id/1288314779/photo/digital-consciousness-brain-potential-ideas-and-innovation-free-your-mind-synapses-human.jpg?s=612x612&w=0&k=20&c=SzMxxSugzw5qYyK3NBu9mFERc71QkJCKgQZLtsd96d8=" alt="AboutMe" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur aliquam ipsam,
                atque esse animi tempora minus eius debitis recusandae harum iste quasi enim nemo amet nesciunt ut deserunt consequuntur.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES </span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
