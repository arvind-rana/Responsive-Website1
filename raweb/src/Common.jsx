import React from 'react';


import { NavLink }from 'react-router-dom';

const Common = (props) => {
    return (
        <>
        <section id='header' className='d-flex align-item-center'>
          <div className='container-fluid nav_bg'>
             <div className='row'>
             <div className='row'>
              <div className='col-10 mx-auto'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 lg-1 '>
              <h1> 
                <h1>{props.name} <br/>
                <strong className='brand-name'>{props.mid} </strong></h1>
              </h1>
              
                <h2 className='my-3'>
                {props.last}
                </h2>
                <div className='mt-3'>
                  <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src={props.imgsrc} className='img-fluid-animated' alt='home-img' height='200px'/>
              </div>
              </div>
              </div>
             </div>
          </div>

            </section>
        </>
    )
}
export default Common