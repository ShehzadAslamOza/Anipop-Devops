import React from 'react'
import '../Modules/StageModule.css'
import Zuhair from './stagemedia/Zuhair.png'
import Myrol from './stagemedia/Myrol.png'
import FFAnime from './stagemedia/family-feud-pfp.jpg'
import TierList from './stagemedia/tierlist-pfp.jpg'
import AnimeOp from './stagemedia/opening-pfp.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GamingFinale from './stagemedia/gaming-pfp.avif'
import PerformancePFP from './stagemedia/performance-pfp.avif'
import GGV from './stagemedia/geeks-vocals-pfp.jpg'
import cosplayWalk from './stagemedia/cosplay-walk-pfp.jpg'
import {Link} from 'react-router-dom'
import '../ModuleButtons/CompButton.css'


export default function StageModule() {
    
  return (
    <div className='container'>
      <Swiper navigation={true} modules={[Navigation]} className="aboutsection">
      <SwiperSlide><div className="about-section5" >
            <h1>Stage Module</h1>
            <div>
              <div className='team-members'>
                <div className='member'>
                  <img src={Myrol} alt=""/>
                  <div>Module Head<br />Miraal Aftab</div>
                </div>
                <div className='member'>
                  <img src={Zuhair} alt=""  />
                  <div>Module Head<br />Zuhair Shah</div>
                </div>
              </div>
              <div>
                Get ready for a non-stop thrill ride at our event's stage module! Our carefully curated lineup promises to keep
                you entertained and engaged throughout the day.
                <br /><span>Here's a glimpse of what's in store:</span>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section6">
            <h1>Family Feud</h1>
            <div>
              <div>
                Watch families battle it out in a hilarious and friendly competition that will have you on the edge of your seat.
                Laughter and surprises guaranteed!
              </div>
              <div>
                <img src={FFAnime} alt="" />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section7">
            <h1>Hot Takes/Tier List</h1>
            <div>
              <div>
                <img src={TierList} alt="" />
              </div>
              <div>
                Engage in spirited discussions as participants share their hot takes and create tier lists on popular characters/topics.
                Get ready for some passionate opinions and lively debates!
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section8">
            <h1>Guess the Anime Opening</h1>
            <div>
              <div>
              Test your pop culture knowledge as you try to guess the opening sequences of iconic movies, TV shows, and games. 
              Quick thinking and a sharp eye will be your best assets!
              </div>
              <div>
                <img src={AnimeOp} alt="" />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section9">
          <h1>Gaming Tournament Finale</h1>
          <div>
            <div>
              <img src={GamingFinale} alt="" />
            </div>
            <div>
            Get ready for the ultimate gaming showdown as our stage module hosts the intense finale of the Tekken 7 and Super Smash Bros tournaments
            ! Top-tier players will battle it out in thrilling one-on-one matches, showcasing jaw-dropping moves and strategic gameplay. Don't miss 
            the excitement as iconic characters collide on the big screen, delivering an adrenaline-pumping spectacle that defines the pinnacle of 
            our gaming tournament. Who will emerge victorious in this epic duel of skills? Find out as the stage lights up with gaming glory!
            </div>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="about-section10">
            <h1>Performance</h1>
            <div>
              <div>
              Enjoy a variety of captivating performances showcasing talent in music, dance, and other exciting acts. From jaw-dropping displays 
              to soulful melodies, our stage is set to be a feast for the senses.
              </div>
              <div style={{ flex: '1' }}>
                <img src={PerformancePFP} alt="" />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section11">
          <h1>Geeks Got Talent</h1>
          <div>
            <div>
              <img src={GGV} alt="" />
            </div>
            <div>
            Geeks Got Talent brings together the most extraordinary talents of the day. From mind-blowing magic tricks to awe-inspiring 
            performances, be prepared to be amazed!
            <br/>Don't miss out on the chance to be part of the action. For those with hidden talents, our Geeks Got Talent competition awaits 
            you! If you think you have what it takes, sign up now by clicking the competition signups button below.
            <br/>
            <br/><Link to="/comp" className="fbutton5 my-3">
                <i></i><i></i>
                <span>Competition-SignUps</span>
                </Link>
            </div>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="about-section12">
            <h1>Cosplay Walk</h1>
            <div>
              <div>
              The grand finale awaits! Witness a parade of creativity as cosplayers strut their stuff on the stage.
               Marvel at the intricate costumes and impeccable character portrayals that bring fantasy to life.
              </div>
              <div>
                <img src={cosplayWalk} alt=""/>
              </div>
            </div>
          </div></SwiperSlide>

      
        </Swiper>
    </div>
  )
}
