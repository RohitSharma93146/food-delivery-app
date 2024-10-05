import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>tomato is a one-stop destination for fresh, flavorful meals delivered straight from our kitchen to your door. Whether you’re in the mood for a quick bite or a hearty meal, tomato offers a delicious menu designed to satisfy. With fast delivery and real-time tracking, enjoy our signature dishes, crafted with care, delivered to you in no time!</p>
                    <div className="footer-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100033834922330" target="_blank">
                        <img src={assets.facebook_icon} alt="Facebook" />
                    </a>
                        {/* <img src={assets.twitter_icon} alt="" /> */}
                        <a href="https://www.linkedin.com/in/rohitsharma2000/" target="_blank">
                        <img src={assets.linkedin_icon} alt="" />
                    </a>
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>9314652225</li>
                        <li>rohitsharma93146@gmail.com</li>
                    </ul>



                </div>
            </div>

            <hr />
            <p className="footer-copyright">Copyright 2024 @ tomato - All Right Reserved.</p>






        </div>
    )
}

export default Footer
