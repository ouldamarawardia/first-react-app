import React from 'react'

export default function ContactBody() {
  return (
    <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Us</h2>
            <div className="section-content">
                <ul className="contact-info-list">
                    <li className="contact-info">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <p>12 rue des jardins, Paris, France </p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-envelope "></i>
                        <p>www.name@gmail.com </p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-phone"></i>
                        <p>(+213)0 777 77 77 77 </p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-clock "></i>
                        <p>Saturday - Thursday: 9:00 AM - 5:00 PM </p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-regular fa-clock "></i>
                        <p>Friday : Closed </p>
                    </li>
                    <li className="contact-info">
                        <i className="fa-solid fa-globe "></i>
                        <p>contact@name.com </p>
                    </li>
                </ul>

                <form action="#" className="contact-form">
                    <input type="text" placeholder="Your name" className="form-input" required/> 
                    <input type="email" placeholder="Your email" className="form-input" required/> 
                    <textarea placeholder="Your message" className="form-input" required></textarea>
                    <button className="submit-button">Submit</button>
                </form>
            </div>
        </section>
  )
}
