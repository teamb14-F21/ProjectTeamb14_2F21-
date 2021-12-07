let query1 = ""


btnUpdatePassword.onclick=function(){
  let username1 = inptUsername1.value
  let street1 = inptStreet1.value
  let newPassword = inptNewPass1.value
  
query1 = "UPDATE customer (password) SET customer_password = '" + newPassword + "' WHERE customer_username = '" + username1 + "' AND street = '" + street1 +"'"  

  if (req.status == 200) {
        if (req.responseText == 500)   
            ChangeForm(Login)
        else
            alert("Incorrect username or street")
    } else   // transit error
        alert("Error: " + req.status)

}

btnNewAccount.onclick=function(){
  ChangeForm(NewAccount)
}

btnUpdatePasswordCopy.onclick=function(){
  ChangeForm(Login)
}
