import React, { useState } from "react";


function Theme(props) {
    return (
        <span onClick={props.onHandleTheme} className="theme">
            <img src="./assets/icons8-sun-80.png" />
            <div className={props.theme ? "themeBar dark" : "themeBar"}>
               <span className={props.theme ? "ball change dark" : "ball"}></span> 
            </div>
            <img src="./assets/icons8-moon-64.png" />
        </span>
    );
}

export default Theme;