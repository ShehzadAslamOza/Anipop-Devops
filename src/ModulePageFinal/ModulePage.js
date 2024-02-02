import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ModulePage.css";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import mic from "./media/mic.jpg";
import da from "./media/da.jpg";
import va from "./media/va.jpg";
import an from "./media/an.jpg";
import ModuleInfo from "./ModPageComponents/ModuleInfo";
import Module from "./ModPageComponents/Module";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ModulePage() {
  return (
    <div>
      <section id="mod-screen1">
        <Navbar />
        <div className="buffer"></div>
        <ModuleInfo />
      </section>
      <section id="mod-screen2">
        <Swiper navigation={true} modules={Navigation} className="my-swiper">
          <SwiperSlide>
            <Module
              title="Stage Module"
              description="Get ready for a non-stop thrill ride at our event's stage module! Our carefully curated lineup promises to keep
          you entertained and engaged throughout the day."
              fi="Swipe right for more ->"
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Family Feud"
              description="Watch families battle it out in a hilarious and friendly competition that will have you on the edge of your seat.
              Laughter and surprises guaranteed!"
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Hot Takes/Tier List"
              description=" Engage in spirited discussions as participants share their hot takes and create tier lists on popular characters/topics.
              Get ready for some passionate opinions and lively debates!"
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Guess the Anime Opening"
              description="Test your pop culture knowledge as you try to guess the opening sequences of iconic movies, TV shows, and games. 
              Quick thinking and a sharp eye will be your best assets!"
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Gaming Tournament Finale"
              description="Get ready for the ultimate gaming showdown as our stage module hosts the intense finale of the Tekken 7 and Super Smash Bros tournaments
              ! Top-tier players will battle it out in thrilling one-on-one matches, showcasing jaw-dropping moves and strategic gameplay. Don't miss 
              the excitement as iconic characters collide on the big screen, delivering an adrenaline-pumping spectacle that defines the pinnacle of 
              our gaming tournament. Who will emerge victorious in this epic duel of skills? Find out as the stage lights up with gaming glory!"
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Performance"
              description="Enjoy a variety of captivating performances showcasing talent in music, dance, and other exciting acts. From jaw-dropping displays 
              to soulful melodies, our stage is set to be a feast for the senses."
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Geeks Got Talent"
              description="Geeks Got Talent brings together the most extraordinary talents of the day. From mind-blowing magic tricks to awe-inspiring 
              performances, be prepared to be amazed!
              <br/>Don't miss out on the chance to be part of the action. For those with hidden talents, our Geeks Got Talent competition awaits 
              you! If you think you have what it takes, sign up now by clicking the competition signups button below."
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Cosplay Walk"
              description=" The grand finale awaits! Witness a parade of creativity as cosplayers strut their stuff on the stage.
              Marvel at the intricate costumes and impeccable character portrayals that bring fantasy to life."
              link=""
              img={an}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="mod-screen3">
        {" "}
        <Swiper navigation={true} modules={Navigation} className="my-swiper">
          <SwiperSlide>
            <Module
              title="Arts Module"
              description="Step into a world of creativity at our event's Arts Module, where artistic expression takes center stage! Immerse yourself
              in the beauty of traditional and digital art through two thrilling competitions that celebrate the diverse realms of
              artistic talent."
              fi="Swipe right for more ->"
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Traditional Art Competition"
              description="Embark on a creative journey in our Traditional Art Module themed Parallel Universe. With a walk-in registration, indulge in the
              exploration of characters' divergent stories using provided materials like paints, paper, and brushes, or bring your own to craft a
              truly distinctive narrative."
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="OC Roulette"
              description=" Welcome to OC Roulette, IBACON's lively digital art competition module!
              In OC Roulette, participants will be randomly assigned a theme, challenging them to craft an engaging original
              character that perfectly captures the essence of their given theme. These characters will be judged against others,
              and winners will be rewarded with various prizes!"
              link=""
              img={an}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="mod-screen4">
        {" "}
        <Swiper navigation={true} modules={Navigation} className="my-swiper">
          <SwiperSlide>
            <Module
              title="Gaming Module"
              description="Welcome to IBA CON's Gaming Module - a haven for avid gamers and enthusiasts alike! Immerse yourself in the electrifying world of
              gaming as we present two thrilling tournaments and a gaming booth packed with exciting titles."
              fi="Swipe right for more ->"
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="Tekken Tournament"
              description="Get ready to throw down in the ultimate battle of fists and kicks! The Tekken Tournament at IBA CON promises intense one-on-one
              combat as participants compete for the title of Tekken Champion. With its iconic characters and dynamic gameplay, this tournament
              is a showcase of skill, strategy, and lightning-fast reflexes."
              fi=""
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="Super Smash Bros"
              description="Calling all Smash enthusiasts! The Super Smash Bros Tournament is a clash of iconic characters from various gaming universes.
              Smash your way to victory as you navigate the chaotic arenas, unleashing powerful moves and strategic plays. Will you emerge as
              the Super Smash Bros Champion?"
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Gaming Booth"
              description=" Step into the gaming paradise at IBA CON's Gaming Booth! Unleash powerful moves in 'Dragon Ball Z: Budokai Tenkaichi 3,'
              experience the latest in the iconic series with Tekken 8, and immerse yourself in ninja battles with 
              'Naruto Shippuden: Ultimate Ninja Storm 4.' From epic showdowns to strategic combat, the Gaming Booth is a haven for 
              all gaming enthusiasts, offering a thrilling glimpse into the diverse world of gaming culture."
              link=""
              img={an}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="mod-screen5">
        {" "}
        <Swiper navigation={true} modules={Navigation} className="my-swiper">
          <SwiperSlide>
            <Module
              title="Volleyball Module"
              description="Welcome to IBA CON's Volleyball Module, where the excitement of
              volleyball takes center stage with a variety of engaging
              activities. Dive into the sand for beach volleyball matches that
              blend skill and teamwork, providing an energetic and social
              atmosphere. Test your accuracy and finesse in fun serving
              challenges, perfect for players of all levels."
              fi="Swipe right for more ->"
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="First to 10 Points - Win Team Volleyball<"
              description="Get ready for intense, fast-paced action as teams compete to be the first to reach 10 points. This condensed version of traditional volleyball emphasizes quick thinking, strategic plays, and precise execution. With shorter matches, the First to 10 Points format adds an extra layer of excitement, making every point crucial and the competition highly unpredictable."
              fi=""
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="Highest Vertical Reach Competition"
              description="For those who want to showcase their vertical prowess, the
              Highest Vertical Reach competition is the perfect stage.
              Participants will have the opportunity to demonstrate their
              explosive jumps and impressive agility as they aim for the
              highest point above the net. This competition not only
              highlights individual athleticism but also adds an element of
              suspense as spectators eagerly anticipate who will reach the
              highest heights."
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Are You Taller Than Tuskishima? Challenge"
              description=" For all haikyuu fanboys/fangirls, this light-hearted challenge
              invites participants to measure up against the fictional
              character Kei Tuskishima, known for his exceptional height on
              the volleyball court. Participants will have the chance to stand
              next to a life-sized cutout of Tuskishima and find out if they
              measure up to his towering stature. It adds a fun and
              interactive element to the module, sparking friendly banter and
              memorable moments."
              link=""
              img={an}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="mod-screen6">
        {" "}
        <Swiper navigation={true} modules={Navigation} className="my-swiper">
          <SwiperSlide>
            <Module
              title="Auditorium Module"
              description=" The IBA CON Auditorium Module is designed to be a versatile space that serves as the heart of intellectual and creative
              exchange during the IBA CON event. With a focus on fostering dialogue, cinematic exploration, and recognizing talent in
              voice acting, this module promises a diverse range of experiences for attendees."
              fi="Swipe right for more ->"
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="Panel Discussion"
              description="The auditorium will host engaging panel discussions featuring industry experts, thought leaders, and creative minds from
              various fields. These discussions will delve into cutting-edge topics, providing insights into emerging trends, challenges,
              and innovations. Attendees can expect thought-provoking conversations that stimulate intellectual curiosity and encourage
              collaboration among participants."
              fi=""
              img={an}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Module
              title="Film Screening"
              description="The auditorium will transform into a cinematic haven, offering a curated selection of films that align with the theme of 
              IBA CON. From thought-provoking documentaries to entertaining narratives, the film screenings aim to captivate the audience,
              spark conversations, and celebrate the art of storytelling through the lens. This cinematic experience is designed to enrich 
              the overall IBA CON journey, providing a visual and emotional dimension to the event."
              link=""
              img={an}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Module
              title="Prizes for Voice Acting"
              description=" In a dedicated session, IBA CON will shine a spotlight on the often-overlooked yet integral world of voice acting.
              IBA CON will present coveted prizes to individuals who have demonstrated exceptional skill and artistry 
              in voice acting. These awards not only acknowledge the talent of the recipients but also honor their significant contributions to the 
              storytelling landscape."
              link=""
              img={an}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
