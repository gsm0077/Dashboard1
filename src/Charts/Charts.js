import Chart from "react-apexcharts";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import "./Chart.css";

function Donutchart() {
  return (
    <div className="Rfragment">
    <React.Fragment >
      <div className="container-fluid mt-2 mb-2">
        <Chart
          type="donut"
          width={250}
          height={200}
          series={[65, 23, 12]}
          options={{
            labels: ["Completed", "pending", "Cancel"],
            colors: ["#4f84e4", "#f2f2f4", "#e1958f"],
            title: {
              text: "Order Stats",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      fontSize: 10,
                      color: blueGrey,
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
          }}
        />
        <div className="textbot">
          <div className="completed">Completed</div>
          <div className="pending">Pending</div>
          <div className="cancel">Cancel</div>
        </div>
      </div>
      </React.Fragment>
    </div>
  );
}

export default Donutchart;
