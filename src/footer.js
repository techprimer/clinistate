import React from 'react';
import Logo from './images/logo.png';
import map from './images/map.png'
function Footer() {
    return (
        <div>
            <div className="container">
            <div className="row " style={{marginTop:'100px'}} >
                <div className="col-6 col-lg-4 col-md-3"  className="text-left  p-4">
                    <img src={Logo}  width='236px' height="53px" alt="clinistate-logo" loading="lazy"></img>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-5">clinistate@gmail.com</p>
                    <p style={{fontSize:'20px',color:'#68C9CB',fontWeight:'500'}}>1800-000-000</p>
                </div>
                <div className="col-6 col-lg-4 col-md-4"  className="text-left p-4 px-5">
                    <h3 style={{color:'#233D63',fontWeight:'500'}}>Services</h3>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-5">24 x 7 Support</p>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} >Software tutorial</p>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}}>Marketing</p>
                </div>
                <div className="col-6 col-lg-4 col-md-4" className="text-left p-4 px-5">
                <h3 style={{color:'#233D63',fontWeight:'500'}}>About Us</h3>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-5">Plan & Pricing</p>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} >News</p>
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}}>work flow</p>
                </div>
                <div className="col-6 col-lg-4 col-md-4" className="text-left p-4 px-5">
                <h3 style={{color:'#233D63',fontWeight:'500'}}>Our Address</h3>  
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500',width:'200px'}} className="mt-5"> <img src={map} alt='' ></img> 00 Orville Road Apt. 728 California, USA</p>
                </div>
            </div>
            </div>
        <div className="container">
            <div className="row border" style={{marginTop:'100px'}}>
                <div className="col-6 text-left" >
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-4">© 2019 copyright all right reserved</p>
                </div>
                <div className="col-3">
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-4 ">Privacy & Policy.</p>
                </div>
                <div className="col-3">
                    <p style={{fontSize:'20px',color:'#656565',fontWeight:'500'}} className="mt-4 ">Term & Condition</p>
                </div>
            </div>
            </div>
        </div>

    );
}


export default Footer;