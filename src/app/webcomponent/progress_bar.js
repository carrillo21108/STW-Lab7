fetch("../template/progress_bar.html")
  .then((stream) => stream.text())
  .then((htmlFile) => renderComponent(htmlFile));

function renderComponent(htmlFile) {
  class ProgressBar extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: "open" });
      shadowDOM.innerHTML = htmlFile;
    }

    setValue(valor){
      const { shadowRoot, shadowDOM } = this;
      let progress = shadowRoot.getElementById("progress_bar");
      progress.value = valor;
    }

    getValue(){
      return this.getAttribute("progress_value");
    }

    setMessage(valor){
      const { shadowRoot, shadowDOM } = this;
      let span = shadowRoot.getElementById("span_bar");
      span.innerText = valor;
    }

    getMessage(){
      return this.getAttribute("progress_message");
    }

    // Callback
    connectedCallback() {
      const { shadowRoot, shadowDOM } = this;
      console.log('Custom component element added to page.');
      // entry parameters
      let value = "0";
      let message = "0% de progreso en lectura";

      if (this.hasAttribute("progress_value")) {
        value = this.getValue();
      }
      if (this.hasAttribute("progress_message")) {
        message = this.getMessage();
      }

      this.setValue(value);

      this.setMessage(message);
    }

    disconnectedCallback() {
      
      console.log("Custom component element removed from page.");

    }

    adoptedCallback() {
      console.log("Custom component element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Custom component element attributes changed.");
      
    }
  }

  customElements.define("progress-bar", ProgressBar);
}
