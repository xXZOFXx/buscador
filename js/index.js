const aplicacion = document.querySelector(".contenedor"); //se hace la referencia en donde vendrá todo el pedo 
const aplicacionImagen = document.querySelector(".imagenes")
let string1 = "";
let string2 = "";
//declarando url de api 

/*https://api.nasa.gov/planetary/apod?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY */


//se llama la funcion cuanto le pican al boton
document.getElementById("activabtn").addEventListener("click", funcionapi);



function funcionapi() {


        let variablexd;

        //se traen los valores de los input
        variablexd = document.getElementById("txtinput").value;

        let fin = document.getElementById("fechaFin").value;

        let url = "https://api.nasa.gov/planetary/apod?start_date=" + variablexd + "&end_date=" + fin + "&api_key=zxXkmZrqfnbKaJpb2gfSDe9Gd1UX4ePohJUVUYZH";

        //console.log(url);

        //console.log("el campo que metiste fue: " + variablexd);




        if (variablexd > fin) {

                swal(
                        'Error',
                        'la fecha de inicio es mayor a la fecha final',
                        'error'
                )

        } else {


                //peticion *buscar que son promesas :
                fetch(url)//se hace petición
                        .then(respuesta => respuesta.json()) //se parsea a json la respuesta
                        .then(datos => {//haciendo iteracion

                                let string1 = "";
                                let string2 = "";


                                for (let property1 in datos) {
                                        string1 += datos[property1];
                                }

                                Object.values(datos).forEach(item => { string2 += item });

                                console.log(string1);


                                datos.forEach(respuestaxd => {
                                        console.log(datos);

                                        //imprimiendo usuario en pantalla
                                        const p = document.createElement('p');
                                        // const im = document.createElement('im')
                                        let urlchecar = respuestaxd.media_type

                                        if (urlchecar.includes("video")) { //validando si es video o imagen

                                                console.log("es video: " + respuestaxd.media_type);

                                                p.innerHTML = '<h2 class="titulo"> "' + respuestaxd.title + '" </h2>'
                                                        + ' <p  class="texto-exp">"' + respuestaxd.explanation + '"</p>' +
                                                        '<iframe src="' + respuestaxd.url + '"width="100%" class="imagen-nasa" height="300" ></iframe>'

                                        } else {

                                                p.innerHTML = '<h2 class="titulo"> "' + respuestaxd.title + '" </h2>'
                                                        + ' <p  class="texto-exp">"' + respuestaxd.explanation + '"</p>' +
                                                        '<img src="' + respuestaxd.url + '"width="100%" class="imagen-nasa" />'
                                        }
                                        // im.innerHTML = '<img src="' + respuestaxd.url + '"width="100%" />'



                                        //aplicacionImagen.appendChild(im)
                                        aplicacion.appendChild(p)

                                        console.log(respuestaxd);

                                });



                        }).catch(error => console.log("error 1 en fetch" + error))




        }


}






/* */