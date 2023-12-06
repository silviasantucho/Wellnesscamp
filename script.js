let form = document.getElementById("form")


if(form){
	form.addEventListener('submit', ejecutaEstaFuncion)
}


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

//// JUEGO
 var Ps = [
	        '1. ¿Cúal es el nombre de los 7 principales centros energéticos?' + '<br><br>' + 'a. Pranayamas' + '<br>' + 'b. Chakras' + '<br>' + 'c. Ayurveda' + '<br>' + 'd. Mudras' + '<br>',
	        '2. El estado de iluminación se denomina...' + '<br><br>' + 'a. Nirvana' + '<br>' + 'b. Samsara' + '<br>' + 'c. Om' + '<br>' + 'd. Corazón' + '<br>',
	        '3. ¿El yoga es una disciplina?' + '<br><br>' + 'a. Moderna' + '<br>' + 'b. Clásica' + '<br>' + 'c. Milenaria' + '<br>' + 'd. Contemporánea' + '<br>',
	        '4. El nombre de Ayurveda corresponde a una...' + '<br><br>' + 'a. Montaña' + '<br>' + 'b. Filosofía' + '<br>' + 'c. Maestro' + '<br>' + 'd. Medicina' + '<br>',
	        '5. ¿Cómo se llaman a los ejercicios de respiración en yoga?' + '<br><br>' + 'a. Pranayamas' + '<br>' + 'b. Khatakali' + '<br>' + 'c. Asanas' + '<br>' + 'd. Loto' + '<br>',
	        '6. Se relaja la mente a través de ...' + '<br><br>' + 'a. Meditación' + '<br>' + 'b. Esfuerzo' + '<br>' + 'c. Disciplina' + '<br>' + 'd. Lenguaje' + '<br>',
	        '7. ¿Cómo se llame el quinto chakra?' + '<br><br>' + 'a. Vishuda o garganta' + '<br>' + 'b. Anahata ó corazón' + '<br>' + 'c. Ajnia o tercer ojo' + '<br>' + 'd. Manipuri o raíz' + '<br>',	
	        '8. ¿Se denomina mantras a?' + '<br><br>' + 'a. Sonidos' + '<br>' + 'b. Alimentos' + '<br>' + 'c. Palabras sanscritas' + '<br>' + 'd. Ninguna es correcta' + '<br>',
	        '9. ¿El término asanas corresponde a?' + '<br><br>' + 'a. Ciudad' + '<br>' + 'b. Posturas' + '<br>' + 'c. Disciplina oriental' + '<br>' + 'd. Maestro' + '<br>',
	        '10. En qué país tiene origen el yoga?' + '<br><br>' + 'a. Argentina' + '<br>' + 'b. Francia' + '<br>' + 'c. India' + '<br>' + 'd. Indonesia' + '<br>',
	            ];	
	    //Array respuestas correctas  
	    var Rs = ["b", "a", "c", "d", "a", "a", "a", "a", "b", "c"];

	    //Array foto numero pregunta
	    var fPregunta = ["img/juego/p1.png", 'img/juego/p2.png', 'img/juego/p3.png', 'img/juego/p4.png', 'img/juego/p5.png', 'img/juego/p6.png', 'img/juego/p7.png', 'img/juego/p8.png', 'img/juego/p9.png', 'img/juego/p10.png',];

	    //General
	    var respuestasCorrectas;
	    var preguntaActual;
	    var puntajeFinal;
	    var usuarioR;

	
	    function iniciar()
	    {
	        respuestasCorrectas = 0;
	        preguntaActual = 0;
	        puntajeFinal = 0;
	        document.getElementById('pregunta').innerHTML = Ps[preguntaActual];
	        document.getElementById('juego').style.display = 'block';
	        document.getElementById('botonIniciar').style.display = 'none';
			document.getElementById("preguntas").style.display = 'block';
			document.getElementById("imagenJuego").style.display = 'initial';
	    }

	    //Chequea si el tipo de dato Y respuesta es correcta. Calcula puntos  y cambia la pregunta
	    function responder()
	    {
	        usuarioR = document.preguntas.respuesta.value;
			document.getElementById("inputRespuesta").value = "";
	        if (usuarioR != 'a' && usuarioR != 'b' && usuarioR != 'c' && usuarioR != 'd')
	        {
	            alert('Error. Ingrese la opción correcta');
	        } else {
	            if(usuarioR == Rs[preguntaActual])
	            {
	                alert('Respuesta Correcta!');
	                respuestasCorrectas++;
	            } else {
	                alert('Respuesta Incorrecta!');
	            }
	            calcular();
	            cambioPregunta();
	        }
	    }

	    //Calcula puntos y multiplica
	    function calcular()
	    {
	        if(usuarioR == Rs[preguntaActual])
	        {
	            puntosRespuesta = (preguntaActual+1) * respuestasCorrectas;
	            puntajeFinal += puntosRespuesta;
	        } else {
	            puntosRespuesta = 0;
	            respuestasCorrectas = 0;
	        }
	    }

	    //Cambia la pregunta e imágenes, muestra el final puntuación total
	    function cambioPregunta()
	    {
	        preguntaActual++;
	        if(preguntaActual>=Ps.length)
	        {
	            // document.getElementById('juego').innerHTML = 'Finalizó el Juego' + '<br>' + 'Lograste ' + puntajeFinal + ' puntos' + '<br><br>';
				alert("Muy bien! Ganaste el juego con: " + puntajeFinal + " puntos");
				document.getElementById("preguntas").style.display = 'none';
	        document.getElementById('botonIniciar').style.display = 'initial';
				document.getElementById("imagenJuego").style.display = 'none';
	        } else {
	            document.getElementById('pregunta').innerHTML = Ps[preguntaActual];
	            document.getElementById('img').src = fPregunta[preguntaActual];
	            document.preguntas.respuesta.value = '';
	        }
		    
	    }
