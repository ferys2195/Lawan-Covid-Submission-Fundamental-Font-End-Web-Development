import Covid from "../data/covid.js";
import "../components/switch-country.js";
import "../components/data-sebaran.js";
function covid() {
  const switchCountry = document.querySelector("switch-country");
  const getData = async (isGlobal = false) => {
    const result = await Covid.getStatistik(isGlobal);
    render(result);
  };
  function render(result) {
    const dataSebaranElement = document.querySelector("data-sebaran");
    dataSebaranElement.sebaran = result;
  }

  const onToggleChange = () => getData(switchCountry.value);
  switchCountry.changeEvent = onToggleChange;
  getData();
}
export default covid;
