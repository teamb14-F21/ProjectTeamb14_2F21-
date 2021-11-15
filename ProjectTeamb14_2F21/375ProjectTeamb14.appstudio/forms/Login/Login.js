let query = ""
let req = {}
let results = []
let netID = "rnd94709"
let groupID = "375groupb14"
let pw = "Marley0427"

btnLogin.onclick=function(){
  let username = inptUsername.value
  let password = inptPassword.value
  
  query = "SELECT * FROM customer WHERE customer_username = '" + username + "' AND customer_password = '" + password +"'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      lblError.value = "Incorrect Username or Password, please try again!"
    else
        // CHANGE THE NEWACCOUNT FORM BELOW TO THE HOMEPAGE FORM
        ChangeForm(NewAccount)
}

}

btnNewAccount.onclick=function(){
  ChangeForm(NewAccount)
}
