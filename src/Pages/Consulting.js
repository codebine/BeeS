/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import "../css/consulting.css";
import Testimonials1 from "../img/testimonials/testimonials-1.jpg";
import Testimonials2 from "../img/testimonials/testimonials-2.jpg";
import Testimonials3 from "../img/testimonials/testimonials-3.jpg";
import Testimonials4 from "../img/testimonials/testimonials-4.jpg";
import about2 from "../img/about-2.webp";
import about5 from "../img/about-5.webp";
import avatar1 from "../img/avatar-1.webp";
import logo from '../img/cropped-BeeS_Logon.png';

const Consulting = () => {
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

  const noopPrevent = (e) => {
    if (e && e.preventDefault) e.preventDefault();
  };

  return (
    <div>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <NavLink
            to="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
            onClick={closeMobileNav}
          >
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
            />
          </nav>

          <NavLink className="btn-getstarted" to="/Contact" onClick={closeMobileNav}>
            Get Started
          </NavLink>
        </div>
      </header>

      <main className="main">
        <div className="consulting-page">
          <section className="hero-section text-center text-white d-flex align-items-center justify-content-center">
            <div className="container">
              <h1 className="display-4 mb-3">
                Strategic Consulting for a Dynamic Future
              </h1>
              <p className="lead mb-4">
                Partner with BeeS to navigate complexities, unlock growth, and
                achieve sustainable success.
              </p>
              <NavLink
                to="/Contact"
                className="btn btn-primary btn-lg custom-hero-btn"
                onClick={closeMobileNav}
              >
                Request a Consultation
              </NavLink>
            </div>
          </section>

          <section className="what-we-do section-padding bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                  <h2 className="section-title mb-4">
                    Empowering Your Business Through Insight and Innovation
                  </h2>
                  <p className="lead mb-4">
                    At BeeS, our consulting services are designed to help
                    organizations of all sizes overcome challenges, seize
                    opportunities, and drive meaningful transformation. We
                    combine deep industry knowledge with cutting-edge
                    technological expertise to deliver actionable strategies and
                    measurable results.
                  </p>
                  <p>
                    Whether you're looking to redefine your digital strategy,
                    optimize operations, or enhance organizational efficiency,
                    our expert consultants provide tailored solutions that
                    align with your unique business objectives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="our-expertise section-padding">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10 text-center">
                  <h2 className="section-title mb-3">
                    Our Core Consulting Service Areas
                  </h2>
                  <p className="section-subtitle">
                    Leverage our specialized knowledge across critical domains
                    to propel your business forward.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-activity" />
                    </div>
                    <div>
                      <h3>Healthcare IT</h3>
                      <p>
                        We bring domain expertise and technical know-how to
                        improve patient outcomes and operational performance.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-diagram-3" />
                    </div>
                    <div>
                      <h3>Finance & Banking</h3>
                      <p>
                        Advisory for secure, compliant, and customer-focused
                        digital transformation.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-easel" />
                    </div>
                    <div>
                      <h3>Retail & E-Commerce</h3>
                      <p>
                        Build omnichannel experiences that increase conversion
                        and customer loyalty.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-clipboard-data" />
                    </div>
                    <div>
                      <h3>Manufacturing & Logistics</h3>
                      <p>
                        Improve supply chain resilience and optimize
                        manufacturing operations with data-driven approaches.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-building" />
                    </div>
                    <div>
                      <h3>Government & Public Sector</h3>
                      <p>
                        Modernize public services with secure, scalable digital
                        solutions focused on outcomes.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="service-card d-flex">
                    <div className="icon flex-shrink-0">
                      <i className="bi bi-people" />
                    </div>
                    <div>
                      <h3>IT Staffing & Consulting</h3>
                      <p>
                        Access the right talent and advisory services to execute
                        your strategic initiatives.
                      </p>
                      <a href="#" onClick={noopPrevent} className="read-more">
                        Read More <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 align-items-center justify-content-between">
                <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="image-wrapper">
                    <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                      <img
                        src={about5}
                        alt="Business Meeting"
                        className="img-fluid main-image rounded-4"
                      />
                      <img
                        src={about2}
                        alt="Team Discussion"
                        className="img-fluid small-image rounded-4"
                      />
                    </div>
                    <div className="experience-badge floating">
                      <h3>
                        15+ <span>Years</span>
                      </h3>
                      <p>Of experience in business service</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="about-title"> Our Collaborative Approach to Your Success</h2>
                  <p className="about-description">
                    We believe that the best solutions emerge from deep
                    collaboration and a thorough understanding of your unique
                    context.
                  </p>

                  <div className="row feature-list-wrapper">
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check-circle-fill" /> Deep expertise
                          in advanced technologies
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill" /> Client-focused
                          development approach
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill" /> Rapid,
                          practical delivery
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check-circle-fill" /> Agile and
                          scalable solutions
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill" /> Strong
                          emphasis on quality and data security
                        </li>
                        <li>
                          <i className="bi bi-check-circle-fill" /> Continuous
                          innovation
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="info-wrapper mt-4">
                    <div className="row gy-4">
                      <div className="col-lg-5">
                        <div className="profile d-flex align-items-center gap-3">
                          <img src={avatar1} alt="CEO Profile" className="profile-image" />
                          <div>
                            <h4 className="profile-name">Mario Smith</h4>
                            <p className="profile-position">CEO &amp; Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="contact-info d-flex align-items-center gap-2">
                          <i className="bi bi-telephone-fill" />
                          <div>
                            <p className="contact-label">Call us anytime</p>
                            <p className="contact-number">+123 456-789</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="success-stories section-padding">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10 text-center">
                  <h2 className="section-title mb-3">Real Impact: Our Success Stories</h2>
                  <p className="section-subtitle">
                    See how our strategic insights have driven measurable results
                    for our clients.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="case-study-card h-100 shadow-sm rounded">
                    <div className="case-study-img-placeholder rounded-top" />
                    <div className="p-4">
                      <h4 className="case-study-title">
                        Streamlining Operations for a Global Manufacturer
                      </h4>
                      <p className="case-study-desc">
                        Helped a leading manufacturer reduce operational costs by
                        25% and improve supply chain efficiency through process
                        automation and data analytics.
                      </p>
                      <p className="case-study-result text-primary fw-bold">
                        Result: 25% Cost Reduction &amp; 15% Efficiency Gain
                      </p>
                      <NavLink to="/CaseStudies#case1" className="learn-more-link">
                        Read Full Case Study <i className="bi bi-arrow-right" />
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="case-study-card h-100 shadow-sm rounded">
                    <div className="case-study-img-placeholder rounded-top" />
                    <div className="p-4">
                      <h4 className="case-study-title">
                        Accelerating Digital Transformation for a Retail Giant
                      </h4>
                      <p className="case-study-desc">
                        Guided a major retail company through a comprehensive
                        digital transformation, leading to enhanced customer
                        engagement and new revenue streams.
                      </p>
                      <p className="case-study-result text-primary fw-bold">
                        Result: 40% Increase in Online Engagement
                      </p>
                      <NavLink to="/CaseStudies#case2" className="learn-more-link">
                        Read Full Case Study <i className="bi bi-arrow-right" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="client-testimonials section-padding bg-light">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10 text-center">
                  <h2 className="section-title mb-3">What Our Clients Say</h2>
                  <p className="section-subtitle">
                    Hear directly from the businesses we've helped achieve their
                    strategic objectives.
                  </p>
                </div>
              </div>

              <div className="container">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="testimonial-item">
                      <img src={Testimonials1} className="testimonial-img" alt="Testimonial 1" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                          Proin iaculis purus consequat sem cure digni ssim donec
                          porttitora entum suscipit rhoncus.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-item">
                      <img src={Testimonials2} className="testimonial-img" alt="Testimonial 2" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>
                          Export tempor illum tamen malis malis eram quae irure
                          esse labore quem cillum.
                        </span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-item">
                      <img src={Testimonials3} className="testimonial-img" alt="Testimonial 3" />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="testimonial-item">
                      <img src={Testimonials4} className="testimonial-img" alt="Testimonial 4" />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="final-cta py-5 text-white text-center">
            <div className="container">
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="lead mb-4">
                Our team of expert consultants is eager to understand your
                challenges and craft solutions for your success.
              </p>
              <NavLink to="/Contact" className="btn btn-light btn-lg" onClick={closeMobileNav}>
                Start Your Transformation Today
              </NavLink>
            </div>
          </section>

          <section className="call-to-action-2 section dark-background">
            <div className="container">
              <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-xl-10">
                  <div className="text-center">
                    <h3>Innovation Starts Here</h3>
                    <p>
                      Whether you're scaling up, launching a product, or securing your digital assets — we’ve got your back.
                    </p>
                    <button className="cta-btn" type="button" onClick={noopPrevent}>
                      Let’s Talk →
                    </button>
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
                    <p>
                      We're here to help you navigate your tech needs—whether you're looking for AI solutions,
                      cybersecurity, or custom development.
                    </p>

                    <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                      <div className="icon-box">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="content">
                        <h4>Our Location</h4>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                      </div>
                    </div>

                    <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                      <div className="icon-box">
                        <i className="bi bi-telephone" />
                      </div>
                      <div className="content">
                        <h4>Phone Number</h4>
                        <p>+1 5589 55488 55</p>
                        <p>+1 6678 254445 41</p>
                      </div>
                    </div>

                    <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                      <div className="icon-box">
                        <i className="bi bi-envelope" />
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
                    <p>
                      Tell us about your project, ask a question, or just say hello. We’re ready to respond and excited to work with you.
                    </p>

                    <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                        </div>

                        <div className="col-md-6 ">
                          <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="col-12">
                          <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        </div>

                        <div className="col-12">
                          <textarea className="form-control" name="message" rows="6" placeholder="Message" required />
                        </div>

                        <div className="col-12 text-center">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
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
        </div>
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

export default Consulting;
