import React from "react";
import Header from "./Header";
import Marquee from "./Marquee";
import image1 from "../images/DESIGN.png"


const Home = () => {
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
                                        <h1 className="marquee" >Coming Soon!</h1>

                                    </div>


                                </div>

                                {/* <h1 className="soon">Coming Soon</h1> */}


                            </div>
                        </div>

                    </div>





                </div>
            </div>


        </>
    )
}

export default Home