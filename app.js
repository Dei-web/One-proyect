let ArrayName = [];

let juegosorteo = false;    

function agregarAmigo() {

    if (juegosorteo) {
        reiniciarAplicacion();
    }



    let Amigos = document.getElementById("amigo").value;
    if (Amigos.trim() !=="") {
        ArrayName.push(Amigos); 

        document.getElementById("amigo").value = "";
        mostrarAmigos();
    } else {
        alert("Ingrese un nombre");
    }

    
}

function mostrarAmigos() {
    let amigos = "";   
    for (let i = 0; i < ArrayName.length; i++) {
        amigos += <li>${ArrayName[i]}</li>;
    }
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos;
    
}

function sortearAmigo() {
    const amigoSorteado = ArrayName[Math.floor(Math.random() * ArrayName.length)];
    if(ArrayName.length === 0 || ArrayName.length === 1){ 
        alert("No hay amigos para sortear");
    }else{
        document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
        listaAmigos.innerHTML = "";
        juegosorteo = true; 
    }
    
    

}

function reiniciarAplicacion() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
    ArrayName = [];
}