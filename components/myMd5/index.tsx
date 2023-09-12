"use client";

import md5 from "md5";

import {useState} from "react";

const MyMd5 = () => {
  const [store, setStore] = useState({
    value: "1111",
    md5Value: "",
  });

  const getMd5 = () => {
      setStore({md5Value: md5(store.value), value: store.value })
  };


  return (
    <div>
      <div>md5</div>
      <input
        type="text"
        value={store.value}
        onInput={(event: any) => {
            setStore({md5Value: store.md5Value, value: event?.target?.value })
        }}
      />
      <button onClick={getMd5}>获取输入的md5值</button>
      <div>{store.md5Value}</div>
    </div>
  );
}

export default MyMd5

