import React, { useContext, useState } from "react";
import "./Navbar.css";
import NewsProvider from "../../provider/NewsProvider";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { newsapi, fetchData } = useContext(NewsProvider);
  
  return (
    <>
  
<nav className="desktop">
        <div className="container">
          <p className="logo"><i class="fa-regular fa-newspaper"></i> NewsApp</p>
          <div class="d-flex" role="search">
       
      </div>
          <ul>
              <li onClick={() => fetchData("world")}><a href="#world"></a>World</li>
              <li onClick={() => fetchData("india")}><a href="#india"></a>India</li>
              <li onClick={() => fetchData("tesla")}><a href="#tesla"></a>Tesla</li>
              <li onClick={() => fetchData("technology")}><a href="#technology"></a>Technology</li>
              <li onClick={() => fetchData("sports")}><a href="#sports"></a>Sports</li>
              <li onClick={() => fetchData("bitcoin")}><a href="#bitcoin"></a>Bitcoin</li>
          </ul>
        </div>
      </nav>


    {/* Define the size of mobile */}
      <nav className="mob">
        <div className="container_mob">
          <p className="logo">NewsApp</p>
          <i class="ri-menu-line" onClick={() => setToggleNav(!toggleNav)}></i>
        </div>{toggleNav && (
          <div className="navitems">
            <ul>
              <li onClick={() => fetchData("world")}><a href="#world"></a>World</li>
              <li onClick={() => fetchData("india")}><a href="#india"></a>India</li>
              <li onClick={() => fetchData("tesla")}><a href="#tesla"></a>Tesla</li>
              <li onClick={() => fetchData("technology")}><a href="#technology"></a>Technology</li>
              <li onClick={() => fetchData("sports")}><a href="#sports"></a>Sports</li>
              <li onClick={() => fetchData("bitcoin")}><a href="#bitcoin"></a>Bitcoin</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
