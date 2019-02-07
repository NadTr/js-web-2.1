
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import images from "./Cat/*.jpg"

let i = 1;
setInterval( ()=>{
  document.getElementById("catimg").src =images["cat"+i];
  i++;
  if (i == 12){
    i=1
  }
}, 1000)
