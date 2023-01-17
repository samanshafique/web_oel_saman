const form = document.querySelector("form")
nField = form.querySelector(".name"),
nInput = nField.querySelector("input");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


form.onsubmit = (e)=>{
  e.preventDefault();
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();


  setTimeout(()=>{ //remove shake class after 500ms
    nField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  nInput.onkeyup = ()=>{checkName();}
  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();} 


  function checkName(){ 
    let pattern = /^[A-Za-z]+$/; 
    if(!nInput.value.match(pattern)){ 
      nField.classList.add("error");
      nField.classList.remove("valid");
      let errorTxt = nField.querySelector(".error-txt");
     
      (nInput.value != "") ? errorTxt.innerText = "Enter a valid Name" : errorTxt.innerText = "Name can't be blank";
    }else{ 
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }




  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  function checkPass(){ 

    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/; //pattern for validate password
    if(!pInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (pInput.value != "") ? errorTxt.innerText = "Enter a valid Password" : errorTxt.innerText = "Password can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }


  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("file:///C:/Users/DELL/Desktop/WEblabsites/Oel%20Web%20saman/Dashboard.html"); //redirecting user to the specified url which is inside action attribute of form tag
  }
};