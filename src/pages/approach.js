import Link from "next/link"
import Image from "next/image";
import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Approach() {
  return (
    <div className="wrapper">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1> Tam's Approach</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. 
              Donec mi dolor, semper sit amet euismod sed, viverra a massa. 
              Nulla sed mauris id est ullamcorper viverra viverra vitae leo. 
            </p>
          </div>
          <div className="col-md-6">
            {/* Insert headshot image here */}
            <Image src={tamsHeadshot} alt="Tam's Headshot" width={250} height={250} />
          </div>
        </div>
      </div>
      {/* Border separating content from footer */}
      <hr className="my-4" />

    </div>
  );
}

export default Approach;