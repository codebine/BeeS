/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css';
import '../css/about.css';

import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';

import companyimage from "../img/company/company-image.jpg";
import companyimage2 from "../img/company/company-image-2.jpg";
import companyimage3 from "../img/company/company-image-3.jpg";
import gallery1 from "../img/company/gallery-1.jpg";
import gallery2 from "../img/company/gallery-2.jpg";
import gallery3 from "../img/company/gallery-3.jpg";
import gallery4 from "../img/company/gallery-4.jpg";
import gallery5 from "../img/company/gallery-5.jpg";
import gallery6 from "../img/company/gallery-1.jpg";
import gallery7 from "../img/company/gallery-2.jpg";
import gallery8 from "../img/company/gallery-3.jpg";
import gallery9 from "../img/company/gallery-4.jpg";
import gallery10 from "../img/company/gallery-5.jpg";
import gallery11 from "../img/company/gallery-1.jpg";
import gallery12 from "../img/company/gallery-2.jpg";

import member1 from "../img/team/member-1.jpg";
import member2 from "../img/team/member-2.jpg";
import member3 from "../img/team/member-3.jpg";
import logo from '../img/cropped-BeeS_Logon.png';

const chunkArray = (arr, chunkSize) => {
  const R = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    R.push(arr.slice(i, i + chunkSize));
  }
  return R;
};

const About = () => {
  const allGalleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ];

  const slides = chunkArray(allGalleryImages, 4);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }

    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isMobileNavOpen]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={logo}></img>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/" onClick={closeMobileNav}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={closeMobileNav}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" onClick={closeMobileNav}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Products" onClick={closeMobileNav}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/Consulting" onClick={closeMobileNav}>
                  Consulting
                </NavLink>
              </li>
              <li>
                <NavLink to="/Features" onClick={closeMobileNav}>
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={closeMobileNav}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileNav}
            ></i>
          </nav>

          <a className="btn-getstarted" href="#about">
            Get Started
          </a>
        </div>
      </header>

      <main className='main'>
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content mt-5" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="mb-4">We Love<br /><span className="accent-text">What We Do</span></h1>
                  <p className="mb-4 mb-md-5">
                    About Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-shot-info section-sm">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-20">
                <h2 className="mb-3">Who We Are ??</h2>
                <p>BeeS is a forward-thinking IT company committed to delivering high-quality, secure, and scalable digital solutions. </p>
                <p>Our expertise spans a wide spectrum of technologies, including Artificial Intelligence, Machine Learning, Cybersecurity, and Custom Application Development.</p>
                <p>We combine technical excellence with strategic insight to help businesses unlock new opportunities and drive innovation.</p>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <img loading="lazy" className="img-fluid" src={companyimage} alt="Company Image" />
              </div>
            </div>
          </div>
        </section>

        <section className="company-mission section-sm bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Our Mission</h3>
                <p>To empower businesses and individuals through innovative IT solutions and transformative training programs, enabling them to thrive in an ever-evolving digital world.</p>
                <img loading="lazy" src={companyimage2} alt="Company Image 2" className="img-fluid mt-30" />
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <h3>Our Vision</h3>
                <p>To be a global leader in IT services, renowned for our commitment to quality, innovation, and customer satisfaction—fueling digital transformation and building a smarter, secure future.</p>
                <img loading="lazy" src={companyimage3} alt="Company Image 3" className="img-fluid mt-30" />
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action-2 section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="title text-center">
                  <h2>Sneak Peak Gallery</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae recusandae qui
                    aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex? Porro, praesentium consectetur
                    tempore. Nulla, error eius dolorem.</p>
                  <div className="border"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Carousel
                  className="company-gallery-carousel"
                  interval={3000}
                >
                  {slides.map((slideGroup, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                      <Row className="justify-content-center align-items-center g-0">
                        {slideGroup.map((image, imageIndex) => (
                          <Col key={imageIndex} xs={12} sm={6} md={3} className="p-1">
                            <img
                              className="d-block w-100 img-fluid"
                              src={image}
                              alt={`Gallery slide ${slideIndex * 4 + imageIndex + 1}`}
                              loading="lazy"
                              style={{ height: '200px', objectFit: 'cover' }}
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Image+Error'; }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="team" id="team">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="title text-center ">
                  <h2>Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
                    similique quos.</p>
                  <div className="border"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member1} alt="Team Member 1" />
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="member-content">
                    <h3>Michael Jonson</h3>
                    <span>Head Of Marketing</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member2} alt="Team Member 2" />
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="member-content">
                    <h3>Carrick Mollenkamp</h3>
                    <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member text-center">
                  <div className="member-photo">
                    <img loading="lazy" className="img-fluid" src={member3} alt="Team Member 3" />
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
                        <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="member-content">
                    <h3>David Gauthier</h3>
                    <span>Head Of Management</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action-2" className="call-to-action-2 section dark-background">
          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Innovation Starts Here</h3>
                  <p>Whether you're scaling up, launching a product, or securing your digital assets — we’ve got your back. Partner with us to unlock next-gen solutions.</p>
                  <a className="cta-btn" href="#">Let’s Talk →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row g-4 g-lg-5">
              <div className="col-lg-5">
                <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                  <h3>Contact Info</h3>
                  <p>We're here to help you navigate your tech needs—whether you're looking for AI solutions, cybersecurity, or custom development.</p>

                  <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="content">
                      <h4>Our Location</h4>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="content">
                      <h4>Phone Number</h4>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="content">
                      <h4>Email Address</h4>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
                  <h3>Get In Touch</h3>
                  <p>Tell us about your project, ask a question, or just say hello. We’re ready to respond and excited to work with you.</p>

                  <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                    <div className="row gy-4">

                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                      </div>

                      <div className="col-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                      </div>

                      <div className="col-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                      </div>

                      <div className="col-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit" className="btn">Send Message</button>
                      </div>

                    </div>
                  </form>

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
}

export default About;
