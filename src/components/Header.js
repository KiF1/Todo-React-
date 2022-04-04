import React, { useEffect, useState } from "react";
import Theme from "./Theme";



function Header(props) {

    const [date, setDate] = useState('');

    useEffect(()=>{
        const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        const d = new Date();
        const today = `${names[d.getDay()]} ${d.getDate()}, ${d.getFullYear()}`
        
        setDate(today);
    }, []);

    return (
        <div className="header">
            <Theme onHandleTheme={props.onHandleTheme} theme={props.theme}/>
            <h3>{date}</h3>
        </div>
    )
}

export default Header;