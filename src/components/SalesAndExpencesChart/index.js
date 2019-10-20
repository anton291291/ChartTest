import React from 'react';

import {Line} from 'react-chartjs-2';

import './SalesAndExpences.scss';


const SalesAndExpencesChart = (props) => {

const {graphData}= props;
console.log(graphData && graphData.map((year) => year[0]).filter((item,index) => index > 0))

const dataALL = {
  labels: graphData && graphData.map((year,index) => year[0]).filter((item,index) => index > 0),
  datasets: [
    {
      label: graphData && graphData[0][1],
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: graphData && graphData.filter((item,index) => index > 0).map(item => item[1])
    },
    {
      label: graphData && graphData[0][2],
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(209, 81, 147,.7)',
      borderColor: 'rgba(209, 81, 147,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(209, 81, 147,.7)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(209, 81, 147,.7)',
      pointHoverBorderColor: 'rgba(209, 81, 147,.7)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: graphData && graphData.filter((item,index) => index > 0).map(item => item[2])
    }
  ],

};

  return (
    <div className="container">
    <h2>Company Performance</h2>
       <Line data={dataALL} />
    </div>
  );
}

export default SalesAndExpencesChart;
