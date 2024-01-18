import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div>
      <section id="contact-screen2">
        <Navbar />
        <div className="buffer"></div>
        <div class="contact-section">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div class="representative">
            <h3>Animation & Pop Culture Society</h3>

            <p>Email: anipopsociety@khi.iba.edu.pk</p>
          </div>
          <div class="representative">
            <h3>Representative 1</h3>
            <p>Mobile: +92-3341326401</p>
          </div>

          <div class="representative">
            <h3>Representative 2</h3>
            <p>Mobile: +92-3353142620</p>
          </div>

          {/* <div class="representative">
            <h3>Location</h3>
            <p>IBA Karachi</p>
            <p>Maps Link</p>
        </div> */}
        </div>
      </section>
      {/* <section id="contact-screen3"></section> */}
    </div>
  );
}
