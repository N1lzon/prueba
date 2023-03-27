window.addEventListener("load",init);

function init(){
    document.getElementById("motivo").addEventListener("change",revisar);
}

function revisar(){
    if(document.getElementById("motivo").value!="info"){
        document.getElementById("reclamo-text").style.display="block";
    }else{
        document.getElementById("reclamo-text").style.display="none";
    }
}

function texto(){
    if( document.getElementById("nombre").value!="" && document.getElementById("tel").value!="" && document.getElementById("correo").value!=""){
        return true;
    }else{
        return false;
    }
}

function validar(){
    if(texto()==true){
        alert("Correo enviado!")
    }else{
        alert("Complete todos los datos requeridos.")
    }

}