import styles from "./productList.module.css";
import { productListMockData } from "@/mock/productList";
import Link from 'next/link'

async function getDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productListMockData);
    }, 200);
  });
}

const getDataResource = async () => {
  const res = await getDate();
  return res;
}

const ProductListServer = async () => {
  const store ={
    city: "",
  };

  let list: any = null



  const openDetail = () => {
  }



  const search = async () => {
    const l: any = await getDataResource()
    list = l
  }

  await search()

  return (
    <div className={styles.productList}>
      <div className={styles.list}>
        {list?.list.map((item: any, index: number) => (
            <Link
                href={'./product'}
                key={index}
                className={styles.item}
            >
              <img height={450} src={item.pic} alt="" width={450}/>
              <div>商品名称：{item.name}</div>
              <div>商品产地：{item.address}</div>
            </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListServer
