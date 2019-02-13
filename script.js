
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
//import axios
import axios from 'axios';
/*
  Put the JavaScript code you want below.
*/
var catimg = document.querySelector(".catimg");

//fonction asynchrone car sinon, il ne recharge pas l'API
async function getCatData() {
        var response= await axios.get('https://aws.random.cat/meow'); // await => la suite démarre quand la ligne est finie
        catimg.src = response.data.file;
    }

setInterval(()=>{getCatData()},2500);
