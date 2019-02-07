
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
var error = document.querySelector(".error");
//fonction asynchrone car sinon, il ne recharge pas l'API
async function getCatData() {
        await axios.get('https://aws.random.cat/meow') //then attend que await soit fini
        .then(function (response) {
            catimg.src = response.data.file
            //setTimeout(() =>  {getCatData()}, 1000);
        })
        .catch(function (error) {
            error.innerHTML = "(An error has occurred.)";
        });
    }
setInterval(()=>{getCatData()},1000);
