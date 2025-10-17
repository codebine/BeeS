/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import "../css/services.css";

import img1 from "../img/illustration1.svg";
import img2 from "../img/illustration2.svg";
import img3 from "../img/illustration3.svg";
import Course1 from "../img/course-01.jpg";
import Course2 from "../img/course-02.jpg";
import Course3 from "../img/course-03.jpg";
import Course4 from "../img/course-04.jpg";
import Course5 from "../img/course-05.jpg";
import Course6 from "../img/course-06.jpg";
import Features1 from "../img/features-illustration-1.webp";
import Features2 from "../img/features-illustration-2.webp";
import Features3 from "../img/features-illustration-3.webp";
import Testimonials1 from "../img/testimonials/testimonials-1.jpg";
import Testimonials2 from "../img/testimonials/testimonials-2.jpg";
import Testimonials3 from "../img/testimonials/testimonials-3.jpg";
import Testimonials4 from "../img/testimonials/testimonials-4.jpg";
import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.png";
import client7 from "../img/clients/client-7.png";
import client8 from "../img/clients/client-8.png";
import logo from '../img/cropped-BeeS_Logon.png';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
    return () => {
      document.body.classList.remove("mobile-nav-active");
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen((v) => !v);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  const handleFilterClick = (e, filter) => {
    e.preventDefault();
    setActiveFilter(filter);
  };

  const isCourseVisible = (courseClassString) => {
    if (activeFilter === "*") return true;
    const filterClass = activeFilter.startsWith(".") ? activeFilter.slice(1) : activeFilter;
    const classes = courseClassString.split(/\s+/).filter(Boolean);
    return classes.includes(filterClass);
  };

  return (
    <div>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0" onClick={closeMobileNav}>
            <img src={logo}></img>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><NavLink to="/" onClick={closeMobileNav}>Home</NavLink></li>
              <li><NavLink to="/About" onClick={closeMobileNav}>About</NavLink></li>
              <li><NavLink to="/Services" onClick={closeMobileNav}>Services</NavLink></li>
              <li><NavLink to="/Products" onClick={closeMobileNav}>Products</NavLink></li>
              <li><NavLink to="/Consulting" onClick={closeMobileNav}>Consulting</NavLink></li>
              <li><NavLink to="/Features" onClick={closeMobileNav}>Careers</NavLink></li>
              <li><NavLink to="/Contact" onClick={closeMobileNav}>Contact</NavLink></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileNav}></i>
          </nav>

          <a className="btn-getstarted" href="#about">Get Started</a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="mb-4">We Solve<br /><span className="accent-text">Business Problems</span></h1>
                  <p className="mb-4 mb-md-5">Services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section optech-section-padding5 section-md">
          <div className="container">
            <div className="optech-section-title center">
              <h2>Our working process on how to grow your business</h2>
            </div>
            <div className="row z-index">
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="500">
                <div className="optech-numberbox-wrap">
                  <div className="optech-numberbox-icon">
                    <img alt="Initiation and Planning Icon" width="228" height="220" decoding="async" src={img1} />
                  </div>
                  <div className="optech-numberbox-data">
                    <span>01</span>
                    <h4>Initiation &amp; Planning</h4>
                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
                <div className="optech-numberbox-wrap">
                  <div className="optech-numberbox-icon">
                    <img alt="Execution and Development Icon" width="228" height="220" decoding="async" src={img2} />
                  </div>
                  <div className="optech-numberbox-data">
                    <span>02</span>
                    <h4>Execution &amp; Development</h4>
                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="900">
                <div className="optech-numberbox-wrap">
                  <div className="optech-numberbox-icon">
                    <img alt="Testing and Maintenance Icon" width="228" height="220" decoding="async" src={img3} />
                  </div>
                  <div className="optech-numberbox-data">
                    <span>03</span>
                    <h4>Testing &amp; Maintenance</h4>
                    <p>We are architects and innovation trailblazers of technological advancement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section courses" id="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-heading">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>

            <ul className="event_filter">
              <li>
                <a
                  href="#!"
                  className={activeFilter === "*" ? "is_active" : ""}
                  onClick={(e) => handleFilterClick(e, "*")}
                  data-filter="*"
                >
                  Show All
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className={activeFilter === ".design" ? "is_active" : ""}
                  onClick={(e) => handleFilterClick(e, ".design")}
                  data-filter=".design"
                >
                  Webdesign
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className={activeFilter === ".development" ? "is_active" : ""}
                  onClick={(e) => handleFilterClick(e, ".development")}
                  data-filter=".development"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className={activeFilter === ".wordpress" ? "is_active" : ""}
                  onClick={(e) => handleFilterClick(e, ".wordpress")}
                  data-filter=".wordpress"
                >
                  Wordpress
                </a>
              </li>
            </ul>

            <div className="row event_box">
              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer design ${isCourseVisible("design") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course1} alt="Learn Web Design" /></a>
                    <span className="category">Webdesign</span>
                    <span className="price"><h6><em>$</em>160</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">Stella Blair</span>
                    <h4>Learn Web Design</h4>
                  </div>
                </div>
              </div>

              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer development ${isCourseVisible("development") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course2} alt="Web Development Tips" /></a>
                    <span className="category">Development</span>
                    <span className="price"><h6><em>$</em>340</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">Cindy Walker</span>
                    <h4>Web Development Tips</h4>
                  </div>
                </div>
              </div>

              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer design wordpress ${isCourseVisible("design wordpress") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course3} alt="Latest Web Trends" /></a>
                    <span className="category">Wordpress</span>
                    <span className="price"><h6><em>$</em>640</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">David Hutson</span>
                    <h4>Latest Web Trends</h4>
                  </div>
                </div>
              </div>

              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer development ${isCourseVisible("development") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course4} alt="Online Learning Steps" /></a>
                    <span className="category">Development</span>
                    <span className="price"><h6><em>$</em>450</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">Stella Blair</span>
                    <h4>Online Learning Steps</h4>
                  </div>
                </div>
              </div>

              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer wordpress development ${isCourseVisible("wordpress development") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course5} alt="Be a WordPress Master" /></a>
                    <span className="category">Wordpress</span>
                    <span className="price"><h6><em>$</em>320</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">Sophia Rose</span>
                    <h4>Be a WordPress Master</h4>
                  </div>
                </div>
              </div>

              <div className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer wordpress design ${isCourseVisible("wordpress design") ? "" : "d-none"}`}>
                <div className="events_item">
                  <div className="thumb">
                    <a href="#!"><img src={Course6} alt="Full Stack Developer" /></a>
                    <span className="category">Webdesign</span>
                    <span className="price"><h6><em>$</em>240</h6></span>
                  </div>
                  <div className="down-content">
                    <span className="author">David Hutson</span>
                    <h4>Full Stack Developer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features section section-md">
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="d-flex justify-content-center">
              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                    <h4>Modisit</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                    <h4>Praesenti</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                    <h4>Explica</h4>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Voluptatem dignissimos provident</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features1} alt="Feature 1" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Neque exercitationem debitis</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features2} alt="Feature 2" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Voluptatibus commodi accusamu</h3>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                    </ul>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features3} alt="Feature 3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div id="clientCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row gy-4">
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client1} className="img-fluid" alt="Client 1" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client2} className="img-fluid" alt="Client 2" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client3} className="img-fluid" alt="Client 3" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client4} className="img-fluid" alt="Client 4" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client5} className="img-fluid" alt="Client 5" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client6} className="img-fluid" alt="Client 6" /></div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row gy-4">
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client7} className="img-fluid" alt="Client 7" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client8} className="img-fluid" alt="Client 8" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client1} className="img-fluid" alt="Client 1 duplicate" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client2} className="img-fluid" alt="Client 2 duplicate" /></div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo"><img src={client3} className="img-fluid" alt="Client 3 duplicate" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonial-item">
                  <img src={Testimonials1} className="testimonial-img" alt="Saul Goodman" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonial-item">
                  <img src={Testimonials2} className="testimonial-img" alt="Sara Wilsson" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="testimonial-item">
                  <img src={Testimonials3} className="testimonial-img" alt="Jena Karlis" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="testimonial-item">
                  <img src={Testimonials4} className="testimonial-img" alt="Matt Brandon" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">BeeS</span>
              </a>
              <div className="footer-contact pt-3">
                <p>H.No:5-45/A/1, Gangasthan, (V)Dulapally,</p>
                <p>(M)Qutbullapur, Hyderabad-500014, Telangana</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91-7093800994</span></p>
                <p><strong>Email:</strong> <span> admin@beessoftware.in</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">BeeS</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
