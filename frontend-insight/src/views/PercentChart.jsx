import React from 'react';
import Chart from 'react-apexcharts'
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";


export default function PercentChart(props) {
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
      y: -0.000487873
    },
    {
      x: new Date("2021-10-11").getTime(),
      y: -0.007705783
    },
    {
      x: new Date("2021-10-12").getTime(),
      y: -0.004702583
    },
    {
      x: new Date("2021-10-13").getTime(),
      y: 0.010035404
    },
    {
      x: new Date("2021-10-14").getTime(),
      y: 0.014162676
    },
    {
      x: new Date("2021-10-15").getTime(),
      y: 0.017582943
    },
    {
      x: new Date("2021-10-18").getTime(),
      y: 0.013625322
    },
    {
      x: new Date("2021-10-19").getTime(),
      y: 0.001799235
    },
    {
      x: new Date("2021-10-20").getTime(),
      y: -0.007299997
    },
    {
      x: new Date("2021-10-21").getTime(),
      y: 0.007015513
    },
    {
      x: new Date("2021-10-22").getTime(),
      y: -0.02442519
    },
    {
      x: new Date("2021-10-25").getTime(),
      y: 0.015639433
    },
    {
      x: new Date("2021-10-26").getTime(),
      y: 0.007874574
    },
    {
      x: new Date("2021-10-27").getTime(),
      y: 0.021985172
    },
    {
      x: new Date("2021-10-28").getTime(),
      y: 0.012636564
    },
    {
      x: new Date("2021-10-29").getTime(),
      y: 0.002440928
    },
    {
      x: new Date("2021-11-01").getTime(),
      y: -0.00329654
    },
    {
      x: new Date("2021-11-02").getTime(),
      y: 0.000975234
    },
    {
      x: new Date("2021-11-03").getTime(),
      y: 0.018247825
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
      text: 'Portfolio Percentage Change By Day',
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
