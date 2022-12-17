import React from "react";

const date=new Date();

const year=date.getFullYear();

function footer(){
    return <footer>
    <p>Copyright {year}</p>
    </footer>
}

export default footer;