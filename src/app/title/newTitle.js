export const newTitle = (title, className, container) => {
    let h1 = document.createElement("h1");
    h1.className = "animate__animated "+className;
    h1.innerHTML = title
    container.appendChild(h1);
};
  