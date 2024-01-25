import Link from "next/link"
import {useRouter} from "next/router"
import Image from 'next/image';
import Head from 'next/head';


import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Home() {

  const navigate = useRouter()

  return (
    <div className="wrapper">
      <div className="container mt-4">
        <h1>Welcome to Tam's Therapy Startup home page</h1>
        <div className="headshot-container">
          <Image src={tamsHeadshot} alt="Tam's Headshot" width={500} height={500} />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam nec ex sed dolor posuere ullamcorper sit amet eu sem. 
          Donec mi dolor, semper sit amet euismod sed, viverra a massa. 
          Nulla sed mauris id est ullamcorper viverra viverra vitae leo. 
        </p>
        <p>
          Nulla pellentesque dignissim odio vitae eleifend. 
          Sed vel molestie erat, et congue arcu. 
          Praesent pulvinar, purus eu vehicula volutpat, enim purus congue justo, vel vulputate sem turpis non nunc. 
        </p>

        <a className="btn btn-large btn-success" href="#"><i className="icon-truck"></i> Sign up today</a>
      </div>
      {/* Border separating content from footer */}
      <hr className="my-4" />
      
    </div>
  );
}

export default Home;
