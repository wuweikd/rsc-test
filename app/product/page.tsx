"use client"

import MyEchart from "@/components/myEcharts";
import MyEchart1 from "@/components/myEcharts";
import MyEchart2 from "@/components/myEchart2";
import MyEchart3 from "@/components/myEchart3";
import MyEchart4 from "@/components/myEchart4";
import MyEchart5 from "@/components/myEchart5";
import MyEchart6 from "@/components/myEchart6";
import MyEchart7 from "@/components/myEchart7";
import MyEchart8 from "@/components/myEchart8";
import MyEchart9 from "@/components/myEchart9";
import MyEchart10 from "@/components/myEchart10";
import MyEchart11 from "@/components/myEchart11";
import MyEchart12 from "@/components/myEchart12";
import {start, dpReport} from "@/performance/lib";
import {useEffect, useState} from "react";
import MyLoadsh from "@/components/myLoadsh";
import MySwiper from "@/components/mySwiper/mySwiper";
import MyJquery from "@/components/myJquery";
import MyMd5 from "@/components/myMd5";
import ProductList from "@/components/productList/productList";


// https://stackoverflow.com/questions/75506986/what-are-the-differences-between-next-js-13-server-components-and-client-compone


const Product = () => {
  const [store, setStore] = useState({
    info: ''
  })

  const initPerformance = () => {
    start({
      performanceKey: "product",
      cb: (p) => {
        console.log("cb----");
        console.info(p);
        setStore({info: p.data.moreinfo})
      },
      hiidoUrl: "https://xxxx.xxxx.xxxx/c.gif",
    });
  }

  useEffect(() => {
    initPerformance()
  }, [])




  const getReport = () => {
    dpReport()
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>商品详情页</h1>
      <button onClick={getReport}>
        <h4>获取页面性能报告</h4>
      </button>
      <h5>{store.info}</h5>
      <MySwiper></MySwiper>
      <MyLoadsh></MyLoadsh>
      <MyJquery></MyJquery>
      <MyMd5></MyMd5>
      <MyEchart></MyEchart>
        <MyEchart1></MyEchart1>
        <MyEchart2></MyEchart2>
        <MyEchart3></MyEchart3>
        <MyEchart4></MyEchart4>
        <MyEchart5></MyEchart5>
        <MyEchart6></MyEchart6>
        <MyEchart7></MyEchart7>
        <MyEchart8></MyEchart8>
        <MyEchart9></MyEchart9>
        <MyEchart10></MyEchart10>
        <MyEchart11></MyEchart11>
        <MyEchart12></MyEchart12>
        <ProductList></ProductList>
    </div>
  );
};

export default Product;
