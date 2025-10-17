/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import PureCounter from '@srexi/purecounterjs';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/main.css';

import Illustration1 from '../img/illustration-1.webp';
import Features1 from '../img/features-illustration-1.webp';
import Features2 from '../img/features-illustration-2.webp';
import Features3 from '../img/features-illustration-3.webp';
import about2 from '../img/about-2.webp';
import about5 from '../img/about-5.webp';
import logo from '../img/cropped-BeeS_Logon.png';

import client1 from "../img/clients/client-1.png";
import client2 from "../img/clients/client-2.png";
import client3 from "../img/clients/client-3.png";
import client4 from "../img/clients/client-4.png";
import client5 from "../img/clients/client-5.png";
import client6 from "../img/clients/client-6.png";
import client7 from "../img/clients/client-7.png";
import client8 from "../img/clients/client-8.png";

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    new PureCounter();
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

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
                <NavLink to="/" onClick={closeMobileNav}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={closeMobileNav}>About</NavLink>
              </li>
              <li>
                <NavLink to="/Services" onClick={closeMobileNav}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/Products" onClick={closeMobileNav}>Products</NavLink>
              </li>
              <li>
                <NavLink to="/Consulting" onClick={closeMobileNav}>Consulting</NavLink>
              </li>
              <li>
                <NavLink to="/Features" onClick={closeMobileNav}>Careers</NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={closeMobileNav}>Contact</NavLink>
              </li>
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
                  <div className="company-badge mb-4">
                    <i className="bi bi-gear-fill me-2"></i>
                    Working for your success
                  </div>
                  <h1 className="mb-4">Powerful Digital <br />Solutions With  <br /><span className="accent-text">BeeS</span></h1>
                  <p className="mb-4 mb-md-5">We are team of talented digital marketers</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
                  <img src={Illustration1} alt="Hero Illustration" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon"><i className="bi bi-trophy"></i></div>
                  <div className="stat-content">
                    <h4>3x Won Awards</h4>
                    <p className="mb-0">Vestibulum ante ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon"><i className="bi bi-briefcase"></i></div>
                  <div className="stat-content">
                    <h4>6.5k Faucibus</h4>
                    <p className="mb-0">Nullam quis ante</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon"><i className="bi bi-graph-up"></i></div>
                  <div className="stat-content">
                    <h4>80k Mauris</h4>
                    <p className="mb-0">Etiam sit amet orci</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon"><i className="bi bi-award"></i></div>
                  <div className="stat-content">
                    <h4>6x Phasellus</h4>
                    <p className="mb-0">Vestibulum ante ipsum</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center justify-content-between">
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                <span className="about-meta">MORE ABOUT US</span>
                <h2 className="about-title">Innovating with Purpose, Delivering with Precision</h2>
                <p className="about-description">At BeeS, we believe technology should be both powerful and purposeful. With a strong foundation in AI, Machine Learning, Cybersecurity, and Software Development, we are committed to transforming ideas into impactful digital solutions. Our mission is to help businesses thrive in a fast-paced digital world through intelligent systems and secure frameworks.</p>

                <div className="row feature-list-wrapper">
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> Deep expertise in advanced technologies</li>
                      <li><i className="bi bi-check-circle-fill"></i> Client-focused development approach</li>
                      <li><i className="bi bi-check-circle-fill"></i> Sed do eiusmod tempor</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> Agile and scalable solutions tailored to your needs</li>
                      <li><i className="bi bi-check-circle-fill"></i> Strong emphasis on quality and data security</li>
                      <li><i className="bi bi-check-circle-fill"></i> A dedicated team committed to continuous innovation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                <div className="image-wrapper">
                  <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                    <img src={about5} alt="Business Meeting" className="img-fluid main-image rounded-4" />
                    <img src={about2} alt="Team Discussion" className="img-fluid small-image rounded-4" />
                  </div>
                  <div className="experience-badge floating">
                    <h3>15+ <span>Years</span></h3>
                    <p>Of experience in business service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Delivering Innovative IT Solutions with Excellence</p>
          </div>

          <div className="container">
            <div className="d-flex justify-content-center">
              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                    <h4>Our Services</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                    <h4>Technical Expertise</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                    <h4>Our Clients</h4>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Custom IT Solutions for Business Excellence</h3>
                    <p className="fst-italic">Based on the BeeS website, here are three key sections highlighting their offerings:</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> End-to-end software development lifecycle management: From initial concept to deployment and ongoing support.</li>
                      <li><i className="bi bi-check2-all"></i> Agile methodology for flexible and timely delivery: Ensuring adaptability to evolving project needs.</li>
                      <li><i className="bi bi-check2-all"></i> Seamless integration with existing systems: For efficient and cohesive business operations.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features1} alt="Features Illustration 1" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>A Foundation of Advanced Technologies</h3>
                    <p className="fst-italic">BeeS leverages a wide range of modern technologies and platforms to develop robust and scalable solutions. Their programming expertise includes:</p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Microsoft .NET Technologies: Asp.Net, Asp.Net MVC, Ado.Net, Ado.Net Entity Framework, C#, VB.Net, WPF, and Windows application development.</li>
                      <li><i className="bi bi-check2-all"></i> Mobile & Web Technologies: iOS, Android, JAVA, PHP, HTML, XML, Javascript, and jQuery.</li>
                      <li><i className="bi bi-check2-all"></i> Databases & CMS: Microsoft SQL Server, Oracle, MySQL, WordPress, Prestashop, WooCommerce, and Magento.</li>
                      <li><i className="bi bi-check2-all"></i> Design Tools: Adobe Photoshop and Adobe Illustrator.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features2} alt="Features Illustration 2" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="features-tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Client-Centric Approach and Quality Assurance</h3>
                    <p className="fst-italic">BeeS is committed to client satisfaction and quality excellence. They emphasize a client-centered and quality-conscious approach to software development, ensuring that their solutions meet current needs and help clients stay competitive.</p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={Features3} alt="Features Illustration 3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="features-cards" className="features-cards section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="feature-box orange">
                  <i className="bi bi-award"></i>
                  <h4>Trusted Expertise</h4>
                  <p>We deliver reliable, high-quality solutions backed by years of experience and a proven track record across industries.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="feature-box blue">
                  <i className="bi bi-patch-check"></i>
                  <h4>Tailored Solutions</h4>
                  <p>Our team designs custom-fit digital solutions that align precisely with your business needs and long-term goals.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="feature-box green">
                  <i className="bi bi-sunrise"></i>
                  <h4>Innovation-Driven</h4>
                  <p>We stay ahead with cutting-edge technologies like AI, ML, and Data Science to foster growth and smarter operations.</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="feature-box red">
                  <i className="bi bi-shield-check"></i>
                  <h4>Security First</h4>
                  <p>With cybersecurity at our core, we build systems that are secure, compliant, and resilient against evolving threats.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="call-to-action section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row content justify-content-center align-items-center position-relative">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-4 mb-4">Ready to Transform Your Digital Vision?</h2>
                <p className="mb-4">Let’s build innovative, secure, and scalable solutions together. Whether you're starting from scratch or upgrading an existing system—we’re here to help you succeed.</p>
                <a href="#" className="btn btn-cta">Get Started Today</a>
              </div>

              <div className="shape shape-1">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)"></path>
                </svg>
              </div>

              <div className="shape shape-2">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z" transform="translate(100 100)"></path>
                </svg>
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
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client1} className="img-fluid" alt="Client 1" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client2} className="img-fluid" alt="Client 2" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client3} className="img-fluid" alt="Client 3" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client4} className="img-fluid" alt="Client 4" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client5} className="img-fluid" alt="Client 5" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client6} className="img-fluid" alt="Client 6" />
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row gy-4">
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client7} className="img-fluid" alt="Client 7" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client8} className="img-fluid" alt="Client 8" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client1} className="img-fluid" alt="Client 1 duplicate" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client2} className="img-fluid" alt="Client 2 duplicate" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                      <img src={client3} className="img-fluid" alt="Client 3 duplicate" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>We offer cutting-edge technology solutions designed to empower your business and future-proof your digital journey</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-activity"></i></div>
                  <div>
                    <h3>AI / ML</h3>
                    <p>We bring over a decade of experience in AI/ML, blending strategic innovation with deep technical expertise to build intelligent, ethical, and scalable solutions tailored for real-world impact.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-diagram-3"></i></div>
                  <div>
                    <h3>Cyber Security</h3>
                    <p>From web application security to Identity and Access Management (IAM), we protect what matters most through proactive, advanced, and ethical cybersecurity practices.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-easel"></i></div>
                  <div>
                    <h3>Application Development</h3>
                    <p>Harnessing technologies like Java, .NET, Python, Golang, and PHP, we create robust, scalable applications that power innovation and operational efficiency.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-clipboard-data"></i></div>
                  <div>
                    <h3>Mobile App Development</h3>
                    <p>We build native and cross-platform mobile apps using Flutter and React Native, offering seamless user experiences and performance across devices.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-clipboard-data"></i></div>
                  <div>
                    <h3>IT Staffing and Consulting</h3>
                    <p>Our strategic IT staffing and consulting services help you access the right talent and expert guidance to accelerate your digital initiatives and navigate IT complexity.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0"><i className="bi bi-clipboard-data"></i></div>
                  <div>
                    <h3>IT Trainings</h3>
                    <p>Stay ahead with hands-on training in:</p>
                    <p>AI/ML & Data Science</p>
                    <p>Cybersecurity & IAM</p>
                    <p>Fullstack Development (Java, .NET, Python, Node.js)</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="faq-9 faq section light-background" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" data-aos="fade-up">
                <h2 className="faq-title">Have a question? Check out the FAQ</h2>
                <p className="faq-description">Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
              </div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="300">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.</div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Feugiat scelerisque varius morbi enim nunc faucibus?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.</div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Dolor sit amet consectetur adipiscing elit pellentesque?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.</div>
                    </div>
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
                    <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                    <div className="content">
                      <h4>Our Location</h4>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box"><i className="bi bi-telephone"></i></div>
                    <div className="content">
                      <h4>Phone Number</h4>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box"><i className="bi bi-envelope"></i></div>
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
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                      </div>

                      <div className="col-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                      </div>

                      <div className="col-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
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

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  );
};

export default Home;
