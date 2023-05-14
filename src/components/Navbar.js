
import { Link } from "react-router-dom";

import logo from './logos/logo-one.png';


function Navbar() {
    return (
        <div className="page-wrapper">

            {/* <!-- Preloader --> */}
            <div className="preloader"><div className="custom-loader"></div></div>

            {/* <!-- main header --> */}
            <header className="main-header header-one menu-white">

                <div className="header-top-wrap bgc-gray">
                    <div className="container pad">
                        <div className="header-top ">
                          
                        </div>
                    </div>
                </div>

                {/* <!--Header-Upper--> */}
                <div className="header-upper bgc-black">
                    <div className="container clearfix">

                        <div className="header-inner rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo"><Link to="/"><img src={logo} alt="Logo" title="Logo" /></Link></div>
                            </div>

                            <div className="nav-outer  clearfix">
                                {/* <!-- Main Menu --> */}
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="navbar-header">
                                        <div className="mobile-logo">
                                            <Link to="/">
                                                <img src={logo} alt="Logo" title="Logo" />
                                            </Link>
                                        </div>

                                        {/* <!-- Toggle Button --> */}
                                        <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="navbar"><Link to="/">Home</Link>
                                              
                                            </li>
                                            <li className="navbar"><Link to="/Shop">Store</Link>
                                                
                                            </li>
                                           
                                
                                        </ul>
                                    </div>

                                </nav>
                                
                            </div>

                        </div>
                    </div>
                </div>
              
            </header>


        </div>

    );
}
export default Navbar;