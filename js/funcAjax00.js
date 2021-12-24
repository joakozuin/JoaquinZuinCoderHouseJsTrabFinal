
//APIrest de donde se cosumen los datos
//
//Se utiliza servidor gratuito https://mockapi.io
let urlAPI = 'https://618195b232c9e20017804898.mockapi.io/usuarios'

const ajax = (opciones) => {

    //Desectructuracion
    //*****************
    //     url:string
    //  metodo:string
    //repuesta:funcion
    //   error:funcion
    //   datos:objeto
    let { url, metodo, respuesta, error, datos } = opciones;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {

            let json = JSON.parse(xhr.responseText);

            console.log(`Dentro funcion Ajax respuesta ${json}`);

            respuesta(json);

        } else {

            let mensaje = xhr.statusText || " Ocurrió un error";

            console.log(`Dentro funcion Ajax error ${mensaje}`);

            error(`Error nro: ${xhr.status}--> ${mensaje}`);

        }
    });

    xhr.open(metodo || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(datos));
}




