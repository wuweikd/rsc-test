"use client";

import {useEffect, useState} from "react";
import {start, dpReport} from "@/performance/lib";

const GetPerformance = () => {
    const [info, setInfo] = useState('')
    useEffect(() => {
        start({
            performanceKey: "xx",
            cb: (p) => {
                console.log("cb----");
                console.info(p);
                setInfo(p.data.moreinfo)
            },
            hiidoUrl: "https://xxxx.xxxx.xxxx/c.gif",
        });
    }, [])
    const getInfo = () => {
        dpReport()
    }

    return <div>
        <button onClick={getInfo}>获取当前页面性能报告</button>
        <div style={{whiteSpace: 'pre-wrap'}}>{info}</div>
    </div>

}

export default GetPerformance
