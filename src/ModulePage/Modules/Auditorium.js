import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sukuna from './audimedia/audi-pfp.png'
import './Auditorium.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Auditorium() {
    
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className="about-section24">
                    <h1>Auditorium Module</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={Sukuna} alt="" style={{
                                width: "36%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                            <div style={{ color: '#FF7F7F', textAlign: 'center', fontSize: "30px" }}>Module Head<br />Abdullah Khan</div>
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                        Step into the world of entertainment and enlightenment at IBA CON's Auditorium Module, where a plethora of captivating activities 
                        await. Immerse yourself in thought-provoking panel discussions featuring industry experts, providing insights into the latest trends 
                        and innovations. 
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section24">
                    <h1>Auditorium Module</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={Sukuna} alt="" style={{
                                width: "36%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                            <div style={{ color: '#FF7F7F', textAlign: 'center', fontSize: "30px" }}>Module Head<br />Abdullah Khan</div>
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                        Step into the world of entertainment and enlightenment at IBA CON's Auditorium Module, where a plethora of captivating activities 
                        await. Immerse yourself in thought-provoking panel discussions featuring industry experts, providing insights into the latest trends 
                        and innovations. 
                        </div>
                    </div>
                </div></SwiperSlide>
                </Swiper>
    </div>
  )
}
