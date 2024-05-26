import React from "react";
import { useNavigate} from "react-router-dom";
import logo from "../../assets/IMOVIX__1.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import contact from "../../pages/contact/Contact";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
            
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem" onClick={() => navigate("/contact")}>Contact</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
               
                <div className="infoSection">
        <div className="logoContainer">
        <img src={logo} alt="" />
        </div>
        <div className="infoText">
           Disclaimer:
            We use third-party services for streaming content and do not host or store any files on our servers. All content is provided by external providers, and we are not responsible for the material hosted on third-party sites.
              <h4> ©IMovix.</h4>
        </div>
    </div>
    
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
