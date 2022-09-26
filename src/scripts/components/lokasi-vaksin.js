class LokasiVaksin extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = /*html*/ `
    <h2>Cek Lokasi Vaksinasi</h2>
    <div class="row bg-primary bg-gradient bg-opacity-25 py-2 mb-3 rounded mx-1">
      <div class="col-lg-6 col-12 my-1">
        <select class="form-select form-select-lg" id="select-prov">
        <option value="">-- Provinsi --</option>
        </select>
      </div>
      <div class="col-lg-6 col-12 my-1">
        <select class="form-select form-select-lg d-none" id="select-kab-kota">
        </select>
      </div>
    </div>
    `;
  }
}
customElements.define("lokasi-vaksin", LokasiVaksin);
