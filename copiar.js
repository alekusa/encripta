
function copiar(e) {
  e.preventDefault();
  var textarea = document.querySelector(".text-area2").value;
  navigator.clipboard.writeText(textarea);
    
    document.querySelector(".texto-copiado").classList.add("show");
    setTimeout(() => {
      document.querySelector(".texto-copiado").classList.remove("show");
    }, 2000);
      
}

var copiarBoton = document.querySelector(".copiar");
copiarBoton.onclick = copiar;
