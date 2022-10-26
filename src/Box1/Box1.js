import React from "react";
import "./Box1.css";
import ReactApexChart from "react-apexcharts";


const Box1 = () => {
    const series = [{
        name: 'Current',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Previous',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];
     const options = {
        chart: {
          height: 450,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }

    return (
        <div className="Rfragment">
            <ReactApexChart options={options} series={series} type="area" height={250} />
        </div>
    )
}

export default Box1;