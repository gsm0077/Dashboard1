import React from "react";
import "./Cards.css"
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Widget = ({ type }) => {
   


  
  return (
    <div className="carders">
      <div className="carder">
        <div className="left">
          <div className="icon">
            <PieChartIcon />
          </div>
          <div className="title">Revenue</div>
          <div className="number">$21,456</div>
        </div>
        <div className="right">+2.65%</div>
      </div>
      <div className="carder">
        <div className="left">
          <div className="icon">
            <LocalMallIcon />
          </div>
          <div className="title">Orders</div>
          <div className="number">5643</div>
        </div>
        <div className="right">-0.82%</div>
      </div>
      <div className="carder">
        <div className="left">
          <div className="icon">
            <PeopleAltIcon />
          </div>
          <div className="title">Customers</div>
          <div className="number">45254</div>
        </div>
        <div className="percentage">-1.04%</div>
      </div>
    </div>
  );
};

export default Widget;