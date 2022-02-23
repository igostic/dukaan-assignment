import React from "react";
import dukaanLogo from "../white.svg";
import FlagIcon from "../icons/Flag.svg";

const Footer = () => {
  return (
    <footer className="footer black-footer">
      <section className="container">
        <div className="footer-links-logo-wrap">
          <div className="footer-logo-wrap">
            <a className="logo-link" href="/">
              <img src={dukaanLogo} alt="dukaan" />
            </a>
          </div>
          <div className="footer-links-wrap">
            <ul>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">FAQ's</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Tutorials</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Privacy</a>
              </li>

              <li>
                <a href="/">Banned items</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.facebook.com/mydukaanapp/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/mydukaanapp">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/dukaan/">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="company-rights-section">
          <div>Dukaan 2020, All rights reserved.</div>
          <div className="made-in-section">
            <span>Made in </span>
            <img src={FlagIcon} alt="india" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
