import Link from 'next/link';
import logoImg from '../images/logo.png';
import Image from "next/image";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      {/* Your existing content */}
      {/* Add your navigation links here */}

      {/* Home */}
      <Link href="/">
        <button class="btn btn-primary add">Home</button>
      </Link>

      {/* Approach */}
      <Link href="/approach">
        <button class="btn btn-primary add">Approach</button>
      </Link>

      {/* Submit Inquiries */}
      <Link href="/inquiries">
        <button class="btn btn-primary add">Submit Inquiries</button>
      </Link>
      
      <a style={{ textAlign: 'center' }}>
        <Image src={logoImg} width={250} height={250} />
      </a>
            

      {/* Contact Me */}
      <Link href="/contact">
        <button class="btn btn-primary add">Contact Me</button>
      </Link>

      {/* Services */}
      <Link href="/services">
        <button class="btn btn-primary add">Services</button>
      </Link>

      {/* ... add other links ... */}
    </div>
  );
};

export default Navbar;