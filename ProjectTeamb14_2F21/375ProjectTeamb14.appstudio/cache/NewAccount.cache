

btnCreate.onclick=function(){
  let first = inptFirstName.value
  let last = inptLastName.value
  let street = inptStreet.value
  let city = inptCity.value
  let zip = inptZipcode.value
  let newUsername = inptNewUsername.value
  let newPassword = inptNewPassword.value
  
  query = "INSERT INTO customer (first_name, last_name, street, city, zip, customer_username, customer_password) VALUES ('" + first + "', '" + last + "', '" + street + "', '" + city + "', '" + zip + "', '" + newUsername + "', '" + newPassword + "')"
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500){    // for our server - this means the insert succeeded
            lblErrors.value = "You have successfully registered!"
            ChangeForm(Login)
            }
        else
            lblErrors.value = "There was a problem with registering."

}
}
