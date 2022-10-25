import Chart from "react-apexcharts";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import "./Chart.css"

function Donutchart() {
  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <h2>Donutchart</h2>
        <Chart
          type="donut"
          width={500}
          height={550}
          series={[65,23,12]}
          options={{
              labels: ["Completed", "pending", "Cancel"],
              colors:['#4f84e4','#f2f2f4','#e1958f'],
            title: {
              text: "Order Stats",
            },
            plotOptions: {
              pie: {
                    donut: {

                  labels: {
                    show: false,
                    total: {
                      fontSize: 25,
                      color: blueGrey,
                    },
                  },
                },
              },
              },
              dataLabels: {
                  enabled:false,
              },
              
                  

          }}
        />
          </div>
          <div className="chartdown">
              <div className="cdtext">Completed</div>
              <div className="cdtext">Pending</div>
              <div className="cdtext">Cancel</div>
          </div>
    </React.Fragment>
  );
}

export default Donutchart;
