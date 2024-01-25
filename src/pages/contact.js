import Link from "next/link"
import Image from "next/image";
import React from 'react';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

function Contact() {
  return (
    <div className="wrapper">
      <div className="container mt-4">
        <h1> Contact Tam!</h1>
        <h1> tam@gmail.com</h1>
        <h1> (832)-479-7240</h1>
      </div>
      {/* Border separating content from footer */}
      <hr className="my-4" />
    </div>
  );
}

export default Contact;