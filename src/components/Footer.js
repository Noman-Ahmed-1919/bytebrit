import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>

            <div id="footerback">

                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h1 className="h1footer">LETS START WORKING TOGETHER</h1>

                        </div>



                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <ul className="social-links text-center">
                                <li>
                                    <span>Instagram</span>
                                    <span>&#10138;
                                    </span>
                                </li>
                                <li>
                                    <span>LinkedIn</span>
                                    <span>&#10138;
                                    </span>
                                </li>
                                <li>
                                    <span>Facebook</span>
                                    <span>&#10138;
                                    </span>
                                </li>
                            </ul>





                         

                            <div className="contact-details">
                            <p style={{ color: 'white' }}>Contact Detail:</p>

      <p style={{ color: 'white' }}>
        <span>
        <FontAwesomeIcon icon={faEnvelope} /> {/* Email icon */}
        </span>
        <span style={{ marginLeft: '5px' }}>bytebrit.io@gmail.com</span> {/* Email address */}
      </p>
      <p style={{ color: 'white' }}>
        <span>
        <FontAwesomeIcon icon={faPhone} /> {/* Phone icon */}
        </span>
        <span style={{ marginLeft: '5px' }}>+44 7471 4636 05</span> {/* Phone number */}
      </p>
    </div>

                        </div>

                        <div className="col-md-4">
                            <p className="enter">Enter your email...</p>

                            <div className="message-box">
      <textarea
        className="message-input"
        placeholder="Message"
      ></textarea>
    </div>

                        </div>



                    </div>

                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-12">

                        <div className="horizontal-links">
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#work">work</a>
      <a href="#services">services</a>
      <a href="#contact">contact</a>
    </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Footer;