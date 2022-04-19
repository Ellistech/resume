export default function Header() {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" class="navbar nav-menu">
        <ul>
          <li>
            <a href="#hero" class="nav-link scrollto active">
              <i class="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link scrollto">
              <i class="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#Testimonial" class="nav-link scrollto">
              <i class="bx bx-file-blank"></i> <span>Testimonials</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" class="nav-link scrollto">
              <i class="bx bx-book-content"></i> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services" class="nav-link scrollto">
              <i class="bx bx-server"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link scrollto">
              <i class="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </header>
    //   {/* <!-- End Header --> */}
  );
}
