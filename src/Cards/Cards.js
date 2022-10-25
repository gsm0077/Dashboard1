import React from "react";
import "./Cards.css";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Widget = ({type}) => {
  let data;

  switch (type) {
    case "revenue":
      data = {
        icon: (<PieChartIcon className="icon" />),
        title: "Rvenue",
        money: "$21,456",
        percentage: "+2.56%",
        color:"right positive"
      };
      break;
      case "order":
        data = {
          icon: (<LocalMallIcon className="icon" />),
          title: "Orders",
          money: "5643",
          percentage: "-0.82%",
          color:"right negative"
        };
      break;
      case "customer":
        data = {
          icon: (<PeopleAltIcon className="icon" />),
          title: "Customers",
          money: "45254",
          percentage: "-1.08%",
          color:"right negative"
        };
      break;
    default:
      break;
  }



  return (
    <div className="widget">
      <div className="left">
       {data.icon}
        <span >
          <div className="title">{data.title}</div>
          <div className="number">{data.money}</div>
        </span>
      </div>
      <div className={data.color}>{data.percentage}</div>
    </div>
  );
};

export default Widget;


