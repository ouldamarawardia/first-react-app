import React from 'react'
import {FaInstagram ,FaLinkedin,FaFacebook } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer-section">
            <div className="section-content">
                <p className="copyright-text">@ 2024 Pinku coding</p>
                <div className="social-link-list">
                    <a href="www.facebook.com" className="social-link">
                        <i><FaFacebook /></i>
                    </a>
                    <a href="www.instagram.com" className="social-link">
                        <i><FaInstagram /></i>
                    </a>
                    <a href="www.linkedin.com" className="social-link">
                        <i><FaLinkedin /></i>
                    </a>  
                </div>

                <p className="policy-text">
                    <a href="/" className="policy-link" >Privacy policy</a>
                    <span className="separator">Refund policy</span>
                </p>
            </div>
         </footer>
  )
}

export default Footer
