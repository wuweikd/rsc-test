"use client"

import * as echarts from "echarts";
import {useEffect} from "react";

const initEcharts = () => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById("e"));
  // 绘制图表
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};

const MyEchart = () => {
  useEffect(() => {
    initEcharts()
  }, [])
  return (
      <div>
        <div>echarts</div>
        <div id={"e"} style={{ width: "500px", height: "300px" }}></div>
      </div>
  );
}

export default MyEchart
