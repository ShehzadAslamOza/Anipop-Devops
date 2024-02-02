import React from 'react'
import Sukuna from './audimedia/audi-pfp.png'
import './Auditorium.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PanelPFP from './audimedia/panel-pfp.jpeg'
import FilmPFP from './audimedia/film-screening-pfp.png'
import PrizePFP from './audimedia/prize-pfp.webp'
import { Link } from 'react-router-dom'; 
import '../ModuleButtons/CompButton.css'

export default function Auditorium() {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="aboutsection">
                <SwiperSlide><div className="about-section24">
                    <h1>Auditorium Module</h1>
                    <div>
                        <div>
                            <img src={Sukuna} alt=""/>
                            <div >Module Head<br />Abdullah Khan</div>
                        </div>
                        <div>
                            The IBA CON Auditorium Module is designed to be a versatile space that serves as the heart of intellectual and creative
                            exchange during the IBA CON event. With a focus on fostering dialogue, cinematic exploration, and recognizing talent in
                            voice acting, this module promises a diverse range of experiences for attendees.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section25">
                    <h1>Panel Discussion</h1>
                    <div>
                        <div>
                            The auditorium will host engaging panel discussions featuring industry experts, thought leaders, and creative minds from
                            various fields. These discussions will delve into cutting-edge topics, providing insights into emerging trends, challenges,
                            and innovations. Attendees can expect thought-provoking conversations that stimulate intellectual curiosity and encourage
                            collaboration among participants.
                        </div>
                        <div>
                            <img src={PanelPFP} alt=""  />
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section26">
                    <h1>Film Screening</h1>
                    <div>
                        <div>
                            <img src={FilmPFP} alt="" />
                        </div>
                        <div>
                        The auditorium will transform into a cinematic haven, offering a curated selection of films that align with the theme of 
                        IBA CON. From thought-provoking documentaries to entertaining narratives, the film screenings aim to captivate the audience,
                        spark conversations, and celebrate the art of storytelling through the lens. This cinematic experience is designed to enrich 
                        the overall IBA CON journey, providing a visual and emotional dimension to the event.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section27">
                    <h1>Prizes for Voice Acting</h1>
                    <div>
                        <div>
                        In a dedicated session, IBA CON will shine a spotlight on the often-overlooked yet integral world of voice acting.
                        IBA CON will present coveted prizes to individuals who have demonstrated exceptional skill and artistry 
                        in voice acting. These awards not only acknowledge the talent of the recipients but also honor their significant contributions to the 
                        storytelling landscape.
                        <br/>If you want to win one, submit your entries in the voice acting form in the competition-signups.
                        <br/>
                        <br/><Link to="/comp" className="fbutton5 my-3">
                                <i></i><i></i>
                                <span>Competition-SignUps</span>
                            </Link>
                        </div>
                        <div>
                            <img src={PrizePFP} alt="" />
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    )
}
