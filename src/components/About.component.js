import React, { Component } from 'react';
import Footer from '../components/FrontEndComponents/Footer';
import '../css/About.css';
import Navbar from '../components/navbar.component';
import marchOfDimes from '../assets/charities/1280px-March_of_Dimes_logo.svg.png';
import sparks from '../assets/charities/sparks.png'
import aChildsHope from '../assets/charities/achildshope_logo_2.png';
import ronaldMcDonaldHouse from '../assets/charities/ronald-mcdonald-house-charities-of-greater-cincinnati-logo.png';
import wholeAgain from '../assets/charities/WholeAgainlogotaglineRGB-web-logo.png';

 class About extends Component {
    render() {
        return (
            <div>
            {/* start of header section - cc */}
               <header id="header-about-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div className="header-about-text container">
                     <div className="line"></div>
                     <h1>About Us<br/><span>Cincinnati</span></h1>
                     <p>
                     Cincinnati is a city in Ohio, on the Ohio River. <br/>
                     The Over-the-Rhine district is known for its 19th-century architecture,<br/>
                      including Findlay Market, which has food and craft vendors. To the north is <br/>
                      the Cincinnati Zoo & Botanical Garden. The Cincinnati Museum Center encompasses history,<br/>
                       science and children's museums in the art deco Union Terminal.<br/>
                      Works spanning 6,000 years are on display at the Cincinnati Art Museum.
                     </p>
                     <button className="btn">Explore</button>
                  </div>
               </header>
               {/* end of header section - cc */}
               <div className="about container mt-5">
                  <div className="row">
                     <div className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Our</h2><br/>
                        <h1>Mission</h1> 
                        <p>It is our goal to give you every reason to come visit Cincinnati!<br/>
                        we aim to show you all the tourist hotspots and maybe some secret spots too!</p>
                     </div>
                     <div className="col-md-2 .d-none .d-sm-none .d-md-block"></div>
                     <div className="col-sm-12 col-md-4">
                        <div className="aboutImageBackground ml-5 float-sm-right"></div>
                        <div className="aboutImage mr-5 float-sm-right" id="aboutImage1"></div>
                     </div>
                  </div>
                  <div className="row mt-5">   
                     <div className="col-sm-12 col-md-4">
                        <div className="aboutImageBackground"></div>
                        <div className="aboutImage ml-5" id="aboutImage2"></div>
                     </div>
                     <div className="col-md-2 .d-none .d-sm-none .d-md-block"></div>
                     <div className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Meet</h2><br/>
                        <h1>The Team</h1> 
                        <p>The team who brought you this project is Courtney, Daniel, Derrick, and Jonathon<br/>
                        a group of students from Kable Academy spread out internationally between Dayton, to Cincinnati <br/>
                        all the way to Chihuahua Mexico!</p>
                     </div>
                  </div>
               </div>
               <div className="row mt-5">   
                     <div className="col-sm-12 charitiesBackground mt-5 py-5 text-center">
                        <h2>Explore Cincinnati Charities</h2>
                        <a href="https://www.marchofdimes.org/"><img style={{width:'10rem'}} src={marchOfDimes}/></a>
                        <a href="https://www.sparksfoundation.org/support-us/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpsemiNo_z0291QTu9j143jWLNWeTOtoVZCYEHYaxe0Nkz8JKrLtTugaAjKgEALw_wcB"><img id="aboutLogos" src={sparks}/></a>
                        <a href="https://rmhc-centralohio.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptorRD_1Vt7lPKqNZGXhXynOGJaaRnFi9m0HMN3cb7DNIyqEkVNjDgaAiLlEALw_wcB"><img id="aboutLogos" src={ronaldMcDonaldHouse}/></a>
                        <a href="https://www.achildshopefoundation.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpvOh5HEcgHlzCUOp3cQHkX97fhs5LWAmU9yiBjeNs71OXN1m-6SNOMaAsvZEALw_wcB"><img id="aboutLogos" src={aChildsHope}/></a>
                        <a href="https://www.whole-again.org/"><img id="aboutLogos" src={wholeAgain}/></a>
                     </div>
                  </div>
                  <Footer />
            </div>
        )
    }
}
export default About;