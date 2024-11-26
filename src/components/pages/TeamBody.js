import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import person from '../../assets/images/team.jpg'; // Update with the correct path

export default function TeamBody() {
  const [team] = useState([
    { id: 1, name: "Ahmed Bouchakour", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
    { id: 2, name: "Issam Okbani", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
    { id: 3, name: "Hichem Okbani", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
    { id: 4, name: "Ali Mahedjoub", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
    { id: 5, name: "Sarah Elmadani", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
    { id: 6, name: "Aissani Meriem", presentation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae" },
  ]);
  
  const [ActiveSlide,setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);  // Update the active slide index
  };

  return (
    <section className="team-section" id="ourteam">
      <h2 className="section-title">Our Team</h2>
      <div className="section-content">
        <Swiper
          
          modules={[Navigation, Pagination]}
          loop={true}
          spaceBetween={30}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          onSlideChange={handleSlideChange}
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1, // Passer à 1 slide visible quand la largeur est <= 640px
            },
            900: {
                slidesPerView: 2, // Passer à 1 slide visible quand la largeur est <= 640px
              },
            1024:{   
                slidesPerView: 3, // Passer à 1 slide visible quand la largeur est <= 640px
              },
          }}
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={person} alt={member.name} className="team-image" />
                    <h3 className="name">{member.name}</h3>
                  </div>
                  <div className="card-back">
                    <p className="presentation">{member.presentation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
