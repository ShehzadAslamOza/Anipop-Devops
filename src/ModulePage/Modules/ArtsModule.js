import React from 'react'
import './ArtsModule.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArtsPFP from './artsmedia/Arts-Module-pfp.png'
import TAPFP from './artsmedia/Screenshot 2024-01-20 174723.png'
import DAPFP from './artsmedia/Screenshot 2024-01-20 174959.png'
import '../ModuleButtons/CompButton.css'
import {Link} from 'react-router-dom'

export default function ArtsModule() {

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="aboutsection">
                <SwiperSlide><div className="about-section13">
                    <h1>Arts Modules</h1>
                    <div>
                        <div>
                            Step into a world of creativity at our event's Arts Module, where artistic expression takes center stage! Immerse yourself
                            in the beauty of traditional and digital art through two thrilling competitions that celebrate the diverse realms of
                            artistic talent.
                        </div>
                        <div>
                            <img src={ArtsPFP}  />
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section14">
                    <h1>Traditional Art Competition</h1>
                    <div>
                        <div>
                            <img src={TAPFP} alt=""  />
                        </div>
                        <div>
                            Embark on a creative journey in our Traditional Art Module themed "Parallel Universe." With a walk-in registration, indulge in the
                            exploration of characters' divergent stories using provided materials like paints, paper, and brushes, or bring your own to craft a
                            truly distinctive narrative.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section15">
                    <h1>OC Roulette</h1>
                    <div>
                        <div>
                            <img src={DAPFP} alt="" />
                        </div>
                        <div>
                            Welcome to OC Roulette, IBACON's lively digital art competition module!
                            In OC Roulette, participants will be randomly assigned a theme, challenging them to craft an engaging original
                            character that perfectly captures the essence of their given theme. These characters will be judged against others,
                            and winners will be rewarded with various prizes!
                            <br />If you think you have what it takes, sign up now by clicking the competition signups button below.
                            <br />
                            <br /><Link to="/comp" className="fbutton5 my-3">
                                <i></i><i></i>
                                <span>Competition-SignUps</span>
                            </Link>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    )
}

