import "../components/faskes-item.js";
class FaskesList extends HTMLElement {
  set faskes(faskes) {
    this._faskes = faskes;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.className = "row";
    this._faskes.forEach((faskes) => {
      const faskesItemElement = document.createElement("faskes-item");
      faskesItemElement.faskes = faskes;
      this.appendChild(faskesItemElement);
    });
  }
}
customElements.define("faskes-list", FaskesList);
