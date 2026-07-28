const input = document.getElementById('inputPass');
const icon = document.getElementById('toggleIcon');
const rule1 = document.getElementById('rule1');
const rule2 = document.getElementById('rule2');
const rule3 = document.getElementById('rule3');
const rule4 = document.getElementById('rule4');

function viewPass(){
    if(input.type === 'text'){
        input.type='password'
        icon.classList.add('fa-eye')
        icon.classList.remove('fa-eye-slash')
    }
    else{
        input.type='text';
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }
}

function checkPass(){
   if(input.value.length >= 8){
    rule1.style.color='green'
    rule1.textContent='✓ '+ rule1.textContent
   }
   if(/[A-Z]/.test(input.value) ){
    rule2.style.color='green'
    rule2.textContent='✓ '+ rule2.textContent
   }
   if(/[0-9]/.test(input.value)){
    rule3.style.color='green'
    rule3.textContent='✓ '+ rule3.textContent
   }
   if(/[^A-Za-z0-9]/.test(input.value)){
    rule4.style.color='green'
    rule4.textContent='✓ '+ rule4.textContent
   }

}