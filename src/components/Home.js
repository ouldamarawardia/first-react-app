
import React from 'react'
import { Link } from 'react-router-dom';
import mainImage from '../assets/images/main.png';

function Home() {
  return (
    <section className="hero-section">
            <div className="section-content">
                <div className="hero-details">
                    <h1 className="title">Best Coding</h1>
                    <h2 className="subtitile">make ur busness be visible by create ur website </h2>
                    <p className="description">welcome to pinku coding Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Alias sequi aut recusandae, eos laboriosam amet corrupti illum et accusamus itaque,
                        consequuntur quidem accusantium quos minus autem veritatis aliquid rerum nesciunt.</p>
                    <div className="buttons">
                    <Link className="button order-now" to="/services" >Our services</Link>
                    <Link className="button contact-us" to="/contact" >Contact Us</Link>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={mainImage} className='hero-image' alt="hero"/>
                </div>
            </div>
        </section>
  )
}

export default Home
