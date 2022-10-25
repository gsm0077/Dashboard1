import React from "react";
import "./Rcard.css";

const Rcard = () => {
    return (
        <div className="fcard">
            <div className="upper">
                <div className="utop">
                      <img src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/04/blue/16903216-1-eng-GB/Blue_pillars.jpg" alt="blueart" className="imgback" />
                      <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="avatar"
              className="mainpic"
                    />
                    <div className="fname">Elon Stark</div>
                    <div className="work">MERN Developer</div>
                    <div className="about">
                        <div className="deploys"><span className="num">1769</span><span className="dep">Deploys</span></div>
                        <div className="follows"><span className="num">6.87k</span><span className="dep">Followers</span></div>

                    </div>
                </div>
                <div className="ubotttom">

                </div>
           </div>
        </div>
    )
}

export default Rcard;