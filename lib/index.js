// TODO: Write your JS code in here
import $ from 'jquery';
import 'select2';
import { elements } from './views/base';
import * as cardView from './views/cardView';

const cities = ["Erciyes", "Erzurum", "Kartalkaya", "Sarıkamış", "Uludağ"];

const searchWeather = (e) => {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e}&units=metric&appid=13eb53673741844309dc9d52acce6e38`)
    .then(response => response.json())
    .then((data) => {
      // const today = data.list[0];
      // let days = [];
      // const dataArray = data.list;
      const city = {
        mountain: data.city,
        weather: data.list[0]
      };
      const markup = cardView.renderCard(city);
      document.querySelector(elements.cards).insertAdjacentHTML('beforeend', markup);
      console.log(city);
    });
};

cities.forEach(city => searchWeather(city));

  // document.querySelector(elements.cards).insertAdjacentHTML('beforeend', markup);


// showCard(cities);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const resultLast = document.querySelector('#city-name');
//   cities.forEach();
// });

// cities.forEach(city => searchWeather(city));
// searchWeather("Bursa");

// const getCurrentPosition = (lat, long) => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=13eb53673741844309dc9d52acce6e38`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       const temperature = Math.round(data.main.temp);
//       const status = data.weather[0].description;
//       const image = data.weather[0].icon;
//       const date = new Date().toDateString();
//       const theCity = data.name;
//       final.innerHTML = `<div id="logo"><img src='http://openweathermap.org/img/w/${image}.png'></div>
//           <div id="temperature"><h4>${temperature}°C</h4></div>`;
//       sky.innerText = `${status}`;
//       today.innerText = `Today is ${date}`;
//       city.innerText = `Weather in ${theCity}`;
//     });
// };


// current.addEventListener("click", (event) => {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition((data) => {
//     const long = data.coords.longitude;
//     const lati = data.coords.latitude;
//     getCurrentPosition(lati, long);
//   });
// });
