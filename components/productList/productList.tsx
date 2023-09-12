
import styles from "./productList.module.css";
import { productListMockData } from "@/mock/productList";
import {useState, useEffect} from "react";

async function getDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productListMockData);
    }, 200);
  });
}

const getDataResource = async () => {
  const res = await getDate();
  console.log("res--->", res);
  return res;
}

const ProductList = () => {
  const store ={
    city: "",
  };

  const [list, setList] = useState<any>(null)



  const openDetail = () => {
    console.log("xxxxx", (location.href = "/product"));
  }



  const search = async () => {
    const l: any = await getDataResource()
    console.log('l====', l)
    setList(l)
  }

  useEffect( () => {
     search()
  }, [])

  return (
    <div className={styles.productList}>
      <div>
        <span>请输入搜索产地：</span>
        <input
            className={'input'}
          name="city"
          onInput={(ev: any) => (store.city = ev.target.value)}
        />
      </div>
      <button onClick={() => search()}>开始搜索</button>

      <div className={styles.list}>
        {list?.list.map((item: any, index: number) => (
            <div
                key={index}
                className={styles.item}
                onClick={() => openDetail()}
            >
              <img height={450} src={item.pic} alt="" width={450}/>
              <div>商品名称：{item.name}</div>
              <div>商品产地：{item.address}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList