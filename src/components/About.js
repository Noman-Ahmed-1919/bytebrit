import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () =>{

    const sectionRef = useRef(null);
    const workRef = useRef(null);


  

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(sectionRef.current, {
            
            duration: 5, 

            scrollTrigger: {
                trigger: sectionRef.current,
                start: '',

                end: 'bottom center',
                scrub: true,
                onToggle: self => {
                    const isCenter = self.isActive;
                    sectionRef.current.style.color = isCenter ? '#531391' : 'white';
                },

            },
            x: '52%', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation
           
        });


        gsap.to(workRef.current, {
            duration: 7, // Adjust the duration as needed

            scrollTrigger: {
                trigger: workRef.current,
                start: '',

                end: 'bottom center',

                scrub: true, // Smoothly animate the element as the user scrolls

            },
            x: '-115%', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation
        });
       
    }, []);


   
    return(
        <>
        
        <div id="section2">

<div className="container-fluid">
    <div className="row">
        <div className="col-12" id='auto'>

            <h1   ref={sectionRef}  className="h1about">ABOUT</h1>
           
           <div className='aboutwork'>
           <p  ref={workRef}  className='inthe'>In the fast-paced world of digital marketing staying ahead requires not only adaptability but also a deep understanding of the unique needs of each brand. ByteBrit was founded with a vision to bridge the gap between business and their digitalpotential.Our story is one of continuous growth, innovation, and a story is one of continuous growth, innovation, and a relentless pursuit of excellence.</p>

           </div>


        </div>

    </div>
</div>


</div>  
        
        </>
    )
}

export default About