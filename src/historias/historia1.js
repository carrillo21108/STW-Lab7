import '../estilos.scss'
import { newTitle } from '../app/title/newTitle.js'

function createHeader(){
    let header = document.createElement("header");
    newTitle("Parte 1","animate__flip",header);
    document.body.appendChild(header);
}

function createFigure(){
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = "https://kryptonsolid.com/wp-content/uploads/2022/02/ZXQpUA8twxKMLqXrU54j4A-1200-80.jpg"
    img.alt = "Mansion"

    figure.appendChild(img);
    document.body.appendChild(figure);
}

function createArticle(){
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    h2.innerHTML = "Comienza la historia"
    article.appendChild(h2);

    let p1 = document.createElement("p");
    p1.innerHTML = "Esta historia se desarolla en un pueblo recondito, en el que existe una leyenda acerca de una vieja mansion abandonada en las montañas aledañas. Se dice que muchas personas en el pasado han entrado a la misma en busqueda de los tesoros de quienes vivian ahi. Sin embargo, pocas han sobrevivido para contar lo que lograron ver.  James ha escuchado todas las historias y se encuentra muy interesado en  aventurarse en el lugar. Toma la bicicleta que esta en su patio y sale hacia la aventura.";
    article.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "En menos de una hora James se encontraba en la entrada de la mansion. Alrededor de esta no se encuentra nada mas que arboles, por lo que en caso se pierda o quede atrapado, dificilmente podran escuchar sus gritos de auxilio. James se acerca a la puerta y ve que esta no tiene llave.  Aparentemente alguien mas ya la ha abierto.";
    article.appendChild(p2);

    document.body.appendChild(article);
}

function createDiv(){
    let div = document.createElement("div");
    let audio = document.createElement("audio");
    audio.controls = "loop";
    let source = document.createElement("source");
    source.src = "http://aux.incompetech.com/music/royalty-free/mp3-royaltyfree/Air%20Prelude.mp3"
    source.type = "audio/mpeg";
    audio.appendChild(source);
    div.appendChild(audio);

    let br1 = document.createElement("br");
    div.appendChild(br1);

    let a = document.createElement("a");
    a.href = "./historia2.html"
    a.innerHTML = "Entrar a la mansion"
    div.appendChild(a);

    let br2 = document.createElement("br");
    div.appendChild(br2);
    let br3 = document.createElement("br");
    div.appendChild(br3);

    let progress = document.createElement("progress");
    progress.value = "20";
    progress.max = "100";
    div.appendChild(progress);

    let br4 = document.createElement("br");
    div.appendChild(br4);

    let span = document.createElement("span");
    span.innerHTML = "20% de progreso en lectura";
    div.appendChild(span);

    document.body.appendChild(div);
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