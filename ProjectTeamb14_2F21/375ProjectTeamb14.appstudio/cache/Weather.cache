



Weather.onshow=function(){
  lblSaved1.className = ""
  lblSaved1.style.color = "#FFFFFF"
  lblListView1.className = ""
  lblListView1.style.color = "#FFFFFF"
  lblMapView1.className = ""
  lblMapView1.style.color = "#FFFFFF"
  lblWeather1.className = ""
  lblWeather1.style.color = "#FFFFFF"
  lblDate1.className = ""
  lblDate1.style.color = "#000000"
  lblDate2.className = ""
  lblDate2.style.color = "#000000"
  lblDate3.className = ""
  lblDate3.style.color = "#000000"
  lblCondition.className = ""
  lblCondition.style.color = "#000000"
  lblCondition1.className = ""
  lblCondition1.style.color = "#000000"
  lblCondition2.className = ""
  lblCondition2.style.color = "#000000"
  lblTemp.className = ""
  lblTemp.style.color = "#000000"
  lblTemp1.className = ""
  lblTemp1.style.color = "#000000"
  lblTemp2.className = ""
  lblTemp2.style.color = "#000000"

}

imgWeather1.onclick=function(){
  ChangeForm(Weather)
}
lblWeather1.onclick=function(){
  ChangeForm(Weather)
}

imgListView1.onclick=function(){
  ChangeForm(ListView)
}

lblListView1.onclick=function(){
    ChangeForm(ListView)
}

imgSaved1.onclick=function(){
  ChangeForm(Saved)
}

lblSaved1.onclick=function(){
  ChangeForm(Saved)
}

imgMap1.onclick=function(){
  ChangeForm(MapView)
}

lblMapView1.onclick=function(){
  ChangeForm(MapView)
}

 Weather.onshow=function(){
 console.log(weather)

 imgWeatherIcon.src = weather.forecast.forecastday[0].day.condition.icon
  lblDate1.value = weather.forecast.forecastday[0].date
  lblTemp.value = weather.forecast.forecastday[0].day.avgtemp_f + "°F"
  lblCondition.value = weather.forecast.forecastday[0].day.condition.text
  
  imgWeatherIcon1.src = weather.forecast.forecastday[1].day.condition.icon
  lblDate2.value = weather.forecast.forecastday[1].date
  lblTemp1.value = weather.forecast.forecastday[1].day.avgtemp_f + "°F"
  lblCondition1.value = weather.forecast.forecastday[1].day.condition.text
  
  imgWeatherIcon2.src = weather.forecast.forecastday[2].day.condition.icon
  lblDate3.value = weather.forecast.forecastday[2].date
  lblTemp2.value = weather.forecast.forecastday[2].day.avgtemp_f + "°F"
  lblCondition2.value = weather.forecast.forecastday[2].day.condition.text
}

/*
 query = "SELECT conditions from temperature where indexs = 1;"
   
   if (req.status == 200) {
    results = JSON.parse(req.responseText)
    lblCondition.value = query
    }
    */