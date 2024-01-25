import Link from "next/link"
import {useRouter} from "next/router"
import Image from 'next/image';
import Head from 'next/head';
import { Parallax } from 'react-parallax';
import bg1 from '../images/city1.jpg';

import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Home() {

  return (
    <Parallax className='backgroundimg' bgImage='../images/instagram.png' strength={800}>
      <h1>Welcome to Tam's Therapy Startup home page</h1>
      <div className="headshot-container">
      <Image src={tamsHeadshot} alt="Tam's Headshot" width={500} height={500} />

      </div>
      <div className='div1'>
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
        <a class="btn btn-large btn-success" href="#"><i class="icon-truck"></i> Sign up today</a>
      </div>

      <div className='div2'>
        <p className='content1'>Nulla pellentesque dignissim odio vitae eleifend.</p>
      </div>

      <div className='div-service'>
        <p className='content2'>
        SERVICES
        </p>
        <div class="service-box">Service 1</div>
        <div class="service-box">Service 2</div>
        <div class="service-box">Service 3</div>
      </div>

      <div className='fillerDiv'></div>

      <div className='div3'>
        <div className='leftContent'></div>
        <div className='middleContent'>
          <p className='content2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='rightContent'> </div>
      </div>
      <div className='div2'>
        <p className='content1'>Nulla pellentesque dignissim odio vitae eleifend.</p>
      </div>
      {/* Border separating content from footer */}
      <hr className="my-4" />
    </Parallax>
  );
}

export default Home;
