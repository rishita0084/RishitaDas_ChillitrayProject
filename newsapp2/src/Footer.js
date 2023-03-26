import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-outline-secondary explore-btn">Explore</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
