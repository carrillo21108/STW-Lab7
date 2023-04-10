import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

var progress_bar = document.getElementById("progress_bar");

function createHeader(){
    let header = document.createElement("header");
    newTitle("Detalle","animate__rubberBand",header);
    document.body.insertBefore(header,progress_bar);
}

function createDiv1(){
    let div = document.createElement("div");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");
    img.src = "https://wallup.net/wp-content/uploads/2018/03/19/583200-old-house-hallway-300x200.jpg"
    img.alt = "Portada del libro"

    let b = document.createElement("b");
    b.innerHTML = "El laberinto sin fin";
    figcaption.appendChild(b);
    let espacio = document.createTextNode('  ');
    figcaption.appendChild(espacio);
    let i = document.createElement("i");
    i.innerHTML = "Brian Carrillo";
    figcaption.appendChild(i);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    div.appendChild(figure);

    let p = document.createElement("p");
    let txt1 = document.createTextNode('"James es un joven curioso y valiente que decide adentrarse a un misterioso juego llamado ');
    p.appendChild(txt1);
    let i2 = document.createElement("i");
    i2.innerHTML = "El laberinto";
    p.appendChild(i2);
    let txt2 = document.createTextNode(', sin tener idea de lo que este le depara. Pondra a prueba habilidades y su coraje para descubrir lo que esta mas alla de lo que otros han logrado (Carrillo, 2023)".');
    p.appendChild(txt2);
    let br1 = document.createElement("br");
    p.appendChild(br1);
    let a = document.createElement("a");
    a.href = "../historias/historia1.html"
    a.innerHTML = "Comenzar historia"
    p.appendChild(a);

    div.appendChild(p);

    let br2 = document.createElement("br");
    div.appendChild(br2);

    document.body.insertBefore(div,progress_bar);
}

function createFooter(){
    let footer = document.createElement("footer");
    let br = document.createElement("br");
    footer.appendChild(br);

    let a = document.createElement("a");
    a.href = "../index.html"
    a.innerHTML = "Regresar a pagina principal"
    footer.appendChild(a);

    document.body.appendChild(footer);
}

async function createPage(){
    await createHeader()
    await createDiv1()
    await createFooter()
}

createPage()