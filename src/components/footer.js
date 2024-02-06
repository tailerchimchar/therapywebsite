import Image from "next/image";
import therapyPink from '../images/therapyPink.png';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-20 text-base-content mb-20" >
          <h1 className="top-div" style={{ display: 'inline-block', paddingLeft: '50px' }}>
            Prevention & Treat Mental Health Problems 
              <a href= "https://www.google.com/" className="no-decoration" >
                <button className  ="whitespace py-2 px-4 rounded-md" style={{ fontSize: '30px'}}>Book an Appointment</button>
              </a>
          </h1>
          
      <aside className="image-spacing">
        <Image src={therapyPink} alt="Pink Image" width={300} height={400} />
        <div className="social-links">
          <a href="https://www.instagram.com">
            <Image src={instagramPic} alt="Instagram" width={50} height={50} />
          </a>   
          <a href="https://www.linkedin.com">
            <Image src={linkedInPic} alt="LinkedIn" width={50} height={50} />
          </a> 
        </div>
      </aside>

      <div className ="footer-spacing">
        <h6 className="footer-title line">Contact Info</h6>
        <p><strong>Telehealth Only</strong></p>
        <p><strong>713-123-1234</strong></p>
        <p>Email:</p>
        <p><strong>Tam'sEmail@gmail.com:</strong></p>
      </div>

      <div className ="footer-spacing">
        <h6 className="footer-title line">Quick Links</h6>
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/about">About Me</a>
        <a href="http://localhost:3000/approach">Approach</a>
        <a href="http://localhost:3000/inquiries">Submit Inquiries</a>
        <a href="http://localhost:3000/contact">Contact Me</a>
        <a href="http://localhost:3000/services">Services</a>
      </div>

      <div className ="footer-spacing">
        <h6 className="footer-title line">Hours of Operation:</h6>
        <p><strong>Mondays-Fridays:</strong> 8:00am - 9:00pm</p>
        <p><strong>Saturdays:</strong> 8:00am - 6:00pm</p>
        <p><strong>Sundays:</strong> 9:00am - 6:00pm</p>
      </div>
      
    </footer>
    );
  };
      


export default Footer;

