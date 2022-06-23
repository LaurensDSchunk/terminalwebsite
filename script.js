input = document.getElementById("shellIn");
input.focus();

input.addEventListener('blur', (e) => {  
  input.focus();
});