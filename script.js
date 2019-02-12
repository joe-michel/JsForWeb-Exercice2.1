
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
import axios from 'axios';

function getImg(){
	return axios
	.get("https://aws.random.cat/meow")
	.then(response => {console.log(response);document.querySelector(".cat").src = response.data.file;})
}

window.onload = function () {getImg(); setInterval(getImg, 1000)};
