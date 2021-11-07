import React from 'react';
import Navbar from './Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import Typing from 'react-typing-animation';

const Header = () => {
    return (
        <div>

            <Navbar />

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
