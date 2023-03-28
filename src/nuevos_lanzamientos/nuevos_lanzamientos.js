import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

async function createPage(){
    newTitle("Nuevos lanzamientos","animate__flash",document.body);

    let ol = document.createElement("ol");

    let li1 = document.createElement("li");
    let a = document.createElement("a");
    a.href = "../libro_detalles/libro_detalles.html"
    let b1 = document.createElement("b");
    b1.innerHTML = "El laberinto sin fin";
    a.appendChild(b1);
    let espacio1 = document.createTextNode('  ');
    a.appendChild(espacio1);
    let i1 = document.createElement("i");
    i1.innerHTML = "Brian Carrillo";
    a.appendChild(i1);
    li1.appendChild(a);

    let li2 = document.createElement("li");
    let b2 = document.createElement("b");
    b2.innerHTML = "La moda es revolucion";
    li2.appendChild(b2);
    let espacio2 = document.createTextNode('  ');
    li2.appendChild(espacio2);
    let i2 = document.createElement("i");
    i2.innerHTML = "Laura Opazo";
    li2.appendChild(i2);

    let li3 = document.createElement("li");
    let b3 = document.createElement("b");
    b3.innerHTML = "Mas dificil todavia";
    li3.appendChild(b3);
    let espacio3 = document.createTextNode('  ');
    li3.appendChild(espacio3);
    let i3 = document.createElement("i");
    i3.innerHTML = "Juan Torres Lopez";
    li3.appendChild(i3);
    
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);

    document.body.appendChild(ol);
}

createPage()