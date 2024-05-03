import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reviewsimg1 from "../images/Star 1.png"


const Reviews = () => {

    const sectionRef = useRef(null);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(sectionRef.current, {

            duration: 3,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80px',

                end: 'bottom center',
                scrub: true,


            },
            x: '-2200', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });




    }, []);
    return (
        <>

            <section id='reviews-main'>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-12" id='sec-rev'>

<div className='rev-setting'>
<h1 className='h1reviews' ref={sectionRef}>REVIEWS</h1>

</div>


                            <div className='testimonial-flex' id='flex-right'>


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



                            <div className='testimonial-flex'>


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

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
export default Reviews;