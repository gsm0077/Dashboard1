import React from "react";
import "./Rcard.css";
import Card from "react-bootstrap/Card";
import InfoIcon from '@mui/icons-material/Info';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Rcard = () => {
  return (
    <Card style={{ width: "12rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <div className="imgbackside">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="imgtop"
        />
      </div>
      <Card.Body className="bodycard">
              <Card.Title className="title123">Elon Stark</Card.Title>
              <div className="jober">Web developer</div>
        <Card.Text className="cardtoptext">
                  <div className="ctt1"><div className="ctt11">2345</div><div className="ctt12">Deploys</div></div>
                  <div className="ctt2"><div className="ctt21">8.7k</div><div className="ctt22">Followers</div></div>
              </Card.Text>
              <br />
              <br />
              <hr />
          </Card.Body>
          <div className="featured">
              <div className="topps">
                  <h1 className="titles">Earnings</h1>
                  <InfoIcon style={ { fontSize:"small", color:"grey" }}/>
              </div>
              <div className="bottoms">
                  <div className="featuredChart">
                      <CircularProgressbar value={82} text={"82%"} strokeWidth={5} width={5} />
                  </div>
                  <p className="amountp">$31,377</p>
                  <p className="titlep">Earning this month</p>
                  <div className="bottomlow">
                      <div className="number123">+2.65%</div>
                      <div className="textafnum">From previous period</div>
                  </div>

              </div>
          </div>
          <hr />
          <div className="lastbottom">
              <div className="reactivity">Recent Activity</div>
              <div className="contoftwo">
                  <div className="boxleft1">12 <span style={{color:"grey"}}>Sep</span> </div>
                  <div className="textleft1">Responded to need "Volunteer Activities"</div>
              </div>
              <div className="contoftwo">
                  <div className="boxleft1">11 <span style={{color:"grey"}}>Sep</span> </div>
                  <div className="textleft1">Everyone realizes would be desirable...</div>
              </div>
              <div className="contoftwo">
                  <div className="boxleft1">10 <span style={{color:"grey"}}>Sep</span> </div>
                  <div className="textleft1">Joined the group "Broadmanship Forum"</div>
              </div>
          </div>
    </Card>
  );
};

export default Rcard;
