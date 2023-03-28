import './estilos.scss'
import { newTitle } from './app/title/newTitle.js'

function createHeader(){
    let header = document.createElement("header");
    header.id = "header_principal"
    newTitle("BookStore","animate__fadeInDown",header);

    let nav = document.createElement("nav");
    let a1 = document.createElement("a");
    a1.className = "links"
    a1.href = "./libros_populares/libros_populares.html"
    a1.innerHTML = "Libros populares"

    let a2 = document.createElement("a");
    a2.className = "links"
    a2.href = "./nuevos_lanzamientos/nuevos_lanzamientos.html"
    a2.innerHTML = "Nuevos lanzamientos"

    nav.appendChild(a1);
    let espacio = document.createTextNode('  ');
    nav.appendChild(espacio);
    nav.appendChild(a2);

    header.appendChild(nav);

    document.body.appendChild(header);
}

function createDetails(){
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "Comentario de UI vs UX Design"

    let p = document.createElement("p");
    p.innerHTML = "Generalmente se tienden a utilizar ambos terminos de manera indistinta, causando confusion y que inclusive los mismos empleadores no esten seguros sobre si necesitan un experto en UI o en UX. A grandes rasgos, UI se enfoca en el diseño visual de un producto digital, mientras que UX se enfoca en el diseño de interaccion de cualquier producto o servicio. Considero que comprender estas areas de la produccion de software permite que los estudiantes de computacion tengan una mayor idea sobre las posibilidades de trabajo en que se pueden llegar a enfocar."

    details.appendChild(summary);
    details.appendChild(p);

    document.body.appendChild(details);
}

async function createPage(){
    await createHeader()
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    document.body.appendChild(br1);
    document.body.appendChild(br2);
    await createDetails()
}

createPage()