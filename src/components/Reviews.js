import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Reviews = () => {

    const sectionRef = useRef(null);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(sectionRef.current, {

            duration: 3,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: '',

                end: 'bottom center',
                scrub: true,


            },
            x: '-1250%', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation

        });




    }, []);
    return (
        <>

            <section id='reviews-main'>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-12">

                            <h1 className='h1reviews' ref={sectionRef}>REVIEWS</h1>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
export default Reviews;