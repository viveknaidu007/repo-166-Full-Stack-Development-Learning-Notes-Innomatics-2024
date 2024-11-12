document.getElementById("result");
document.getElementById("search-btn");
document.getElementById("city")

let key = badbe9f38b736d7dbb0797f9a5dc9243


// function

// this is array function:
let getweather = () => {
    let cityValue = cityRef.value;

    if(cityValue.length ==0){
        result.innerHTML = "<h3 class="msg">please enter a city name</h3>
    }
    else{
        let url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    }
}