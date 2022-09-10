let inputTexto = document.getElementsByClassName("input-texto");
let mensaje = document.getElementsByClassName("mensaje");

const btnEncriptar = () => {
    const textoEncriptado = encriptar(inputTexto[0].value);
    
    mensaje[0].style.display = "inline"
    mensaje[0].value = textoEncriptado;
    document.getElementById("muneco").style.display = "none";
    document.getElementsByClassName("no-mensaje")[0].style.display = "none";
    document.getElementsByClassName("ingrese-mensaje")[0].style.display = "none";
    document.getElementsByClassName("copiar")[0].style.display = "inline";

    inputTexto[0].value = "";
}

const btnDesencriptar = () => {
    const textoEncriptado = desencriptar(inputTexto[0].value);

    mensaje[0].style.display = "inline"
    mensaje[0].value = textoEncriptado;
    document.getElementById("muneco").style.display = "none";
    document.getElementsByClassName("no-mensaje")[0].style.display = "none";
    document.getElementsByClassName("ingrese-mensaje")[0].style.display = "none";
    document.getElementsByClassName("copiar")[0].style.display = "inline";

    inputTexto[0].value = "";
}

const encriptar = (stringEncriptada) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

const desencriptar = (stringDesencriptada) => {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

const copiar = () => {
    let contenido = document.querySelector(".mensaje");
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
    contenido.value = "";
}