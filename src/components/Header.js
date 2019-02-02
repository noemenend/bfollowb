import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/userActions';

const Header = props => {
    const isAuthenticated = props.isAuthenticated;
    const handleMenu = event => {
      event.preventDefault();
      const menu = document.getElementById('menuTop');
      menu.classList.toggle('active');
    };

          return ( 
           

              <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">

               
                  <Link to= {'/'} className="navbar-brand"><h1>BFOLLOWB</h1></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                
                
                {isAuthenticated && 
                  <React.Fragment>
                  <div className="collapse navbar-collapse" id="navbarColor01">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                              <Link to= {'/'} className="nav-link" href="#"> USERS</Link>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">PROFILE</a>
                          </li>
                          <li className="nav-item">
                              <Link to = {'/requests'} className="nav-link">REQUESTS</Link>
                          </li>
        
                      </ul>
             
                      <div className="my-2 my-lg-0" >
                        <ul className="navbar-nav mr-auto">
                            <p></p>
                            <li className="nav-item">
                                <Link to= {'/logout'} className="nav-link"><i className="fa fa-sign-out-alt"></i></Link>
                            </li>
                        </ul>

                    </div>
                     
                </div>
                </React.Fragment>
                }
            </nav>
           );
     }

 
     const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
      })
      
    export default connect(mapStateToProps, {logoutUser})(Header);