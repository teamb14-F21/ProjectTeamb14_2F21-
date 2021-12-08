



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
  lblDate4.className = ""
  lblDate4.style.color = "#000000"
  lblDate5.className = ""
  lblDate5.style.color = "#000000"
  lblCondition.className = ""
  lblCondition.style.color = "#000000"
  lblCondition1.className = ""
  lblCondition1.style.color = "#000000"
  lblCondition2.className = ""
  lblCondition2.style.color = "#000000"
  lblCondition3.className = ""
  lblCondition3.style.color = "#000000"
  lblCondition4.className = ""
  lblCondition4.style.color = "#000000"
  lblTemp.className = ""
  lblTemp.style.color = "#000000"
  lblTemp1.className = ""
  lblTemp1.style.color = "#000000"
  lblTemp2.className = ""
  lblTemp2.style.color = "#000000"
  lblTemp3.className = ""
  lblTemp3.style.color = "#000000"
  lblTemp4.className = ""
  lblTemp4.style.color = "#000000"
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
  lblTemp1.value = weather.current.temp_f
}

/*
 query = "SELECT conditions from temperature where indexs = 1;"
   
   if (req.status == 200) {
    results = JSON.parse(req.responseText)
    lblCondition.value = query
    }
    */