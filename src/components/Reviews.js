import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reviewsimg1 from "../images/Star 1.png"
import { pract } from '../assets/js/pract';



const Reviews = () => {

    const sectionRef = useRef(null);
    const testimonialRef = useRef(null);
    const testimonialRef1 = useRef(null);
    const testimonialRef2 = useRef(null);
    const testimonialRef3 = useRef(null);





    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(sectionRef.current, {

            duration: 3,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 200px',

                end: 'bottom center',
                scrub: true,


            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });


        gsap.to(testimonialRef.current.children, {
            y: '-120%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef1.current.children, {
            y: '-90%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef2.current.children, {
            y: '-70%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });

        gsap.to(testimonialRef3.current.children, {
            y: '-70%', // Move the testimonial containers upward
            // opacity: 0, // Fade out the testimonial containers
            duration: 1, // Animation duration
            ease: 'power2.inOut', // Easing function
            scrollTrigger: {
                trigger: testimonialRef.current, // Use the testimonial container as the trigger
                start: '', // Start the animation when the top of the testimonial container reaches the center of the viewport
                end: 'bottom center', // End the animation when the bottom of the testimonial container reaches the center of the viewport
                scrub: true, // Smoothly animate the property changes as the user scrolls
            },
        });


    }, []);

    useEffect(() => {
        pract()

    }, [])
    
    return (
        <>


            <section id='reviews-main' class="frame6">

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-12" id='sec-rev'>

                            <div className='rev-setting'>
                                <h1 className='h1reviews frame7' id="moving-heading">REVIEWS</h1>

                            </div>

<div className='rev-margintop'>

                            <div className='testimonial-flex' id='flex-right'>

                                <div ref={testimonialRef2}>

                                    <div className="testimonial-container">
                                        <div className="testimonial-content">
                                            <h2 className="testimonial-heading">Jack</h2>
                                            <div className="stars-container">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <img
                                                        key={star}
                                                        src={reviewsimg1} // Path to your star image
                                                        alt="star"
                                                        className="star-icon"
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                        <p className="testimonial-text">
                                            "This designer's attention to detail and creativity are unmatched. Their work is consistently stunning and impactful."
                                        </p>
                                    </div>
                                </div>

                                <div ref={testimonialRef}>

                                    <div className="testimonial-container" >
                                        <div className="testimonial-content">
                                            <h2 className="testimonial-heading">Jack</h2>
                                            <div className="stars-container">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <img
                                                        key={star}
                                                        src={reviewsimg1} // Path to your star image
                                                        alt="star"
                                                        className="star-icon"
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                        <p className="testimonial-text">
                                            "This designer's attention to detail and creativity are unmatched. Their work is consistently stunning and impactful."
                                        </p>
                                    </div>
                                </div>

                            </div>



                            <div className='testimonial-flex'>

                                <div ref={testimonialRef3}>


                                    <div className="testimonial-container">
                                        <div className="testimonial-content">
                                            <h2 className="testimonial-heading">Nomi</h2>
                                            <div className="stars-container">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <img
                                                        key={star}
                                                        src={reviewsimg1} // Path to your star image
                                                        alt="star"
                                                        className="star-icon"
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                        <p className="testimonial-text">
                                            "This designer's attention to detail and creativity are unmatched. Their work is consistently stunning and impactful."
                                        </p>
                                    </div>
                                </div>



                                <div ref={testimonialRef1}>

                                    <div className="testimonial-container">
                                        <div className="testimonial-content">
                                            <h2 className="testimonial-heading">Kashu</h2>
                                            <div className="stars-container">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <img
                                                        key={star}
                                                        src={reviewsimg1} // Path to your star image
                                                        alt="star"
                                                        className="star-icon"
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                        <p className="testimonial-text" >
                                            "This designer's attention to detail and creativity are unmatched. Their work is consistently stunning and impactful."
                                        </p>
                                    </div>
                                </div>

                            </div>


                            </div>


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
export default Reviews;