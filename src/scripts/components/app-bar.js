class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = /*html*/ `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap');
      #app-bar {
        padding : 25px;
        text-align : center;
      }
      #app-bar a {
        font-family: 'Reem Kufi Ink', sans-serif;
        font-size : 30px;
        font-weight : 700;
        color : white;
        text-decoration : none;
      }
    </style>
    <div id="app-bar">
    <a href="#">LAWAN<span class="color-accent">COVID</span></a>
    </div>
    `;
  }
}
customElements.define("app-bar", AppBar);
