
const apiKey = "05d439227e2b47391500b31db0bcb8c2"
const searchBox = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")


async function CheckWeather(city) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    const response = await fetch(url)
    var data1 = await response.json()
    const lat = data1[0].lat
    const lon = data1[0].lon
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    const response1 = await fetch(apiurl)
    var data = await response1.json()

    
    console.log(data,data.name)


    document.querySelector(".city").innerHTML = searchBox.value + `<p style= font-size:18px>${data.name}</p>`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
    document.querySelector(".temp").innerHTML = data.main.temp + "°c"


}

searchBtn.addEventListener("click",()=> {
    CheckWeather(searchBox.value)
})
