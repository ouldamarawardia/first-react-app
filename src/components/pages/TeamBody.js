import React from 'react'

export default function TeamBody() {
  return (
    <>
      <section className="team-section" id="ourteam">
        <h2 className="section-title">Our Team</h2>
        <div className="section-content">
            <div className="slider-container swiper">
                <div className="slider-wrapper">
                    <ul className="oneteam-list swiper-wrapper">
                        <li className="oneteam swiper-slide">
                            <img src="images/team1.jpg" alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">Ahmed bouchakour</h3>
                            <i className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae</i>
                        </li>
                        <li className="oneteam swiper-slide">
                            <img src="images/team2.jpg" alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">Issam okbani</h3>
                            <i className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae</i>
                        </li>
                        <li className="oneteam swiper-slide">
                            <img src="images/team3.jpg" alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">Hichem okbani</h3>
                            <i className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae</i>
                        </li>
                        <li className="oneteam swiper-slide">
                            <img src="images/team4.jpg" alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">Ali mahedjoub</h3>
                            <i className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae</i>
                        </li>
                        <li className="oneteam swiper-slide">
                            <img src="images/team5.jpg" alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">Sarah elmadani</h3>
                            <i className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae </i>
                        </li>
                    </ul>

                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-slide-button swiper-pagination"></div>

                    {/* <!-- If we need navigation buttons --> */}
                    <div className="swiper-slide-button swiper-button-prev"></div>
                    <div className="swiper-slide-button swiper-button-next"></div>

                    
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}
