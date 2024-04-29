import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Brands from './Brands';

import Marquee from 'react-fast-marquee';



const Home = () => {


    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
       
    }, []);






    return (
        <>

            <div className="sub-sec">

                <div id="section1">
                    <Header />
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <h1 className="welcome">WELCOME  TO <br></br> <span className="welcome1">BYTEBRIT</span></h1>
                                <div className="marquee-container">
                                    <div className="marque-width">
                                        {/* <h1 className="marquee" >EMPOWERING BUSINESSES THROUGH EMPOWERING BUSINESSES THROUGH</h1> */}

                                        <Marquee direction="left" speed={100} delay={5}>

                                            <h1 className="marquee" >EMPOWERING BUSINESS THROUGH TECHNOLOGY</h1>

                                        </Marquee>


                                    </div>
                                </div>

                                {/* <h1 className="soon">Coming Soon</h1> */}
                            </div>
                        </div>
                    </div>
                </div>

                </div>


                {/* <div id="section2">

                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <h1 className="h1about">ABOUT</h1>

                            </div>

                        </div>
                    </div>





                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-12 work1">

                                <p className='inthe'>In the fast-paced world of digital marketing staying ahead requires not only adaptability but also a deep understanding of the unique needs of each brand. ByteBrit was founded with a vision to bridge the gap between business and their digitalpotential.Our story is one of continuous growth, innovation, and a story is one of continuous growth, innovation, and a relentless pursuit of excellence.</p>


                            </div>

                        </div>

                    </div>



                    <div className='para1' style={{ position: 'fixed', top: '10%', right: `${100 + scrollPosition}px`, whiteSpace: 'nowrap' }}>
                        <h1 style={{ transform: `translateX(${scrollPosition}px)` }}>Work</h1>
                    </div>
                </div> */}


                <Brands />


        </>
    )
}

export default Home