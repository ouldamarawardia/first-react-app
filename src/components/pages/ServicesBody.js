import React, { useState } from 'react'
import item from '../../assets/images/item.png';
export default function ServicesBody() {

    const [services] = useState([
        {
            id: 1,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
        {
            id: 2,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
        {
            id: 3,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
        {
            id: 4,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
        {
            id: 5,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
        {
            id: 6,
            name: "item ",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. aborum vel officia eligendi?"
        },
    ]);

  return (
     <section className="services-section" id="services">
            <h2 className="section-title">Our Services</h2>
            <div className="section-content">
                <ul className="services-list">
                    {services.map(services=>(
                        <li className="services-item" key={services.id}>
                        <img src={item} alt="Services Item" className="services-image"/>
                        <h3 className="name">{services.name +services.id}</h3>/
                        <p className="text">{services.text}</p>
                    </li>
                    ))}
                    
                </ul>
            </div>

        </section> 
    
  )
}
