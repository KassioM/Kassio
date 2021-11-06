import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <div className="navbar" >

            <Link
                href="#projetos"
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > Projetos</Link>

            <Link
                href="#tecnologias"
                activeClass="active"
                to="tecnologias"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > Tecnologias</Link>

            <Link
                href="#contato"
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > Contato</Link>

            <Link
                href="#sobre"
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > Sobre</Link>

        </div>
    )
}

export default Navbar
