import "./footer.css";
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="footer-div">
            <div className="footer">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="footer-logo">
                            LOGO
                        </h3>
                        <h5 className="footer-sub-head">
                            We Deliver The Best
                        </h5>
                        <p className="footer-para">
                            faucibus In ultrices Nunc laoreet non nec tincidunt tortor. est. ex risus felis, tincidunt lorem. sodales. Ut ex in quis faucibus at, Donec adipiscing ex sit 
                        </p>
                        <div className="social-icon">
                            {/* color="#E4405F" */}
                            <FaInstagram size={40} className="icon insta"/>
                            {/* color="#1877F2" */}
                            <FaFacebook size={40} className="icon fb"/>
                            {/* color="black" */}
                            <FaXTwitter size={40} className="icon twr"/>
                            {/* color="FF0000" */}
                            <FaYoutube size={40} className="icon yt"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="company-info">
                                    <h5 className="footer-section-head">
                                        Company Info
                                    </h5>
                                    <ul className="footer-section">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">We Are Hiring</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="legal">
                                    <h5 className="footer-section-head">
                                        Legal
                                    </h5>
                                    <ul className="footer-section">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="freatures">
                                    <h5 className="footer-section-head">
                                        Features
                                    </h5>
                                    <ul className="footer-section">
                                        <li><a href="#">Business Marketing</a></li>
                                        <li><a href="#"></a>User Analytic</li>
                                        <li><a href="#">Live Chat</a></li>
                                        <li><a href="#">Unlimited Support</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="get-in-touch">
                                    <h5 className="footer-section-head">
                                        Get In Touch
                                    </h5>
                                    <ul className="footer-section">
                                        <li>
                                            <a href="#">
                                                <FaPhoneAlt size={30}  className="icon"/>
                                                +971 00 000 000 || +971 00 000 0000
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaEnvelope size={30} className="icon"/>
                                                info@tested.ae || test@printzed.ae
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaMapMarkerAlt size={30} className="icon" />
                                                Shop No: 13, xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxDubai - U.A.E.
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;