var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short_desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI(capitalSearch){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=a67a609351059c9f00989353f098cb30`

    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15)) + '°C'
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')
        

        body.setAttribute('class', 'hot')
        if(temp < 18){
            body.setAttribute('class', 'cold')
        }

        if(temp < 20){
            body.setAttribute('class', 'cool')
        }

        if(temp < 27){
            body.setAttribute('class', 'warm')
        }
        
        if(temp > 29) {
            body.setAttribute('class', 'hot')
        }

    }else{
        content.classList.add('hide')
    }
}



search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)/*neu key down khong enter thi mac dinh ha noi */
    }
})

changeWeatherUI('Ha Noi')/*mac dinh la ha noi *//*neu key down khong enter thi mac dinh ha noi */