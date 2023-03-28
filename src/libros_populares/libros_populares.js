import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

async function createPage(){
    newTitle("Libros populares","animate__bounce",document.body);

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    let b1 = document.createElement("b");
    b1.innerHTML = "El señor de los anillos";
    li1.appendChild(b1);
    let espacio1 = document.createTextNode('  ');
    li1.appendChild(espacio1);
    let i1 = document.createElement("i");
    i1.innerHTML = "J.R.R. Tolkien";
    li1.appendChild(i1);

    let li2 = document.createElement("li");
    let b2 = document.createElement("b");
    b2.innerHTML = "El codigo da Vinci";
    li2.appendChild(b2);
    let espacio2 = document.createTextNode('  ');
    li2.appendChild(espacio2);
    let i2 = document.createElement("i");
    i2.innerHTML = "Dan Brown";
    li2.appendChild(i2);

    let li3 = document.createElement("li");
    let b3 = document.createElement("b");
    b3.innerHTML = "Diario de Anna Frank";
    li3.appendChild(b3);
    let espacio3 = document.createTextNode('  ');
    li3.appendChild(espacio3);
    let i3 = document.createElement("i");
    i3.innerHTML = "Anna Frank";
    li3.appendChild(i3);

    let li4 = document.createElement("li");
    let b4 = document.createElement("b");
    b4.innerHTML = "Don Quijote de la Mancha";
    li4.appendChild(b4);
    let espacio4 = document.createTextNode('  ');
    li4.appendChild(espacio4);
    let i4 = document.createElement("i");
    i4.innerHTML = "Miguel de Cervantes";
    li4.appendChild(i4);

    let li5 = document.createElement("li");
    let b5 = document.createElement("b");
    b5.innerHTML = "La Odisea";
    li5.appendChild(b5);
    let espacio5 = document.createTextNode('  ');
    li5.appendChild(espacio5);
    let i5 = document.createElement("i");
    i5.innerHTML = "Homero";
    li5.appendChild(i5);
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    document.body.appendChild(ul);
}

createPage()