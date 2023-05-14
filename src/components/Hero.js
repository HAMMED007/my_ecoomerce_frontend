import { Link } from "react-router-dom";
import shap1 from './shapes/dabble-plus.png';
import shap2 from './shapes/plus.png';
import hero from './hero/hero-one.png';
import line from './shapes/hero-bg-line-shapes.png';


function Hero() {
    return (
        <div>
            <section className="hero-area bgc-gray rel z-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 align-self-center">
                            <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                                <h1>Iphone Store</h1>
                                <p>Buy and sell last 15 Iphone Models</p>
                                <Link to="./Shop" className="theme-btn mt-20 wow fadeInUp delay-0-6s">Buy Now<i className="fas fa-long-arrow-right"></i></Link>
                                <div className="hero-shapes">
                                    <img className="shape one" src={shap1} alt="Shape" />
                                    <img className="shape two" src={shap1} alt="Shape" />
                                    <img className="shape three" src={shap2} alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end">
                            <div className=" fadeInLeft ">
                                <img src={hero} alt="Hero" />
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shapes">
                    <img className="shape bg-lines" src={line} alt="Shape" />
                        
                        </div>
                    </section>
                </div>
                );
}
 export default Hero;