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
      
      {/* Footer Section */}
      <div className="footer mt-auto" style={{ backgroundColor: '#333', color: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* First Footer Column */}
              <h4>Column 1</h4>
              <p>Eget arcu dictum varius duis at consectetur lorem donec massa. Et leo duis ut diam quam.</p>
              <p><b>Suscipit adipiscing bibendum est ultricies integer quis auctor elit.</b></p>
            </div>
            <div className="col-md-4">
              {/* Second Footer Column */}
              <h4>Column 2</h4>
              <p>
                Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Quis auctor elit sed.
                <a href="https://www.instagram.com"><img src={instagramPic} alt="Instagram" width="50px" /></a>
                <a href="https://www.linkedin.com"><img src={linkedInPic} alt="LinkedIn"  width="50px"/></a>
              </p>
              <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
            </div>
            <div className="col-md-4">
              {/* Third Footer Column */}
              <h4>Column 3</h4>
              {/* Change href to appropriate address link */}
              <p><a href="https://www.google.com/maps"> Address Goes Here</a> </p>
              {/* Change availability here */}
              <p>Availability days of the week</p>
              <p>Availability hours of the week</p>
              <p>Email</p>
              <p>Phone number</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;