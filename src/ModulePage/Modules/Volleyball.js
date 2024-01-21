import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mahd from './volleyballmedia/mahd.png'
import './Volleyball.css'
import VPFP from './volleyballmedia/volleyball-pfp.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Volleyball() {
    
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="about-section20">
                    <h1>Volleyball Module</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={Mahd} alt="" style={{
                                width: "36%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                            <div style={{ color: '#FF7F7F', textAlign: 'center', fontSize: "30px" }}>Module Head<br />Mahd Khan</div>
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                            Welcome to IBA CON's Volleyball Module, where the excitement of volleyball takes center stage with a variety of
                            engaging activities. Dive into the sand for beach volleyball matches that blend skill and teamwork, providing an
                            energetic and social atmosphere. Test your accuracy and finesse in fun serving challenges, perfect for players of
                            all levels.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section21">
                    <h1>Volleyball Activities</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                            Test your pop culture knowledge as you try to guess the opening sequences of iconic movies, TV shows, and games.
                            Quick thinking and a sharp eye will be your best assets!
                        </div>
                        <div style={{ flex: '1' }}>
                            <img src={VPFP} alt="" style={{
                                width: "25.5%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                        </div>
                    </div>
                </div></SwiperSlide>
                </Swiper>
        </div>
    )
}
