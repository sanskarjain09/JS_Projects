const apiKey = "ee98f431819da2575b145f306d5cf56c";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const seari = document.querySelector('.search input')
      const searb = document.querySelector('.search button')
      const err = document.querySelector('.error');

      async function checkWeather(city) {

        try {
          const res = await fetch(`${apiUrl + city}&appid=${apiKey}`)
          let data = await res.json();
          if (data.name != undefined) {
            err.style.display = "none"
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`
            document.querySelector('.temp').innerHTML = `${data.main.temp}°C`
            document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`
          }
          else {
            seari.value = "";
            err.style.display = "block"
            document.querySelector(".weather").style.opacity = "0";
          }
          if (data.name != undefined) {
            if (data.weather[0].main == "Clear") {
              document.querySelector('.weather-icon').src = `images/clear.png`
            }
            else if (data.weather[0].main == "Clouds") {
              document.querySelector('.weather-icon').src = 'images/clouds.png'
            }
            else if (data.weather[0].main == "Drizzel") {
              document.querySelector('.weather-icon').src = 'images/drizzel.png'
            }
            else if (data.weather[0].main == "Snow") {
              document.querySelector('.weather-icon').src = 'images/snow.png'
            }
            else if (data.weather[0].main == "Rain") {
              document.querySelector('.weather-icon').src = 'images/rain.png'
            }
            else if (data.weather[0].main == "Mist") {
              document.querySelector('.weather-icon').src = 'images/mist.png'
            }
            document.querySelector(".weather").style.opacity = "1";
          }
        } catch (error) {
          console.log(error);
        }
      }


      searb.addEventListener('click', () => {
        checkWeather(seari.value)
      })
