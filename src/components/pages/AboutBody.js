import React from 'react'
import about from '../../assets/images/aboutUs.png';
export default function AboutBody() {
  return (
    <>
      <section className="about-section" id="about">
            <div className="section-content">
                <div className="about-image-wrapper">
                    <img src={about} alt="About" className="about-image"/>
                </div>
                <div className="about-details">
                    <h2 className="section-title">About Us</h2>
                    <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam vel ad facilis
                        porro assumenda hic cum itaque animi tempore et, deserunt fugit in repudiandae maxime possimus
                        quibusdam fuga optio impedit.</p>
                    <div className="social-link-list">
                        <a href="www.facebook.com" className="social-link">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="www.intagram.com" className="social-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="www.linkedin.com" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
