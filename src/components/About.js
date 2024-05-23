import React, { useRef, useEffect,  } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate } from '../assets/js/animate';

const About = () =>{

    const sectionRef = useRef(null);
    const workRef = useRef(null);


  

    useEffect(() => {


    
    
        gsap.registerPlugin(ScrollTrigger);

         // Function to calculate the position of the workRef div
    // const calculatePosition = () => {
    //     const viewportWidth = window.innerWidth;
    //     const workWidth = workRef.current.offsetWidth;
    //     const centerPosition = (viewportWidth - workWidth) / 2;
    //     return centerPosition;
    //     console.log(centerPosition);
    // };

   // Define media queries
   const mediaQuery1 = window.matchMedia('(min-width: 1400px) and (max-width: 1800px)');
   const mediaQuery2 = window.matchMedia('(min-width: 1200px) and (max-width: 1400px)');
   const mediaQuery3 = window.matchMedia('(min-width: 992px) and (max-width: 1200px)');


    // Define animation functions for each media query
    const handleMediaQueryChange = () => {

        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        
        // Calculate the center of the screen
        const centerX = vw / 2 - workRef.current.offsetWidth / 2;
        console.log(centerX);
        if (mediaQuery1.matches) {
            console.log('Media query 1 matched!');

            gsap.to(workRef.current, {
                duration: 7, // Adjust the duration as needed

                scrollTrigger: {
                    trigger: workRef.current,
                    start: '',
    
                    end: 'bottom center',

    
                    scrub: true, // Smoothly animate the element as the user scrolls
    
                },
                // x: calculatePosition() + 'px', // Calculate the position and set it in pixels
                x: centerX - 13, // Center the element horizontally

                ease: 'power2.inOut', // Use easing for smooth animation
            });
        } else if (mediaQuery2.matches) {
            console.log('Media query 2 matched!');

            gsap.to(workRef.current, {
                duration: 7, // Adjust the duration as needed

                scrollTrigger: {
                    trigger: workRef.current,
                    start: '',
    
                    end: 'bottom center',
    
                    scrub: true, // Smoothly animate the element as the user scrolls
    
                },
                x: centerX, // Center the element horizontally
                ease: 'power2.inOut', // Use easing for smooth animation
            });
        } else if (mediaQuery3.matches) {
            console.log('Media query 3 matched!');

            gsap.to(workRef.current, {
                duration: 7, // Adjust the duration as needed

                scrollTrigger: {
                    trigger: workRef.current,
                    start: '',
    
                    end: 'bottom center',
    
                    scrub: true, // Smoothly animate the element as the user scrolls
    
                },
                x: centerX, // Center the element horizontally
                ease: 'power2.inOut', // Use easing for smooth animation
                        });
        } else {
            // Default animation for wider screens
            gsap.to(workRef.current, {
                x: '52%',
            });
        }
    };

       // Initial check
    //    handleMediaQueryChange();

       // Event listeners for media query changes
    //    mediaQuery1.addEventListener('change', handleMediaQueryChange);
    //    mediaQuery2.addEventListener('change', handleMediaQueryChange);
    //    mediaQuery3.addEventListener('change', handleMediaQueryChange);

        gsap.to(sectionRef.current, {
            
            duration: 5, 

            scrollTrigger: {
                trigger: sectionRef.current,
                start: '',

                end: 'bottom center',
                scrub: true,
                // onToggle: self => {
                //     const isCenter = self.isActive;
                //     sectionRef.current.style.color = isCenter ? '#531391' : 'white';
                // },

            },
            x: '52%', // Move to the center of the viewport
            ease: 'power2.inOut', // Use easing for smooth animation
           
        });


        // gsap.to(workRef.current, {
        //     duration: 7, // Adjust the duration as needed

        //     scrollTrigger: {
        //         trigger: workRef.current,
        //         start: '',

        //         end: 'bottom center',

        //         scrub: true, // Smoothly animate the element as the user scrolls

        //     },
        //     x: '12%', // Move to the center of the viewport
        //     ease: 'power2.inOut', // Use easing for smooth animation
        // });
 
 
 
 
        // Clean up function
 return () => {
    // mediaQuery1.removeEventListener('change', handleMediaQueryChange);
    // mediaQuery2.removeEventListener('change', handleMediaQueryChange);
    // mediaQuery3.removeEventListener('change', handleMediaQueryChange);

};
       
    }, []);

    useEffect(() => {
        animate()

    }, [])
    


   
    return(
        <>
        
        <div id="section2" className='frame1'>

<div className="container-fluid">
    <div className="row">
        <div className="col-12" id='auto'>

            <h1  className="h1about frame3">ABOUT</h1>
            {/* <h1   ref={sectionRef}  className="h1about">ABOUT</h1> */}
           
            
           <div className='aboutwork frame2'>
            <p className='inthe'>In the fast paced world of digital marketing staying ahead requires not only adaptability but also a deep understanding of the unique needs of each brand. ByteBrit was founded with a vision to bridge the gap between business and their digitalpotential.Our story is one of continuous growth, innovation, and a story is one of continuous growth, innovation, and a relentless pursuit of excellence.</p>
           </div>
           {/* <div ref={workRef} className='aboutwork'>
            <p className='inthe'>In the fast paced world of digital marketing staying ahead requires not only adaptability but also a deep understanding of the unique needs of each brand. ByteBrit was founded with a vision to bridge the gap between business and their digitalpotential.Our story is one of continuous growth, innovation, and a story is one of continuous growth, innovation, and a relentless pursuit of excellence.</p>
           </div> */}


        </div>

    </div>
</div>


</div>  
        
        </>
    )
}

export default About