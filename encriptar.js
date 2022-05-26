function encriptar () {
            
    var palabra = document.querySelector(".text-area").value; 
    var palabraEncriptada;

    if(palabra === "á" || palabra === "é" || palabra === "í" || palabra === "ó" || palabra === "ú" 
    || palabra === "ä" || palabra === "ë" || palabra === "ï" || palabra === "ö" || palabra === "ü"
    || palabra === "à" || palabra === "è" || palabra === "ì" || palabra === "ò" || palabra === "ù"){
       palabraEncriptada = "No se permiten tildes";
       document.querySelector(".copiar").classList.remove("show");
    }

    else if (palabra.length === 0){
        palabraEncriptada = "No hay texto para encriptar";
        document.querySelector(".copiar").classList.remove("show");
    }

    else if (palabra != palabra.toLowerCase()){
        palabraEncriptada = "No se permiten mayusculas";
        document.querySelector(".copiar").classList.remove("show");
    }

    else{
        palabraEncriptada = palabra	
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");

        document.querySelector(".copiar").classList.add("show");
    }

    document.querySelector(".text-area2").value = palabraEncriptada;
}

var botonEncriptar = document.querySelector(".encriptar");
botonEncriptar.onclick = encriptar;
