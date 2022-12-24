


let error = document.getElementsByClassName("form_massage_error")[0]; 
    error.style.display ='none';

 function validate(){

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

let name = document.getElementById('signupUsernameinput');
        console.log(name.value);
let mail = document.getElementById('signupUsermailinput');
        console.log(mail.value);
let pw = document.getElementById('paswordinput');
        console.log(pw.value);
let pwc = document.getElementById('passwordconfirminput');
        console.log(pwc.value); 

    
    if(name.value.length == 0){

        error.style.display ='block';

    }else if(pw.value.length == 0){

        error.style.display ='block';
    
    }else if(name.value.length == 0 && pw.value.length == 0){

        error.style.display ='block';
       
    }else if( pw.value !== pwc.value){

        error.style.display ='block';
        error.innerHTML= "Password dosn't match";
    }
    else{
         localStorage.setItem('name', name.value);
         localStorage.setItem('mail', mail.value);
         localStorage.setItem('pw', pw.value);
       
       
       setTimeout(() => {
        window.location.href='pofilepage.html';
      
       }, 100);
        // document.getElementById('signup').classList.add('form_hidden');
        // document.getElementsByClassName('profileSummery')[0].classList.toggle('form_hidden');
        
}
}



