let nombre = document.getElementById('nombre');
let password = document.getElementById ('password');
let mensaje = document.getElementById ('msg');
mensaje.style.color = "purple";

let form = document.getElementById ('form');
form.addEventListener ('submit', function(evento){
    evento.preventDefault();

let mensaje = [];

if(nombre.value != 'admin' && password.value != '123' ){
    window.alert('Verifique la información');
}
else if (nombre.value != "admin"){
    window.alert('Verifique su ususario');
}
else if (password.value != "123"){
    window.alert('Verifique su password');
}
else if (nombre.value === 'admin' && password.value === '123' ){
    window.alert('Bienvenido al sistema');
    window.location="blog.html";    
}

// msg.innerHTML = mensaje.join (', ');

});