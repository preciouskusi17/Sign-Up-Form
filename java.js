let password1=document.querySelector('.password1');
let div=document.querySelector('.div');
let password2=document.querySelector('.password2');



password1.addEventListener('keyup', ()=>{
    if (password1.value==password2.value &&password1.value!=='' && password2.value !==''){
        password1.setAttribute('style','outline: none; border: solid green 3px;');
        password2.setAttribute('style','outline: none; border: solid green 3px;');
        div.textContent='';
    }else if(password1.value == '' | password2.value == ''){
        div.textContent='Password is required'

    } else {
        div.textContent='* Passwords do not match'
    }
});
password2.addEventListener('keyup', ()=>{
    if (password1.value==password2.value &&password1.value!=='' && password2.value !==''){
        password1.setAttribute('style','outline: none; border: solid green 3px;');
        password2.setAttribute('style','outline: none; border: solid green 3px;');
        div.textContent='';
    }else if(password1.value == '' | password2.value == ''){
        div.textContent='Password is required'

    } else {
        div.textContent='* Passwords do not match'
    }
})

