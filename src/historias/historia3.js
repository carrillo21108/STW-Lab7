import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

var progress_bar = document.getElementById("progress_bar");

function createHeader(){
    let header = document.createElement("header");
    newTitle("Parte Final","animate__jackInTheBox",header);
    document.body.insertBefore(header,progress_bar);
}

function createFigure(){
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = "https://laexuberanciadehades.files.wordpress.com/2017/01/camino-bosque.jpg"
    img.alt = "Camino en el bosque"

    figure.appendChild(img);
    document.body.insertBefore(figure,progress_bar);
}

function createArticle(){
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    h2.innerHTML = "En la salida"
    article.appendChild(h2);

    let p1 = document.createElement("p");
    p1.innerHTML = " Parece que esta es una salida rapida alternativa a la mansion. James queda totalmente decepcionado, por lo que decide mejor regresar a su casa. Se sube a su bicicleta y toma el camino de vuelta. Justo cuando la mansion salia de su vista, logra ver una silueta observandolo desde la entrada y despidiendose de el. Por primera vez se sintio atemorizado y aumento la velocidad.";
    article.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "Despues de ese dia, nunca mas James se volvio a interesar en la mansion ni en las leyendas de la misma.";
    article.appendChild(p2);

    document.body.insertBefore(article,progress_bar);
}

function createDiv(){
    let div = document.createElement("div");
    let audio = document.createElement("audio");
    audio.controls = "loop";
    let source = document.createElement("source");
    source.src = "http://aux.incompetech.com/music/royalty-free/mp3-royaltyfree/Arcadia.mp3"
    source.type = "audio/mpeg";
    audio.appendChild(source);
    div.appendChild(audio);

    let br1 = document.createElement("br");
    div.appendChild(br1);

    let a = document.createElement("a");
    a.href = "../index.html"
    a.innerHTML = "Regresar a la pantalla principal"
    div.appendChild(a);

    let br2 = document.createElement("br");
    div.appendChild(br2);
    let br3 = document.createElement("br");
    div.appendChild(br3);

    document.body.insertBefore(div,progress_bar);
}

function createFooter(){
    let footer = document.createElement("footer");
    let p = document.createElement("p");
    p.innerHTML = "Brian Carrillo"
    footer.appendChild(p);

    document.body.appendChild(footer);
}

async function createPage(){
    await createHeader()
    await createFigure()
    await createArticle()
    await createDiv()
    await createFooter()
}

createPage()