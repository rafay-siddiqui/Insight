import React from 'react';
import Chart from 'react-apexcharts'
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";


export default function PercentCompoundedChart(props) {
  const query = useQuery('history', () => getDetailedHistory(1));


  const series = [{
    name: "% Change",
    data: [{
      x: new Date("2021-10-06").getTime(),
      y: 0
    },
    {
      x: new Date("2021-10-07").getTime(),
      y: 0.0121022
    },
    {
      x: new Date("2021-10-08").getTime(),
      y: 0.0116085
    },
    {
      x: new Date("2021-10-11").getTime(),
      y: 0.00381323
    },
    {
      x: new Date("2021-10-12").getTime(),
      y: -0.000907285
    },
    {
      x: new Date("2021-10-13").getTime(),
      y: 0.009119014
    },
    {
      x: new Date("2021-10-14").getTime(),
      y: 0.02341084
    },
    {
      x: new Date("2021-10-15").getTime(),
      y: 0.041405415
    },
    {
      x: new Date("2021-10-18").getTime(),
      y: 0.055594899
    },
    {
      x: new Date("2021-10-19").getTime(),
      y: 0.057494162
    },
    {
      x: new Date("2021-10-20").getTime(),
      y: 0.049774457
    },
    {
      x: new Date("2021-10-21").getTime(),
      y: 0.057139163
    },
    {
      x: new Date("2021-10-22").getTime(),
      y: 0.031318338
    },
    {
      x: new Date("2021-10-25").getTime(),
      y: 0.047447572
    },
    {
      x: new Date("2021-10-26").getTime(),
      y: 0.055695775
    },
    {
      x: new Date("2021-10-27").getTime(),
      y: 0.078905429
    },
    {
      x: new Date("2021-10-28").getTime(),
      y: 0.092539086
    },
    {
      x: new Date("2021-10-29").getTime(),
      y: 0.095205895
    },
    {
      x: new Date("2021-11-01").getTime(),
      y: 0.091595504
    },
    {
      x: new Date("2021-11-02").getTime(),
      y: 0.092660066
    },
    {
      x: new Date("2021-11-03").getTime(),
      y: 0.112598735
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
      text: 'Portfolio Percent Change Compounded',
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
          return (val * 100).toFixed(2);
        },
      },
      title: {
        text: 'Percentage Change'
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
