import "./topbar.css";
import { Outlet, Link } from "react-router-dom";
import Me from "../../image/me.jpg";

const Topbar = () => {

   return (
      <>
         <div className="top">
            <div className="topLeft">
               <i className="topIcon fab fa-facebook-square"></i>
               <i className="topIcon fab fa-instagram-square"></i>
               <i className="topIcon fab fa-pinterest-square"></i>
               <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
               <ul className="topList">
                  <li className="topListItem">
                     <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                  </li>
                  <li className="topListItem">
                     <Link to="/aboutMe" style={{ textDecoration: 'none' }}>About</Link>
                  </li>
                  <li className="topListItem">
                     <Link to="/contactMe" style={{ textDecoration: 'none' }}>Contact</Link>
                  </li>
               </ul>
            </div>
            <div className="topRight">
               <div className="topImg">
                  <img className="topImg" src={Me} alt="" />
               </div>
               <i className="topSearchIcon fas fa-search"></i>
            </div>
         </div>
         <Outlet />
      </>
   )
};

export default Topbar;