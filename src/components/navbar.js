import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Add your navigation links here */}
      <Link href="/">
        <span className="nav-link">Home</span>
      </Link>
      <Link href="/about">
        <span className="nav-link">About Me</span>
      </Link>
      <Link href="/approach">
        <span className="nav-link">Approach</span>
      </Link>
      <Link href="/inquiries">
        <span className="nav-link">Submit Inquiries</span>
      </Link>
      <Link href="/contact">
      <span className="nav-link">Contact Me</span>
      </Link>
      <Link href="/services">
      <span className="nav-link">Services</span>
      </Link>

      {/* ... add other links ... */}
    </nav>
  );
};


export default Navbar;