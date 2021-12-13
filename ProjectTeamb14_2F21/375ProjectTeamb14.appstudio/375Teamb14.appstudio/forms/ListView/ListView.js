let weather
sldrInterest = [] 

/*
ListView.onshow=function(){
  lblSaved.className = ""
  lblSaved.style.color = "#FFFFFF"
  lblListView.className = ""
  lblListView.style.color = "#FFFFFF"
  lblMapView.className = ""
  lblMapView.style.color = "#FFFFFF"
  lblWeather.className = ""
  lblWeather.style.color = "#FFFFFF"
  slctFilters.className = ""
  slctFilters.style.color = "#000000"
  lblBusName.className = ""
  lblBusName.style.color = "#000000"
  lblBusName1.className = ""
  lblBusName1.style.color = "#000000"
  lblBusName2.className = ""
  lblBusName2.style.color = "#000000"
  lblLocation1.className = ""
  lblLocation1.style.color = "#000000"
  lblLocation2.className = ""
  lblLocation2.style.color = "#000000"
  lblLocation3.className = ""
  lblLocation3.style.color = "#000000"
  lblHours.className = ""
  lblHours.style.color = "#000000"
  lblHours1.className = ""
  lblHours1.style.color = "#000000"
  lblHours2.className = ""
  lblHours2.style.color = "#000000"
  lblRating.className = ""
  lblRating.style.color = "#FF0000"
  lblRating1.className = ""
  lblRating1.style.color = "#FF0000"
  lblRating2.className = ""
  lblRating2.style.color = "#FF0000"
  lblInterestLevel.className = ""
  lblInterestLevel.style.color = "#000000"
  lblInterestLevel1.className = ""
  lblInterestLevel1.style.color = "#000000"
  lblInterestLevel2.className = ""
  lblInterestLevel2.style.color = "#000000"

}
*/
imgWeather.onclick=function(){
  ChangeForm(Weather)
}
lblWeather.onclick=function(){
  ChangeForm(Weather)
}

imgListView.onclick=function(){
  ChangeForm(ListView)
}

lblListView.onclick=function(){
    ChangeForm(ListView)
}





// Cindy Nov 2021 api key: c515880619500d7f6d1e3731af1c40a7
// team key:  ac52bdb5ac1a416cb87215350211711
// URL: http://api.weatherapi.com/v1/forecast.json?Key=ac52bdb5ac1a416cb87215350211711&q=68131

 
let zipcode = 68178

function getWeather() {
  let Key = 'ac52bdb5ac1a416cb87215350211711'
  fetch('http://api.weatherapi.com/v1/forecast.json?Key=ac52bdb5ac1a416cb87215350211711&q=68131&days=5')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
      freeDataWeather(data) 
    })
  .catch(function() {
    // catch any errors
  })
}

function freeDataWeather(apiData) {
    // just getting temp for proof of concept
   console.log(`in freeData, temp is ${apiData.current.temp_f}`)
    // put api data into global variable so can use in other forms
    weather = apiData  
}




/*
ListView.onshow=function(){
getWeather()
 lblBusName.value = yelper.business[0].name
}
*/

ListView.onshow=function(){
getWeather()
console.log(`${yelper.businesses[0].name}`)
 lblBusName.value = yelper.businesses[0].name
 imgResult.src = yelper.businesses[0].image_url
 lblLocation1.value = yelper.businesses[0].location.address1
 lblRating.value = yelper.businesses[0].rating
 lblHours.value = "(T): " + yelper.businesses[0].display_phone
 lblPrice.value = "Price: " + yelper.businesses[0].price
 lblCategory.value = "Category: " + yelper.businesses[0].categories[0].title
 
 lblBusName1.value = yelper.businesses[1].name
 imgResult1.src = yelper.businesses[1].image_url
 lblLocation2.value = yelper.businesses[1].location.address1
 lblRating1.value = yelper.businesses[1].rating
 lblHours1.value = "(T): " + yelper.businesses[1].display_phone
 lblPrice1.value = "Price: " + yelper.businesses[1].price
 lblCategory1.value = "Category: " + yelper.businesses[1].categories[0].title
 
 lblBusName2.value = yelper.businesses[2].name
 imgResult2.src = yelper.businesses[2].image_url
 lblLocation3.value = yelper.businesses[2].location.address1
 lblRating2.value = yelper.businesses[2].rating
 lblHours2.value = "(T): " + yelper.businesses[2].display_phone
 lblPrice2.value = "Price: " + yelper.businesses[2].price
 lblCategory2.value = "Category: " + yelper.businesses[2].categories[0].title
 
}

