import React from 'react'
import { FaEnvelope,FaPhone,FaFacebookF,FaInstagram,FaLinkedin,FaTwitter,FaGithub,FaUser } from "react-icons/fa";
import './App.css';
import images from '../src/images/profile.jpg';
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="image">
                <img src={images} alt="profile"/>
            </div>  
            <div className="header">
                <h1>Dhruv Barochiya</h1>
            </div>     
            <div className="email">
                <ul>
                    <li><FaEnvelope/> Dhruv.barochiya34788@gmail.com</li>
                </ul>
            </div>
            <div className="phone">
                <ul>
                    <li><FaPhone/> +91-896-603-5687</li>
                </ul>
            </div> 
            <div className="heading">
                
                <div className="heading_one">
                    <a href="#">INTRODUCTION</a>
                    
                </div>
                <div className="heading_one">
                    <a href="#">ABOUT</a>
                </div>
                <div className="heading_one">
                    <a href="#">PROJECTS</a>
                </div>
                <div className="heading_one">
                    <a href="#">BLOG</a>
                </div>
                <div className="heading_one">
                    <a href="#">TIMELINE</a>
                </div>

                <div className="logo">
                    <ul>
                      <li>
                          <a href="#"><FaFacebookF/></a>
                     </li>
                     <li>
                         <a href="#"><FaTwitter/></a>
                     </li>
                     <li>
                         <a href="#"><FaInstagram/></a>
                     </li>
                     <li>
                         <a href="#"><FaLinkedin/></a>
                     </li>
                     <li>
                         <a href="#"><FaGithub/></a>
                     </li>
                     <li>
                         <a href="#"><FaUser/></a>
                     </li>
                    </ul>
                </div>
            </div>           
        </div>

    )
}
