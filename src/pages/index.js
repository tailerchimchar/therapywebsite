import Link from "next/link"
import {useRouter} from "next/router"
import Image from 'next/image';
import Head from 'next/head';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//import { Parallax, Background } from 'react-parallax';
import bg1 from '../images/city1.jpg';

import React from 'react';
import tamsHeadshot from '../images/tamheadshot.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Home() {

  return (
 

      <Parallax pages={4}>
       <ParallaxLayer offset={0} speed={0.2}>
        <div className="background1">
       
          <h1>Welcome to Tam's Therapy Startup home page</h1>
          <div className="headshot-container">
          <Image src={tamsHeadshot} alt="Tam's Headshot" width={500} height={500} />


          
        </div>

        </div>
      </ParallaxLayer>

      
      
    




        {/* Border separating content from footer */}
        <hr className="my-4" />
      </Parallax>
      

  );
}

export default Home;
