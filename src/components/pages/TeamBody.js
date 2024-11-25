import React,{useState} from 'react'
import person from '../../assets/images/team.jpg';
export default function TeamBody() {
    const [team] = useState([
        {
            id: 1,
            name: "Ahmed bouchakour ",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        {
            id: 2,
            name: "Issam okbani",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        {
            id: 3,
            name: "Hichem okbani",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        {
            id: 4,
            name: "Ali mahedjoub",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        {
            id: 5,
            name: "Sarah elmadani",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        {
            id: 6,
            name: "Aissani Meriem",
            presentation : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae"
        },
        
    ])

  return (
    <>
      <section className="team-section" id="ourteam">
        <h2 className="section-title">Our Team</h2>
        <div className="section-content">
            <div className="slider-container swiper">
                <div className="slider-wrapper">
                    <ul className="oneteam-list swiper-wrapper">
                        {team.map(team=>(
                            <li className="oneteam swiper-slide" key={team.id}>
                            <img src={person} alt="Our Team" className="oneteam-image"/>
                            <h3 className="name">{team.name}</h3>
                            <i className="presentation">{team.presentation}</i>
                        </li>

                        ))}

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
