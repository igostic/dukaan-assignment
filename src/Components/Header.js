import React from "react";
import dukaanLogo from "../white.svg";

const Header = () => {
  return (
    <div className="content-section">
      <header className="header">
        <div className="container">
          <div className="header-container-wrap">
            <div className="header-menu-wraper">
              <a className="logo-link" href="/">
                <img src={dukaanLogo} alt="dukaan" />
              </a>
              <div className="main-menu-wraper">
                <div className="menu-inner">
                  <div className="header-actions">
                    <a href="/" className="sign-in-link anchor-1">
                      Sign in
                    </a>
                    <a
                      href="/"
                      className="download-app-btn d-inline-flex btn-0 btn-primary"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="blue-box"></div>
    </div>
  );
};

export default Header;
