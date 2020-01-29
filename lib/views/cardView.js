export const renderCard = card => {
  const html = `
  <div class = "mount-card">
    <div class="mount-image" style="background-image: linear-gradient(-225deg, rgba(1,1,1,0.4) 0%, rgba(1,1,1,0.4) 50%), url('css/img/${card.mountain.name}.jpg');">
      <div class="top-content">
        <h3>${card.mountain.name.toUpperCase()}</h3>
        <div class="icon">${card.weather.weather["0"].icon}</div>
        <div class="bottom">
          <h4 class="wind-speed">Wind Speed: ${card.weather.wind.speed}</h4>
          <h4 class="w-status">Weather Status: ${card.weather.weather["0"].description}</h4>
          <div class="temp">
            <div class="temp-value">
              <p>Temperature</p>
              <p>${card.weather.main.temp}</p>
            </div>
            <div class="temp-feels">
              <p>Feels Like</p>
              <p>${card.weather.main.feels_like}</p>
            </div>
            <div class="temp-max">
              <p>Temperature Max</p>
              <p>${card.weather.main.temp_max}</p>
            </div>
            <div class="temp-min">
              <p>Temperature Min</p>
              <p>${card.weather.main.temp_min}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  return html;
};

export const cardBottom = card => {

};
