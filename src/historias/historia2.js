import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

var progress_bar = document.getElementById("progress_bar");

function createHeader(){
    let header = document.createElement("header");
    newTitle("Parte 2","animate__hinge",header);
    document.body.insertBefore(header,progress_bar);
}

function createFigure(){
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = "https://cerradoporabandono.files.wordpress.com/2012/11/cp8.jpg"
    img.alt = "Sala"

    figure.appendChild(img);
    document.body.insertBefore(figure,progress_bar);
}

function createArticle(){
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    h2.innerHTML = "En la sala"
    article.appendChild(h2);

    let p1 = document.createElement("p");
    let txt1 = document.createTextNode("Al abrir la puerta, James se percata de que se encuentra en la sala, pues ve un televisor y un viejo sofa. Sin embargo, le llama la atencion que en una pared vieja y sucia se cita ");
    p1.appendChild(txt1);
    let i = document.createElement("i");
    i.innerHTML = '"para cada problema hay un par de solucion"';
    p1.appendChild(i);
    let txt2 = document.createTextNode(". Sospecha que talvez esta sea una pista de  alguien que con anterioridad intento llegar al tesoro. Como James siempre ha sido muy valiente, decide continuar con su travesia.  A un costado de la sala, visualiza un pasillo lleno de telerañas y con el tapiz arañado.");
    p1.appendChild(txt2);
    article.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "En el pasillo se ven tres puertas, dos al costado izquierdo y una al costado derecho. Se pregunta en cual de las tres deberia entrar, pero decide confiar en su habilidad para estas situaciones.";
    article.appendChild(p2);

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = "https://wallup.net/wp-content/uploads/2018/03/19/583200-old-house-hallway-300x200.jpg"
    img.alt = "Puertas"

    figure.appendChild(img);
    article.appendChild(figure);

    document.body.insertBefore(article,progress_bar);
}

function createDiv(){
    let div = document.createElement("div");
    let audio = document.createElement("audio");
    audio.controls = "loop";
    let source = document.createElement("source");
    source.src = "http://aux.incompetech.com/music/royalty-free/mp3-royaltyfree/Anguish.mp3"
    source.type = "audio/mpeg";
    audio.appendChild(source);
    div.appendChild(audio);

    let br1 = document.createElement("br");
    div.appendChild(br1);

    let a1 = document.createElement("a");
    a1.href = "./historia3.html"
    a1.innerHTML = "Puerta 1 (izquierda)"
    div.appendChild(a1);
    let espacio1 = document.createTextNode('  ');
    div.appendChild(espacio1);
    let a2 = document.createElement("a");
    a2.href = "#"
    a2.innerHTML = "Puerta 2 (izquierda)"
    div.appendChild(a2);
    let espacio2 = document.createTextNode('  ');
    div.appendChild(espacio2);
    let a3 = document.createElement("a");
    a3.href = "#"
    a3.innerHTML = "Puerta 3 (derecha)"
    div.appendChild(a3);

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