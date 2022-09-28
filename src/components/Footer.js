import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
import {FaFacebookF,FaInstagram,FaYoutube,FaLinkedinIn,FaTwitter} from 'react-icons/fa'
import {SiYourtraveldottv} from 'react-icons/si'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className='footer-subscription-heading'>
                Join our Adventure blog by subcribing here!
            </p>
            <p className="footer-subscription-text">
                You can unsubcribe anytime
            </p>
            <div className="input-areas">
                <form >
                    <input type="email" name="email" className="footer-input" placeholder='Enter your email'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-links-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                    <SiYourtraveldottv />&nbsp; WeTravel 
                    </Link>
                </div>
                <small className='website-rights'>WeTravel @ 2022</small>
                <div className='social-icons'>
                    <Link to = '/' className="social-icon-link facebook" aria-label='Facebook' target='_blank'> 
                     <FaFacebookF />
                    </Link>
                    <Link to = '/' className="social-icon-link twitter" aria-label='Twitter' target='_blank'> 
                     <FaTwitter />
                    </Link>
                    <Link to = '/' className="social-icon-link linkedin" aria-label='Linkedin' target='_blank'> 
                     <FaLinkedinIn />
                    </Link>
                    <Link to = '/' className="social-icon-link youtube" aria-label='Youtube' target='_blank'> 
                     <FaYoutube />
                    </Link>
                    <Link to = '/' className="social-icon-link instagram" aria-label='Instagram' target='_blank'> 
                     <FaInstagram />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer