import React from "react";
import img from "../../assets/images/compnay_logo_1.png";
import img2 from "../../assets/images/compnay_logo_2.png";
import img3 from "../../assets/images/compnay_logo_3.png";
import img4 from "../../assets/images/compnay_logo_4.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container container_larg">
        <div className="position-relative">
          <div className="interior_sec">
            <div className="position-relative">
              <div className="brands d-flex position-absolute w-100">
                <div className="brand_logo">
                  <img src={img} alt=""/>
                </div>
                <div className="brand_logo">
                  <img src={img2} alt="" />
                </div>
                <div className="brand_logo">
                  <img src={img3} alt="" />
                </div>
                <div className="brand_logo">
                  <img src={img4} alt="" />
                </div>
              </div>
              <div className="main_card bg_primary">
                <h2 className="text-white">
                  LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW
                </h2>
                <Link to="" className="d-inline-block btn text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="main_footer pb-5">
            <div className="row gy-3">
              <div className="col-lg-6">
                <h4 className="text-white">Information</h4>
                <p className="text-white">
                Discover the magic of creativity with Pictro AI! We turn ordinary text into 
                captivating art and bring your images to life with fantastical characters. 
                Unleash your imagination and explore endless possibilities
                </p>
              </div>
              <div className="col-lg-6 contect_sec">
                <h4 className="text-white">Contact Us</h4>
                <Link to="" className="text-white d-block">
                  <i className="bi bi-geo-alt-fill me-1 primary_clr fw-bolder text-white"></i>
                Mini Commercial Phase-7 Bahria Town Islamabad Capital Territory Islamabad
                </Link>
                <Link className="text-white d-block" to="mailto:support@metexlabs.com">
                  <i className="bi bi-envelope-fill me-2 primary_clr fw-bolder text-white"></i>
                  support@metexlabs.com
                </Link>
                <div className="footer_form">
                  <form action="" className="">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="my-3"
                    />
                    <button type="submit" className="d-block btn text-white ">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
