//calling basic functions
function main()
{
	let email = document.getElementById('email').value;
	let pass = document.getElementById('psw').value;
	let name = document.getElementById('name').value;
	let rpsw = document.getElementById('rpsw').value;
	let errorEmail = document.getElementById('errorEmail');
	let errorPsw = document.getElementById('errorPsw');
	let errorRptPsw = document.getElementById('errorRptPsw');

	if (mailValidate(email) != false && validPasswords(pass,rpsw) == true && pswValidate(pass)[0] == true ) 
	{
		sendJSON(pass,email,name,rpsw);
		document.getElementById('psw').value = '';
   	document.getElementById('name').value = '';
   	document.getElementById('email').value = '';
   	document.getElementById('rpsw').value = '' ;
   	alert("json sent");
	}

	if (mailValidate(email) == false && email != '') 
	{
		email = '';
		errorEmail.innerHTML = 'Enter correct email';
	}
	else errorEmail.innerHTML = '';
		
	if (pswValidate(pass)[0] == false && pass !== '') errorPsw.innerHTML = pswValidate(pass)[1];
	else errorPsw.innerHTML = '';

	if (pswValidate(pass)[0] == true && validPasswords(pass,rpsw) === false && rpsw !== '' ) 
		errorRptPsw.innerHTML = 'Passwords are not equals';
	else errorRptPsw.innerHTML = '';
}

// send json
 function sendJSON(pass,email,name,rpsw) {
    let result = '';
    let xhr = new XMLHttpRequest();
	 let url = 'https://webappforazure20210921211138.azurewebsites.net/Home/Register';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () 
    {  
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      	result  = xhr.responseText;
      	console.log(result);
      }
    };
    let data = JSON.stringify({ 'name': name, 'email': email, 'psw': pass, 'rpsw': rpsw });
    xhr.send(data);
  }

//mail validation
function mailValidate(email)
{
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(email) == false) {
      return false;
   }
}

// check password and repeat password
function validPasswords(pass,rpsw)
{
	if (pass !== rpsw)
	{
		return false
	}
	else
	{
		return true
	}
}

//various password errors
function pswValidate(pass) 
{
	if (typeof pass !== 'string') 
	{
		pass = '';
		return [false, 'Error in validate passowrd']
	}
	if (pass.length < 8) 
	{
		pass = '';
		return [false, 'Password must have at least 8 characters']
	}
	if (pass.search(/[a-zа-я]/) === -1 ) 
	{
		pass = '';
		return [false, 'Password must contain at least one Lower case letter']
	}
	if (pass.search(/[A-ZА-Я]/) === -1) 
	{
		pass = '';
		return [false, 'Password must contain at least one Upper case letter']
	}
	if (pass.search(/[0123456789]/) === -1) 
	{
		pass = '';
		return [false, 'Password must contain at least one digit']
	}
	return [true];
}

// count of backgrounds
let bg = 0;
function changeBackground() 
{
	if(bg<3&&bg>=0)
	{
		bg++;
	}
	else 
	{
	bg=1;
	}
	condition(bg);
}

//conditions for background
function condition(k)
{
	let errorPsw = document.getElementById('errorPsw');
	let errorEmail = document.getElementById('errorEmail');
	let errorRptPsw = document.getElementById('errorRptPsw');
	switch (bg) {
  		case 1:
  			document.body.style.background = 'url(images/1bg.jpg)  no-repeat fixed 100% 50%  ';
			document.body.style.backgroundSize = 'cover';
			errorPsw.style.color = '#e5e8f5';
			errorPsw.innerHTML = '';
			errorEmail.style.color = '#e5e8f5';
			errorEmail.innerHTML = '';
			errorRptPsw.style.color = '#e5e8f5';
			errorRptPsw.innerHTML = '';
    	break;
  		case 2:
  			document.body.style.background = 'url(images/2bg.png) no-repeat fixed 100% 50% ';
			document.body.style.backgroundSize = 'cover';
			errorPsw.style.color = '#ffabab';
			errorPsw.innerHTML = '';
			errorEmail.style.color = '#ffabab';
			errorEmail.innerHTML = '';
			errorRptPsw.style.color = '#ffabab';
			errorRptPsw.innerHTML = '';
    	break;
  		case 3:
  			document.body.style.background = 'url(images/3bg.jpg) no-repeat fixed 100% 50%';
			document.body.style.backgroundSize = 'cover';
			errorPsw.style.color = '#431b1b';
			errorPsw.innerHTML = '';
			errorEmail.style.color = '#431b1b';
			errorEmail.innerHTML = '';
			errorRptPsw.style.color = '#431b1b';
			errorRptPsw.innerHTML = '';
    	break;
	}
}


