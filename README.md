# One-proyect

# Sorteador de Amigos

Esta aplicación permite agregar amigos a una lista y realizar un sorteo para seleccionar uno al azar.

## Descripción

El proyecto consta de un sencillo script JavaScript que permite:
- Agregar amigos a una lista.
- Mostrar la lista de amigos.
- Realizar un sorteo para seleccionar un amigo al azar.
- Reiniciar la aplicación para empezar de nuevo.

## Funcionalidades

1. **Agregar Amigo**: Permite al usuario ingresar un nombre en un campo de texto. Si el campo está vacío, muestra una alerta solicitando que ingrese un nombre.

2. **Mostrar Amigos**: Actualiza dinámicamente una lista en la interfaz con los nombres de amigos ingresados.

3. **Sortear Amigo**: Selecciona aleatoriamente un amigo de la lista y lo muestra en la interfaz. Si no hay amigos para sortear, se muestra una alerta.

4. **Reiniciar Aplicación**: Limpia la lista de amigos y el resultado del sorteo, permitiendo empezar de nuevo.

## Uso

1. **Agregar Amigos**:
   - Ingresa un nombre en el campo de texto.
   - Haz clic en el botón para agregar el amigo.

2. **Sortear Amigo**:
   - Haz clic en el botón para realizar el sorteo.
   - El nombre del amigo sorteado se mostrará en la interfaz.

3. **Reiniciar**:
   - Si deseas reiniciar la aplicación, el sorteo se reiniciará automáticamente al agregar un nuevo amigo después de haber realizado un sorteo.

## Ejemplo de Código

Aquí tienes el código principal de la aplicación:

```javascript
let ArrayName = [];
let juegosorteo = false;    

function agregarAmigo() {
    if (juegosorteo) {
        reiniciarAplicacion();
    }

    let Amigos = document.getElementById("amigo").value;
    if (Amigos.trim() !== "") {
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
        amigos += `<li>${ArrayName[i]}</li>`;
    }
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos;
}

function sortearAmigo() {
    const amigoSorteado = ArrayName[Math.floor(Math.random() * ArrayName.length)];
    if (ArrayName.length === 0 || ArrayName.length === 1) { 
        alert("No hay amigos para sortear");
    } else {
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
