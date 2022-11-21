import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../css/slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Slider = ({ newsInfo }) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{delay: 5000}}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    newsInfo.map((element) => {
                        return (
                            <SwiperSlide key={element.urlToImage} className="slider">
                                <img src={!element.urlToImage?"https://cdn.vox-cdn.com/thumbor/Xx-5LI83bB-z6NSmy1A0gKMhf9s=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/24196839/facebookthumbsdong.jpg":element.urlToImage} alt="" className='img-slider' />
                                <div className='sliderInfo'>
                                    <Link to="/Subpage"><h1>{element.title}</h1></Link>
                                    <p className='slider-date'><i className="fa fa-calendar calender" aria-hidden="true"></i>{new Date(element.publishedAt).toGMTString()}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider