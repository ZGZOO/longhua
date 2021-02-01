import React, {useState} from 'react';
import "./Sidemenu.css"

function Sidemenu({open, setOpen}){
    // const [open, setOpen] = useState(false);
    
    let hide = open ? "" : "hide";

    return(
        <div className={`sidemenu ${hide}`}>
            <div className="inner">
                <span>Contents</span>
                <br/><br/>
                <div className="menu-items">
                    <a href="#Intro" onClick={()=>setOpen(!open)}>00 - Intro</a><br/>
                    <a href="#Origin" onClick={()=>setOpen(!open)}>01 - Origin</a><br/>
                    <a href="#Prosperity" onClick={()=>setOpen(!open)}>02 - Prosperity</a><br/>
                    <a href="#Industry" onClick={()=>setOpen(!open)}>03 - Industry</a><br/>
                    <a href="#Changes" onClick={()=>setOpen(!open)}>04 - Changes</a>
                </div> 
            </div>
            <div className="cross" onClick={()=>setOpen(!open)}>
                    &#10005;
            </div>
        </div>
    )
}

export default Sidemenu;