class SwitchCountry extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  set changeEvent(e) {
    this._changeEvent = e;
    this.render();
  }
  get value() {
    return this._shadowDOM.querySelector("#toggle").checked;
  }

  render() {
    this._shadowDOM.innerHTML = /*html*/ `
    <style>
        .container{
            display : flex;
            justify-content : center;
            padding : 15px;
        }
        .toggleContainer {
            position: relative;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 250px;
            border: 3px solid #8E95E3;
            border-radius: 20px;
            background: #8E95E3;
            font-weight: bold;
            color: #343434;
            cursor: pointer;
        }
        .toggleContainer::before {
            content: '';
            position: absolute;
            width: 50%;
            height: 100%;
            left: 0%;
            border-radius:20px;
            background: white;
            transition: all 0.3s;
        }
        .toggleCheckbox:checked + .toggleContainer::before {
            left: 50%;
        }
        .toggleContainer div {
            padding: 6px;
            text-align: center;
            z-index: 1;
        }
        .toggleCheckbox {
            display: none;
        }
        .toggleCheckbox:checked + .toggleContainer div:first-child{
            color: white;
            transition: color 0.3s;
        }
        .toggleCheckbox:checked + .toggleContainer div:last-child{
            color: #8E95E3;
            transition: color 0.3s;
        }
        .toggleCheckbox + .toggleContainer div:first-child{
            color: #8E95E3;
            transition: color 0.3s;
        }
        .toggleCheckbox + .toggleContainer div:last-child{
            color: white;
            transition: color 0.3s;
        }
    </style>
    <div class="container">
    <input type="checkbox" id="toggle" class="toggleCheckbox" />
    <label for="toggle" class='toggleContainer'>
      <div>Indonesia</div>   
      <div>Global</div>
    </label>
    </div>
    `;
    this._shadowDOM
      .querySelector("#toggle")
      .addEventListener("change", this._changeEvent);
  }
}
customElements.define("switch-country", SwitchCountry);
