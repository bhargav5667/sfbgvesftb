import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer pt-4">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">About Us</h5>
            <p className="footer-text small">
              Your company description goes here. Provide brief information about your business.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">home</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">about</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Contact</h5>
            <ul className="list-unstyled footer-text small">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Street, City, Country
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                +1 234 567 890
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@example.com
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Newsletter</h5>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input type="email" className="form-control form-control-sm" placeholder="Enter email" />
                <button className="btn btn-primary btn-sm" type="button">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </form>
            <div className="scroll-top text-end">
              <button className="btn-scroll-top">
                <i className="bi bi-arrow-up-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright text-center py-3 mt-4 border-top">
          <small className="footer-text">
            © 2023 Your Brand. All rights reserved. <p>privacy | Terms</p>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
