import React from "react";
import Widget from "../Cards/Cards";
import "./Pract.css";
import Rcard from "../Rcard/Rcard";

const Pract = () => {
    return (
        <div className="widgets">
          <Widget type="revenue" />
          <Widget type="order" />
            <Widget type="customer" />
            <Rcard />
        </div>
    )
}
export default Pract;