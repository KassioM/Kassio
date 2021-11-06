import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const ReturnTop = () => {
    return (
        <Link
            href="#header"
            activeClass="active"
            className="return-to-top"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <i class="fas fa-arrow-up"></i>
            <p>Voltar ao topo</p>

        </Link>
    )
}

export default ReturnTop
