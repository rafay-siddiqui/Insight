import React from 'react';
import Chart from 'react-apexcharts'
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";


export default function ExampleChart(props) {
  const query = useQuery('history', () => getDetailedHistory(1));


  const series = [{
    name: "Portfolio Value ($)",
    data: [{
      x: new Date("2021-10-06").getTime(),
      y: 55121.04083
    },
    {
      x: new Date("2021-10-07").getTime(),
      y: 55788.12903
    },
    {
      x: new Date("2021-10-08").getTime(),
      y: 55760.91153
    },
    {
      x: new Date("2021-10-11").getTime(),
      y: 55331.23005
    },
    {
      x: new Date("2021-10-12").getTime(),
      y: 55071.03036
    },
    {
      x: new Date("2021-10-13").getTime(),
      y: 55623.69039
    },
    {
      x: new Date("2021-10-14").getTime(),
      y: 56411.47071
    },
    {
      x: new Date("2021-10-15").getTime(),
      y: 57403.3504
    },
    {
      x: new Date("2021-10-18").getTime(),
      y: 58185.48952
    },
    {
      x: new Date("2021-10-19").getTime(),
      y: 58290.17888
    },
    {
      x: new Date("2021-10-20").getTime(),
      y: 57864.66072
    },
    {
      x: new Date("2021-10-21").getTime(),
      y: 58270.61098
    },
    {
      x: new Date("2021-10-22").getTime(),
      y: 56847.34022
    },
    {
      x: new Date("2021-10-25").getTime(),
      y: 57736.40041
    },
    {
      x: new Date("2021-10-26").getTime(),
      y: 58191.04994
    },
    {
      x: new Date("2021-10-27").getTime(),
      y: 59470.39019
    },
    {
      x: new Date("2021-10-28").getTime(),
      y: 60221.89156
    },
    {
      x: new Date("2021-10-29").getTime(),
      y: 60368.88883
    },
    {
      x: new Date("2021-11-01").getTime(),
      y: 60169.88037
    },
    {
      x: new Date("2021-11-02").getTime(),
      y: 60228.56009
    },
    {
      x: new Date("2021-11-03").getTime(),
      y: 61327.60031
    },
    ]
  }]


  var options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Portfolio Movement',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val).toFixed(2);
        },
      },
      title: {
        text: 'Value (dollars)'
      },
    },
    xaxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      },
    },
    tooltip: {
      shared: false,
    }
  };


  return (
    <Chart options={options} series={series} type="area" height={500} width={'90%'} />
  )
}
