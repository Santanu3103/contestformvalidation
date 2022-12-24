let email =  localStorage.getItem('mail');
let userName = document.getElementById('fulname');
let usermail = document.getElementById('email');
let userpw = document.getElementById('password');
let sucess = document.getElementsByClassName("message_sucess")[0];
let btn = document.getElementsByClassName("formbutton2")[0];

console.log(sucess)
//checking

function showData(){
    if ( localStorage.getItem('name') === null ) {
        userName.innerHTML=`Full Name :`;
        usermail.innerHTML=`Email : `;
        userpw.innerHTML=`Password :`;
        sucess.style.display ='none'; 
        btn.disabled =true;  
       }else{
        document.getElementById('signup').style.color='grey';
        let storedName =  localStorage.getItem('name');
        let storedPw =  localStorage.getItem('pw');
       
          userName.innerHTML=`Full Name :  ${storedName}`;
          usermail.innerHTML=`Email : ${email}`;
          userpw.innerHTML=`Password : ${storedPw}`;
           
          sucess.style.display ='block';
          sucess.style.color='green'; 
       }
   
   }

 showData()

 function logout(){
    sucess.style.display ='none'; 
    localStorage.clear();   
    window.location.href='index.html';
 }