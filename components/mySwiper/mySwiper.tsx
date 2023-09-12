"use client"
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {useEffect} from "react";


const initSwiper = () => {
  console.log("initSwiper");
  new Swiper(".swiper", {
    // Optional parameters
    modules: [Navigation, Pagination],
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};


const MySwiper  =() => {
  useEffect(() => {
    initSwiper();
  }, [])

  return (
    <div>
      <div className="swiper" style={{ width: "600px", height: "200px" }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};

export default MySwiper
