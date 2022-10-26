import React from "react";
import Widget from "../Cards/Cards";
import "./Pract.css";
import Rcard from "../Rcard/Rcard";
import Box1 from "../Box1/Box1";
import Donutchart from "../Charts/Charts";
import Box3 from "../Box3/Box3"

const Pract = () => {
  return (
    <div className="widgets">
      <Widget type="revenue" />
      <Widget type="order" />
      <Widget type="customer" />
      <Rcard />
      <Box1 />
      <Donutchart />
      <Box3/>
      
      
    </div>
  );
};
export default Pract;
