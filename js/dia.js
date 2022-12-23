

document.getElementById("activabtn").addEventListener("click", funcionapi);

function funcionapi() {



    let url = "https://api.nasa.gov/planetary/apod?api_key=zxXkmZrqfnbKaJpb2gfSDe9Gd1UX4ePohJUVUYZH";





    //peticion *buscar que son promesas :
    fetch(url)//se hace petición
        .then(respuesta => respuesta.json()) //se parsea a json la respuesta
        .then(datos => {//haciendo iteracion



            console.log(datos);

            console.log(datos.date);

            let urlchecar = datos.media_type

            if (urlchecar.includes("video")) { //validando si es video o imagen

                console.log("es video: " + datos.media_type);

                document.getElementById("imagenChida").innerHTML = '<iframe src="' + datos.url + '"width="100%" height="300" ></iframe>'


            } else {

                document.getElementById("imagenChida").innerHTML = '<img src="' + datos.url + '"width="100%" />'

            }

            console.log(datos.url);

            //pasando los datos de js a html (se pintan por id )
            document.getElementById("titulo").innerHTML = datos.title
            document.getElementById("demo").innerHTML = datos.date
            document.getElementById("descripcion").innerHTML = datos.explanation

            /* for (let property1 in datos) {
                     string1 += datos[property1];
             }
 
             Object.values(datos).forEach(item => { string2 += item });
 
             console.log(string1);
 
 
             datos.forEach(respuestaxd => {
                     console.log(datos);
 
                     //imprimiendo usuario en pantalla
                     const p = document.createElement('p');
                     p.innerHTML = respuestaxd.id    \
                     aplicacion.appendChild(p)
 
             });*/
            /*
                console.log(datos) */

        }).catch(error => console.log("error 1 en fetch" + error))




}



