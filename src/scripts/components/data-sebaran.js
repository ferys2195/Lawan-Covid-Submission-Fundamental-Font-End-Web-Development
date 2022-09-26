import TimeAgo from "javascript-time-ago";
import id from "javascript-time-ago/locale/id";
class DataSebaran extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set sebaran(sebaran) {
    this._sebaran = sebaran;
    this.render();
  }
  render() {
    const confirmed = this._sebaran.confirmed.value.toLocaleString("id-ID");
    const recovered = this._sebaran.recovered.value.toLocaleString("id-ID");
    const deaths = this._sebaran.deaths.value.toLocaleString("id-ID");
    TimeAgo.addDefaultLocale(id);
    const timeAgo = new TimeAgo("id-ID");
    const lastUpdate = timeAgo.format(new Date(this._sebaran.lastUpdate));
    this.innerHTML = /*html*/ `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
        h2 {
            font-family: 'Rubik', sans-serif;
        }
        .bg-confirmed {
            background-color : #ffc54d;
        }
        .bg-recovered {
            background-color : #53bf9d;
        }
        .bg-death {
            background-color : #f94c66;
        }
    </style>
    <div class="row">
        <div class="col-md-4 col-lg-4 col-12 mb-2">
            <div class="card bg-confirmed border-0">
                <div class="card-body">
                    <h5 class="fw-bold mb-0">CONFIRMED :</h5>
                    <h2 id="positif">${confirmed}</h2>
                    <small>Last Update ${lastUpdate}</small>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-lg-4 col-12 mb-2">
            <div class="card bg-recovered border-0">
                <div class="card-body">
                    <h5 class="fw-bold mb-0">RECOVERED :</h5>
                    <h2 id="sembuh">${recovered}</h2>
                    <small>Last Update ${lastUpdate}</small>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-lg-4 col-12 mb-2">
            <div class="card bg-death border-0">
                <div class="card-body">
                    <h5 class="fw-bold mb-0">DEATH :</h5>
                    <h2 id="meninggal">${deaths}</h2>
                    <small>Last Update ${lastUpdate}</small>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}
customElements.define("data-sebaran", DataSebaran);
