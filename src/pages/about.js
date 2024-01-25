import Link from "next/link"
import Image from "next/image";
import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function About() {
  return (
    <div className="wrapper">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1> About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. Donec mi dolor, semper sit amet euismod sed, viverra a massa. Nulla sed mauris id est ullamcorper viverra viverra vitae leo.
            </p>
            <p>
              Nulla pellentesque dignissim odio vitae eleifend. Sed vel molestie erat, et congue arcu. Praesent pulvinar, purus eu vehicula volutpat, enim purus congue justo, vel vulputate sem turpis non nunc.
            </p>
          </div>
          <div className="col-md-6">
            {/* Insert headshot image here */}
            <Image src={tamsHeadshot} alt="Tam's Headshot" width={250} height={250} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
