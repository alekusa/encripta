function descencriptador(){

    var palabra = document.querySelector(".text-area").value;
    var palabraDescencriptada;

	if(palabra === "á" || palabra === "é" || palabra === "í" || palabra === "ó" || palabra === "ú" 
    || palabra === "ä" || palabra === "ë" || palabra === "ï" || palabra === "ö" || palabra === "ü"
    || palabra === "à" || palabra === "è" || palabra === "ì" || palabra === "ò" || palabra === "ù"){
       palabraDescencriptada = "No se permiten tildes";
	   document.querySelector(".copiar").classList.remove("show");
    }

	else if (palabra.length === 0){
		palabraDescencriptada = "No hay texto para descencriptar";	
		document.querySelector(".copiar").classList.remove("show");	
	}

	else if(palabra != palabra.toLowerCase()){
		palabraDescencriptada = "No se permiten mayusculas";
		document.querySelector(".copiar").classList.remove("show");
	}

	else{
		palabraDescencriptada = palabra		
		.replaceAll("ai","a")
		.replaceAll("enter","e")
		.replaceAll("imes","i")
		.replaceAll("ober","o")
		.replaceAll("ufat","u");			
		document.querySelector(".copiar").classList.add("show");
	}
		
    document.querySelector(".text-area2").value = palabraDescencriptada;
}	

var botonDescencriptar = document.querySelector(".descencriptar");
botonDescencriptar.onclick = descencriptador;
