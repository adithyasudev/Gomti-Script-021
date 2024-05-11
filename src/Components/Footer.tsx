//import React from 'react'
// import styles from './Footer.module.css';
import { Center } from "@chakra-ui/react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <>

<Center>
      
      
      <footer
        className={Style.footer}
        style={{
          backgroundColor: "white",
          marginTop: "20px",
          marginLeft: "80px",

        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" ,
          flexWrap:"wrap"
        }}>
          <div style={{ width: "400px", marginBottom: "20pxf",marginLeft:"20px"}}>
            <img src="https://picjj.com/images/2024/05/10/FKc4a.jpeg"></img>
            <p style={{marginLeft:"10px"}}>
              We at ConvexTech aim to create 2<br />
              Million Employment Opportunities
              <br />
              by year 2023 in pakistan.
            </p>
            <br />
  
            <img 
            style={{marginLeft:"10px"}}
              decoding="async"
              src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png"
              alt="LinkedIn"
            ></img>
            <br />
            <img
            style={{marginLeft:"10px"}}
              decoding="async"
              src="https://convextech.com/wp-content/uploads/2022/07/mail.png"
              alt="Email"
            ></img>
          </div>
          <div className={Style.navlink}>
            <ul>
              <a href="#">About</a>
              <br />
              <a href="#">Services</a>
              <br />
              <a href="#">Meetups</a>
              <br />
              <a href="#">Trainings</a>
              <br />
              <a href="#">Seminars</a>
              <br />
              <a href="#">Marketplace</a>
              <br />
              <a href="#">Hire a VA</a>
              <br />
              <a href="#">Success Stories</a>
              <br />
              <a href="#">Recent Seminars</a>
            </ul>
          </div>
          <div className={Style.navlink2}>
            <ul>
              <a href="#">Blog</a>
              <br />
              <a href="#">FAQ</a>
              <br />
              <a href="#">Team</a>
              <br />
              <a href="#">Press</a>
              <br />
              <a href="#">Career</a>
              <br />
              <a href="#">Our Offices</a>
              <br />
              <a href="#">Request a Call</a>
              <br />
              <a href="#">Our Publication</a>
              <br />
            </ul>
          </div>
          <div style={{marginRight:"30px",marginTop:"10px"}}>
            <h2 style={{ fontSize: "30px" ,marginRight:"50px"}}>Contact Us</h2>
            <img
              decoding="async"
              src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png"
              alt="LinkedIn"
            ></img>
            <br />
            <img
              decoding="async"
              src="https://convextech.com/wp-content/uploads/2022/07/mail.png"
              alt="Email"
            ></img>
          </div>
        </div>
        <div>
          <p style={{ marginTop: "40px", marginLeft: "30px" }}>
            ConvexTech is operated by ConvexTech Insight Pvt Ltd. Copyright 2020 -
            All right Recived
          </p>
        </div>
      </footer>
      </Center>
    </>
   
  );
};

export default Footer;
