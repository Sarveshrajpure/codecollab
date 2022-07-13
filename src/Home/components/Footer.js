import React from "react";
import "./Footer.css";
import mm_logo from "../../assests/cc_logo.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerBlock mt-12  py-10 p-5 ">
        <div className="footerInfoBlock flex ">
          <div className="footerQuickLinkGetInTouchBlock w-5/6 lg:w-2/3 lg:flex   md:w-2/3 md:flex ">
            <div className="footerQuickLinkBlock lg:w-2/4 md:w-2/4 py-2  lg:pl-20 md:pl-20">
              <div className="quickLinkTitle font-medium  text-xl py-1 ">
                Quick Links
              </div>
              <div>
                <div>Pricing </div>
                <div>Sample Menu </div>
                <div> About us</div>
              </div>
            </div>
            <div className="footerGetInTouchBlock lg:w-2/4 md:w-2/4 py-2 lg:pl-10 md:pl-10">
              <div className="getInTouchTitle font-medium text-xl py-1 ">
                Get In Touch
              </div>
              <div>
                <div>Email: offdutyninjas02@gmail.com </div>
                <div>Contact-9687968789/9926689778</div>
                <div>Terms and conditions</div>
                <div>Refunds</div>
                <div>FAQs</div>
              </div>
            </div>
          </div>
          <div className="footerlogoBlock w-1/4 py-4 flex justify-center lg:w-1/3 md:w-1/3 ">
            <img className="lg:w-5/12  md:w-2/12 " src={mm_logo} alt="logo" />
          </div>
        </div>
        <div className="footerSocialCopyRightWrapper">
          <div className="footerSocialBlock   flex justify-evenly   lg:justify-center md:justify-center py-2 lg:py-4  md:py-4 ">
            <div className="lg:w-20  md:w-20">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="lg:w-20  md:w-20">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="lg:w-20  md:w-20">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="lg:w-20  md:w-20">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="footerCopyRightBlock text-center text-xs">
            Copyright © 2022 Off Duty Ninjas Technologies | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
