import styles from "./productList.module.css";
import { productListMockData } from "@/mock/productList";

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

const ProductListServer = async () => {
  const store ={
    city: "",
  };

  let list: any = null



  const openDetail = () => {
    console.log("xxxxx", (location.href = "/product"));
  }



  const search = async () => {
    const l: any = await getDataResource()
    console.log('l====', l)
    list = l
  }

  await search()

  return (
    <div className={styles.productList}>
      <div className={styles.list}>
        {list?.list.map((item: any, index: number) => (
            <a
                href={'./product'}
                key={index}
                className={styles.item}
            >
              <img height={450} src={item.pic} alt="" width={450}/>
              <div>商品名称：{item.name}</div>
              <div>商品产地：{item.address}</div>
            </a>
        ))}
      </div>
    </div>
  );
}

export default ProductListServer
