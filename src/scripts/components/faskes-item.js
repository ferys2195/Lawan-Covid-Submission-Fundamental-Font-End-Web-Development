class FaskesItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set faskes(faskes) {
    this._faskes = faskes;
    this.render();
  }
  render() {
    this.className = "col-lg-4 mb-2";
    this.innerHTML = /*html*/ `
        <style>
          p {
            font-size : 16px;
            line-height: normal;
          }
          </style>
        <div class="card border-0 shadow-sm">
            <div class="card-body">
                <h5 class="card-title fw-bold">${this._faskes.jenis_faskes} ${this._faskes.nama}</h5>
                <p class="card-text">${this._faskes.alamat}</p>
                <a href="https://maps.google.com/?q=${this._faskes.latitude},${this._faskes.longitude}" target="_blank" class="btn btn-primary btn-sm"><i class="bi bi-map"></i> Tampilkan Pada Maps</a>
            </div>
        </div>    
    `;
  }
}
customElements.define("faskes-item", FaskesItem);
