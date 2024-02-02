import React from 'react'
import Talha from './gamingmedia/talha.png'
import tekken7 from './gamingmedia/gaming-tour-pf.jpeg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gaming.css'
import SSB from './gamingmedia/gaming-tour-pf1.jpeg'
import GamingBooth from './gamingmedia/gaming-booth-pfp.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Gaming() {
    
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="aboutsection">
                <SwiperSlide><div className="about-section16">
                    <h1>Gaming Module</h1>
                    <div>
                        <div>
                            <img src={Talha} alt=""  />
                            <div>Module Head<br />Talha Tahjuddin</div>
                        </div>
                        <div>
                            Welcome to IBA CON's Gaming Module - a haven for avid gamers and enthusiasts alike! Immerse yourself in the electrifying world of
                            gaming as we present two thrilling tournaments and a gaming booth packed with exciting titles.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section17">
                    <h1>Tekken Tournament</h1>
                    <div>
                        <div>
                            Get ready to throw down in the ultimate battle of fists and kicks! The Tekken Tournament at IBA CON promises intense one-on-one
                            combat as participants compete for the title of Tekken Champion. With its iconic characters and dynamic gameplay, this tournament
                            is a showcase of skill, strategy, and lightning-fast reflexes.
                        </div>
                        <div>
                            <img src={tekken7} alt="" />
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section18">
                    <h1>Super Smash Bros</h1>
                    <div>
                        <div>
                            <img src={SSB} alt=""  />
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                            Calling all Smash enthusiasts! The Super Smash Bros Tournament is a clash of iconic characters from various gaming universes.
                            Smash your way to victory as you navigate the chaotic arenas, unleashing powerful moves and strategic plays. Will you emerge as
                            the Super Smash Bros Champion?
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section19">
                    <h1>Gaming Booth</h1>
                    <div>
                        <div>
                            Step into the gaming paradise at IBA CON's Gaming Booth! Unleash powerful moves in "Dragon Ball Z: Budokai Tenkaichi 3,"
                             experience the latest in the iconic series with "Tekken 8," and immerse yourself in ninja battles with 
                             "Naruto Shippuden: Ultimate Ninja Storm 4." From epic showdowns to strategic combat, the Gaming Booth is a haven for 
                             all gaming enthusiasts, offering a thrilling glimpse into the diverse world of gaming culture.
                        </div>
                        <div>
                            <img src={GamingBooth} alt="" />
                        </div>
                    </div>
                </div></SwiperSlide>
                </Swiper>
        </div>
    )
}
