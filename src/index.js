import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function countDown(){
  <h1> countDown to christmas 2022</h1>
  let countDownDate = new Date("Dec 24, 2021 23:59:01").getTime();
  
  let update = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);


    document.getElementById("root").innerHTML = days + "days" + hours + "hours" + minutes + "minutes" + seconds + "seconds";

    if (distance < 0) {
      clearInterval(update);
      document.getElementById("root").innerHTML = "EXPIRED!";
    }

  },1000);
}
countDown(); 

ReactDOM.render(
  <countDown/>,

  document.getElementById('root')
);

