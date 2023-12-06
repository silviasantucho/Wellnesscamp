let form = document.getElementById("form")



form.addEventListener('submit', ejecutaEstaFuncion)

function ejecutaEstaFuncion(event){
    event.preventDefault();
    let nombre = document.getElementById("name")
    let mail = document.getElementById("email")
    let mensaje = document.getElementById("message")

    if(nombre.value.length < 5){
        alert("El nombre tiene que tener mas de 5 caracteres")
    }
    if(mail.value.length < 5){
        alert("El Mail tiene que tener mas de 5 caracteres")
    }
    if(mensaje.value.length < 10){
        alert("El Mensaje tiene que tener mas de 10 caracteres")
    }
}