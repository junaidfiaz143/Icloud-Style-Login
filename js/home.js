function log_in(arg){
	var password =  document.getElementById("txt_password").value
	var username =  document.getElementById("txt_username").value

	var user_auth = false
	var pas_auth =  false

	if (username == "research"){
		document.getElementById("lbl_username_error").style.display = "none"
		user_auth = true
	}else{
		document.getElementById("lbl_username_error").style.display = "block"
		user_auth = false
	}

	if (password == "research"){
		pass_auth = true
		document.getElementById("lbl_password_error").style.display = "none"
	}else{
		document.getElementById("lbl_password_error").style.display = "block"
		pass_auth = false
	}

	if (user_auth==true && pass_auth==true){
		document.getElementById("login_form").className = "animate_form";
		document.getElementById("layer_login").className = "animate_layer";
	}
}