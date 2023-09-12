
import ProductListServer from "@/components/productListServer/productListServer";
import Image from 'next/image'
import GetPerformance from "@/components/getPerformance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <GetPerformance></GetPerformance>
        <div>这是一个Next.js 项目</div>
        <h4>关于启动性能：</h4>
        <div>1，首页会进行服务端渲染，数据通过一个接口请求，接口时间指定为 200 ms</div>
        <div>
            2，接口将返回100条商品数据在首页渲染，首页将使用antd为第三方库模拟实际情况
        </div>
        <div>
            3, 点击商品将调用商品接口（接口200ms）查询详情，并进入商品详情页面。
        </div>
        <div>
            4, 为模拟商品详情页的复杂情况，商品页会同时加载5种常见的第三方sdk:
            echarts、JQuery、swiper、lodash，md5，同时会加载5*500K的商品图片。且会加载20个类似（不是同一个）的Echarts组件。
        </div>
        <div>5, 测试会在5G、4G、3G情况下，统计FCP、LCP、TTFB、FID 等指标</div>
        <div>6, 测试会不同级别CPU，统计FCP、LCP、TTFB、FID 等指标</div>
      <ProductListServer></ProductListServer>
    </main>
  )
}
