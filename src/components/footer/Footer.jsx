import React from "react";

import logo from "../../assets/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
            
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
               
                <div className="infoSection">
        <div className="logoContainer">
        <img src={logo} alt="" />
        </div>
        <div className="infoText">
            Thanks for visiting! Enjoy exploring over 10000 movies, TV shows, and celebrity profiles—absolutely free and ad-free.
              <h4> ©  IMovix.</h4>
        </div>
    </div>
    
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
