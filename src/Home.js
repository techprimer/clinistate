import React from 'react';
import { ReactComponent as ReactLogo } from './images/keyboard-right-arrow-button.svg';
import './Home.css';
import dashboard from './images/dashboard.png';
import arrow from './images/arrows.png';
import value from './images/value.png';
import protect from './images/protected.png';
import screen5 from './images/screen5.png';
import tick from './images/redtick.png';
import bluetick from './images/bluetick.png';
import quote from './images/quote.png';
import main from './images/mainimage.png';
function Home() {
    return (
        <div>
            <div className="container">
                <div className="row" style={{ marginTop: '10%' }}>
                    <div className="col-6 col-md-4 col-lg-5 mt-5" >
                        <div className="border text-left p-2" style={{ borderRadius: '50px 50px 50px 50px', maxWidth: '100%', width: 'max-content' }}>
                            <h6 className="mt-2" style={{ maxWidth: '100%' }}><span className="p-2 " style={{ color: '#FF4451' }} >70% Off</span> For first 3 month</h6>
                        </div><br></br>

                        <div >
                            <h1 style={{ color: '#233D63' }} className="text-left">
                                Ultimate web app for your customer support.
                      </h1>
                        </div>
                        <div className="button-div mt-5 text-left " >
                            <button style={{ backgroundColor: '#68C9CB', font: 'Condensed  Roboto', color: '#FFFFFF', border: 'none' }} className="p-3" >More About Us <ReactLogo />
                            </button>
                        </div>
                    </div>
                    <div className="col-6 col-md-8 col-lg-7 ">
                        <img src={main} style={{ position: 'relative', width: '140%', height: '100%', marginTop: '0px' }} className="text-right" ></img>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row " style={{ marginTop: '100px' }}>
                    <div className="col-12">
                        <h2 className="text-center">TRUSTED OVER 2300+ Hospitals</h2>
                    </div><br></br>
                    <div className="mt-5 box  col-12 col-md-12 col-lg-12 "   >
                        <div style={{ maxWidth: '100%', height: 'auto', backgroundColor: '#EBFBEF' }} className="p-5 ">
                            <p id="para" style={{ color: '#2A2A2A', font: 'Medium Roboto', fontSize: '35px', opacity: 0.26 }} >Client Icon</p>
                        </div>
                        <div style={{ maxWidth: '100%', height: '162px', backgroundColor: '#EBFBEF' }} className="p-5 ">
                            <p style={{ color: '#2A2A2A', font: 'Medium Roboto', fontSize: '35px', opacity: 0.26 }}>Client Icon</p>
                        </div>
                        <div style={{ maxWidth: '100%', height: '162px', backgroundColor: '#EBFBEF' }} className="p-5 ">
                            <p style={{ color: '#2A2A2A', font: 'Medium Roboto', fontSize: '35px', opacity: 0.26 }}>Client Icon</p>
                        </div>
                        <div style={{ maxWidth: '100%', height: '162px', backgroundColor: '#EBFBEF' }} className="p-5 ">
                            <p style={{ color: '#2A2A2A', font: 'Medium Roboto', fontSize: '35px', opacity: 0.26 }}>Client Icon</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" style={{ marginTop: '100px' }}>

                    <div className="col-10 col-md-12 col-lg-12 ml-5" >
                        <h1 className="text-center" style={{ color: '#233D63' }}>
                            Provide awesome customer service with our tools.
                    </h1>
                    </div>
                </div><br></br>


                <div className="row mt-5 px-5">
                    <div className="col-lg-4 px-5 " id="dashboard" >
                        <div classname="dashboard " style={{ color: '#233D63' }} >
                            <img src={dashboard} alt="" style={{ float: 'left' }} ></img><br></br>
                            <h4 className="mt-5 pt-5 text-left" style={{ marginTop: '150px' }}>User Friendly dashboard & Cool Interface.</h4>
                            <h6 className="mt-5 text-left " style={{ color: '#233D63' }}>Lorem ipsum dolor si amet, an dusino situ sint pertinacia constituto, mir es dignsius quo great.</h6>
                            <img src={arrow} alt="" className="mt-5 " style={{ float: 'left' }} ></img>
                        </div>
                    </div>
                    <div className="col-lg-4 px-5" id="value">
                        <div classname="value" style={{ color: '#233D63' }} >
                            <img src={value} alt="" style={{ float: 'left' }} ></img><br></br>
                            <h4 className="mt-5 pt-5 text-left" style={{ marginTop: '150px' }}>Thousand of features and Custom option.</h4>
                            <h6 className="mt-5 text-left" style={{ color: '#233D63' }}>Lorem ipsum dolor si amet, an dusino situ sint pertinacia constituto, mir es dignsius quo great.</h6>
                            <img src={arrow} alt="" className="mt-5 " style={{ float: 'left' }} ></img>
                        </div>
                    </div>
                    <div className="col-lg-4 px-5" id="protect">
                        <div classname="protect" style={{ color: '#233D63' }} >
                            <img src={protect} alt="" style={{ float: 'left' }} ></img><br></br>
                            <h4 className="mt-5 pt-5 text-left" style={{ marginTop: '150px' }}>Strong Managment & Security.</h4>
                            <h6 className="mt-5 text-left" style={{ color: '#233D63' }}>Lorem ipsum dolor si amet, an dusino situ sint pertinacia constituto, mir es dignsius quo great.</h6>
                            <img src={arrow} alt="" className="mt-5 " style={{ float: 'left' }} ></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row mt-5" >
                    <div className="col-5">
                        <img src={screen5} alt='screen5' style={{ width: '100%', height: '100%', position: 'relative', maxWidth: '100%' }}></img>
                    </div>
                    <div className="col-7">
                        <div style={{ width: '100%' }} className="text-left" id="service">
                            <h1 style={{ color: '#233D63' }}>Provide awesome customer service with our tools.</h1>
                        </div>
                        <div className="mt-5 text-left" style={{ width: '100%' }} id="para">
                            <p style={{ fontSize: '31px', color: '#233D63', fontWeight: '500' }} >Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.</p>
                        </div>
                        <div className="mt-5 text-left" style={{ width: '100%' }} id="para-tick">
                            <p style={{ fontSize: '30px', color: '#233D63', fontWeight: '500', width: '100%' }} >  <img src={tick} alt="tick" className="px-2"></img>Lorem ipsum dolor sit amet, hendrerit omittantur</p>
                            <p style={{ fontSize: '30px', color: '#233D63', fontWeight: '500' }} className="py-2">  <img src={tick} alt="tick" className="px-2"></img>Lorem ipsum dolor sit amet, hendrerit omittantur</p>
                            <p style={{ fontSize: '31px', color: '#233D63', fontWeight: '500' }} >  <img src={tick} alt="tick" className="px-2"></img>Lorem ipsum dolor sit amet, hendrerit omittantur</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row d-flex justify-content-center" style={{ marginTop: '100px' }} >
                <h1 className="text-center" style={{ width: '90%' }}>No Hidden Charges! Choose your Plan.</h1><br></br>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="d-flex border mt-5 " >
                    <div className="month">Monthly</div>
                    <div className="annual">Annual</div>
                </div>
            </div>

            <div className="container">
                <div className="row" style={{ marginTop: '100px' }}>
                    <div className="col-4 col-lg-4 col-md-4">
                        <div style={{ height: '100%', color: '#233D63' }} className="text-center">
                            <h2 style={{ color: '#CB6868' }}>$0.00</h2>
                            <p>Free</p>

                            <div className="mt-5 text-center" id="para-plan" style={{ width: '100%' }} >
                                <h3 >Features</h3>

                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }}  ><img src={bluetick} alt="tick" className="px-2 text-left"></img>Limited Acess</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>Single User</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>No Updates</p>

                                <button style={{ marginTop: '100px', border: '1px solid #E5E5E5', fontSize: '23px', padding: '10px 10px 10px 10px' }}>Upgrade</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-4 col-lg-4 col-md-4 px-3"  >
                        <div style={{ height: '100%', color: '#233D63' }}>
                            <h2 style={{ color: '#8F68CB' }}>$560.25</h2>
                            <p>Free</p>
                            <div className="mt-5" id="para-plan" style={{ width: '100%' }}>
                                <h3 >Features</h3>

                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} >  <img src={bluetick} alt="tick" className="px-2"></img>Full Access</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} >  <img src={bluetick} alt="tick" className="px-2"></img>Multiple User</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} >  <img src={bluetick} alt="tick" className="px-2"></img>Fast</p>

                                <button style={{ marginTop: '100px', border: '1px solid #E5E5E5', fontSize: '23px', padding: '10px 10px 10px 10px' }}>Upgrade</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-3 col-lg-4 col-md-4" style={{ width: '100%' }}>
                        <div style={{ height: '100%', color: '#233D63' }}>
                            <h2 style={{ color: '#68C9CB' }}>$999.15</h2>
                            <p>Free</p>
                            <div className="mt-5 " id="para-plan" style={{ width: '120%' }}>
                                <h3 >Features</h3>

                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>Full Access</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>Multiple User</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>Super Faster</p>
                                <p style={{ fontSize: '20px', color: '#233D63', fontWeight: '500' }} ><img src={bluetick} alt="tick" className="px-2"></img>Support 24x7</p>

                                <button style={{ marginTop: '50px', border: '1px solid #E5E5E5', fontSize: '23px', padding: '10px 10px 10px 10px' }}>Upgrade</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>


            <div className='row ml-1 d-flex justify-content-center' id="testinomial" >
                <div className="text-center mt-5">
                    <h1 style={{ width: '100%' }} >What’s Our Client Think About Us.</h1>
                </div><br></br>
                <div className="mt-5 d-flex justify-content-center">
                    <img src={quote} alt="quote" style={{ position: 'absolute', marginTop: '150px' }} ></img>
                    <div id="test-div" >

                        <p className="text-left">Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit Ius te altera essent incorrupte.</p>
                        <h3 className="text-center">Jonas Gandhi</h3>
                        <h5 className="text-center">trichologists</h5>
                    </div>

                </div>
                <div className="pb-5">
                    <img src={arrow} alt="" className="mt-5 " ></img>
                </div>


            </div>




        </div>
    );
}

export default Home;