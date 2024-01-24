import Link from "next/link"
import Image from "next/image";
import React from 'react';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Service() {

  let message = 'Can put anything here'
  return (
    <section className="section-white"> 
    <div className="container">
      <div className="row">
        <div className = "col-md-12 text center">
          <h2 className= "section-title">
            Services
          </h2>
          <p className="section-subtitle">{message}</p>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className= "service">
            <h3>Consult</h3>
            <div className="service-info">
              <p>mini description</p>
               {/* lorem ipsum      */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className= "service">
            <h3>Therapy</h3>
              <div className="service-info">
              <p>mini description</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className= "service">
            <h3>Hearing</h3>
            <div className="service-info">
              <p>mini description</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Border separating content from footer */}
    <hr className="my-4" />
      
    </section>
  );
}

export default Service;