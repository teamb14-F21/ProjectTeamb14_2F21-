let query = ""
let req = {}
let results = []
let netID = "rnd94709"
let groupID = "375groupb14"
let pw = "Marley0427"
let yelper

const extraHeaders = {
    method: 'get',
    headers: new Headers({
        'Authorization': "Bearer RzQPCrzmAgbYjUmeXMFQn2SzRGOWSzTUmHB6MfuX_ZYDBnqiUNrcw_VVIO_WjFpEWZ9vYlJ8mxo1Yj0bknYj7-zz--yk1Vb-5t9oENOnXlcesoA1OKXjeJk4YBSlYXYx",
        
        "x-cors-grida-api-key" : "3260e5c6-382f-4275-93ac-54cbfcd3e6b5"
    })
}

  let locations = "Omaha"
  let term = "restaurant"
  let price = 2
  
let URL = 'https://cors.bridged.cc/https://api.yelp.com/v3/businesses/search?location=' + locations + '&term=' + term + '&price=' + price
function getYelp() {
  fetch(URL,extraHeaders)
    .then(function(response) {  
        return response.json()
    })
    .then(function(data) {
        console.log(`in second then with data ${data.businesses[0].name}`)
        freeData(data)
    })
    .catch(function() {
        // catch errors
    })
}

function freeData(apiData) {
    yelper = apiData
}


btnLogin.onclick=function(){
  let username = inptUsername.value
  let password = inptPassword.value
  getYelp()
  query = "SELECT * FROM customer WHERE customer_username = '" + username + "' AND customer_password = '" + password +"'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      lblError.value = "Incorrect Username or Password, please try again!"
    else
        // CHANGE THE NEWACCOUNT FORM BELOW TO THE HOMEPAGE FORM
        
        ChangeForm(ListView)
}

}

btnNewAccount.onclick=function(){
  ChangeForm(NewAccount)
}

btnNewAccountCopy.onclick=function(){
  ChangeForm(ForgotPassword)
}
