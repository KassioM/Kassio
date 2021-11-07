import React from 'react';
import Navbar from './Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import Typing from 'react-typing-animation';

const Header = () => {
    return (
        <div>

            <Navbar />

            <div className="background-video">

            <video autoplay="true" muted loop> 
                <source src="https://res.cloudinary.com/kassio-company/video/upload/v1636302522/Kassio%20Portif%C3%B3lio/Coding_Background_Video_for_Websites_xlbpgm.mp4" type="video/mp4" />
            </video>
            </div>

            <div className="header" id="header" >
                <div className="content-header">
                    
                    <h1>Kássio Matheus</h1>
                    <div className="cargo-header">
                        <Typing className="content-cargo-header" >
                            <p className="cargo-1" >D E S E N V O L V E D O R</p>
                            <p className="cargo-2" >F R O N T - E N D</p>
                        </Typing>
                    </div>

                    <div className="content-button-header">

                        <div className="button-header">
                            <i class="fas fa-arrow-down"></i>
                            <Link
                                href="#sobre"
                                activeClass="active"
                                to="sobre"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Saiba mais</Link>
                        </div>

                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Header;
