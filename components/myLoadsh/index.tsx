'use client';

import now from "lodash/now";
import {useState} from "react";
const MyLoadsh = () => {

    const [store, setStore] = useState({value: 0})

  const add = () => {
      setStore({value: now() })
  };

  return (
    <div>
      <h4>lodash</h4>
      <button onClick={add}>lodash/now：获取当前时间</button>
      <div>{store.value}</div>
    </div>
  );
};

export default MyLoadsh