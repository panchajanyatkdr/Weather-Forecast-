const weatherCheck = async (name) => {
    const apiId = "1533e291bf3767eb25707ae4d329a1ca";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiId}`

    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);


    if (data.name === undefined) {
        const box = document.querySelector(".forcastDiv");
        box.style.display = "none";
        const para = document.querySelector("#err");
        para.style.display = "block";
        para.innerHTML = "Invalid City Name"
    } else {
        const box = document.querySelector(".forcastDiv");
        box.style.display = "block";
        const para = document.querySelector("#err");
        para.style.display = "none";

    }
    const img = document.querySelector(".weatherIMG")
    if (data.weather[0].main == "Clouds") {
        img.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        img.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        img.src = "images/rain.png"
    } else if (data.weather[0].main == "Mist") {
        img.src = "images/mist.png"
    } else if (data.weather[0].main == "Snow") {
        img.src = "images/snow.png"
    } else if (data.weather[0].main == "Drizzle") {
        img.src = "images/drizzle.png"
    } else {
        img.src = "images/clouds.png"
    }

    document.querySelector("#city").innerHTML = data.name;

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector("#decrip").innerHTML = data.weather[0].description;

    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";

    document.querySelector("#wSpeed").innerHTML = data.wind.speed + " km/hr"
}
document.querySelector("#search").addEventListener("click", () => {
    const location = document.querySelector("#input").value;
    weatherCheck(location);

})
