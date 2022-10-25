import React from "react";
import "./home.css";
import Sidebar from "../../Sidebar/Sidebar";
import Topbar from "../../Navbar/Navbar";
import Pract from "../../setpractice/Pract"


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Topbar />
        <Pract/>
      </div>
    </div>
  );
};

export default Home;
