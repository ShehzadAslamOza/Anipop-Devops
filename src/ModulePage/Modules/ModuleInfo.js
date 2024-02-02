import React from 'react';
import Mascot from '../media/Mascot Yassify.png'; // Replace with the actual path

export default function ModuleInfo() {
  return (
    <div>
      <div className="about-section4">
        <h1>Welcome to the Future of IBACON</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1', order: '2', textAlign: 'center' }}>
            <img
              src={Mascot}
              alt=""
              style={{
                maxWidth: '80%', // Ensure the image is responsive
                height: 'auto', // Maintain aspect ratio
                margin: '0 auto', // Center the image horizontally
                padding: '1.5rem',
              }}
            />
          </div>
          <div
            style={{
              flex: '1',
              fontSize: '25px',
              marginLeft: '40px',
              marginRight: '40px',
              order: '1',
            }}
          >
            Embark on an exciting journey at IBACON, where knowledge meets entertainment. Discover diverse modules designed
            for every interest, from expert-led sessions to hands-on workshops. Brace yourself for gaming tournaments,
            awesome activities, and surprises that promise an unforgettable experience. Join us in shaping the future -
            it's more than an event; it's a celebration of learning and entertainment.
            <br />
            <span style={{ fontSize: '4rem', lineHeight: 1.5 }}>ON SCNZ GUYZ!!!!!</span>
            <br />
            <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#screen8" className="fbutton">
                <i></i>
                <i></i>
                <span>Stage Module</span>
              </a>
              <a href="#screen9" className="fbutton1">
                <i></i>
                <i></i>
                <span>Arts Module</span>
              </a>
              <a href="#screen10" className="fbutton2">
                <i></i>
                <i></i>
                <span>Gaming Module</span>
              </a>
              <a href="#screen12" className="fbutton3">
                <i></i>
                <i></i>
                <span>Auditorium Module</span>
              </a>
              <a href="#screen11" className="fbutton4">
                <i></i>
                <i></i>
                <span>Volleyball Module</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
