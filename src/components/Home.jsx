import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../components/images/yash.png"
import Type from './Type';
import Footer from './Footer';

const Home = () => {
    return (
        <>
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1>Hello ! <span className="wave">👋🏻</span> </h1><h1 className="mt-3">My name is <strong className="brand-name">Yash Raj.</strong></h1>
                          <h2 className="my-3">
                          <div style={{ textAlign: "left" }}>
                          <Type />
                        </div>
                          </h2>
                          <div className="mt-3">
                          <NavLink to='/about'><button type="button" className="btn btn-outline-dark know-more">Know More.</button></NavLink>
                          </div>
                        </div>

                          <div className="col-lg-6 order-1 order-lg-2 header-img">
                            
                            <img src={web} className="img-fluid animated" alt="Main-image"></img>

                          </div>
                        </div>
                      </div>     
                </div>
            </div>
          </section>
          <div>
          <Footer />
          </div>  
        </>
    )
}

export default Home;