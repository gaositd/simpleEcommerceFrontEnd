import React, { Fragment as FR } from "react";
import logo from '../logo/../../../images/pngwing.png';

export function Logo(){
    return(
        <FR>
            <img src={logo} alt="Cortesia de https://www.pngwing.com" />
        </FR>
    );
}