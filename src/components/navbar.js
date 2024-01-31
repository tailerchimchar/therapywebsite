import { useEffect } from 'react';
import Link from 'next/link';
import logoImg from '../images/logo.png';
import Image from 'next/image';

const Navbar = () => {
  useEffect(() => {
    const handleButtonClick = () => {
      const btnElList = document.querySelectorAll('.btn');

      btnElList.forEach((btnEl) => {
        btnEl.addEventListener('click', () => {
          const currentSpecial = document.querySelector('.special');
          if (currentSpecial) {
            currentSpecial.classList.remove('special');
          }
          btnEl.classList.add('special');
        });
      });
    };

    handleButtonClick(); // Call the function on component mount

    return () => {
      // Cleanup - remove event listeners when component unmounts
      const btnElList = document.querySelectorAll('.btn');
      btnElList.forEach((btnEl) => {
        btnEl.removeEventListener('click', () => {});
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="navbar bg-base-100" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
      {/* Home */}
      <Link href="/">
        <button className="btn btn-secondary add">Home</button>
      </Link>

      {/* Approach */}
      <Link href="/approach">
        <button className="btn btn-secondary add">Approach</button>
      </Link>

      {/* Submit Inquiries */}
      <Link href="/inquiries">
        <button className="btn btn-secondary add">Submit Inquiries</button>
      </Link>

      {/* Centered Image */}
      <Link href="/">
      <div>
        <Image src={logoImg} alt="Logo" width={250} height={250} />
      </div>
      </Link>

      {/* Contact Me */}
      <Link href="/contact">
        <button className="btn btn-secondary add">Contact Me</button>
      </Link>

      {/* Services */}
      <Link href="/services">
        <button className="btn btn-secondary add">Services</button>
      </Link>
    </div>
  );
};

export default Navbar;