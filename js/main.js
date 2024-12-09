const key = '1596c46130ede4dd2f3e26938e3d5941'

document.getElementById('btn-sumpit').addEventListener('click', ()=>{
    const input = document.getElementById('search').value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`)
      .then(res => res.json())
      .then(data=>{
        document.getElementById('city-name').innerText= data.name
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
      })

})