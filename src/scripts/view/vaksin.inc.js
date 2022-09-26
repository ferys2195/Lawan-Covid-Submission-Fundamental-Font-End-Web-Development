import Vaksin from "../data/vaksin.js";
import "../components/lokasi-vaksin.js";
import "../components/faskes-list.js";
function vaksin() {
  const lokasiVaksinElement = document.querySelector("lokasi-vaksin");
  const selectProvElement = lokasiVaksinElement.querySelector("#select-prov");
  const selectkabKotaElement =
    lokasiVaksinElement.querySelector("#select-kab-kota");
  const faskesListElement = document.querySelector("faskes-list");
  let provinsiId;
  const getProvinsi = async () => {
    try {
      const results = await Vaksin.getProvinsi();
      renderProvinsi(results);
    } catch (error) {}
  };

  const getKabKota = async (prov) => {
    try {
      provinsiId = prov;
      const results = await Vaksin.getKabupatenKota(prov);
      renderKabKota(results);
    } catch (error) {}
  };

  const getFaskes = async (prov, kabKota) => {
    try {
      const result = await Vaksin.getFaskes(prov, kabKota);
      renderFaskes(result.data);
    } catch (error) {}
  };

  const renderProvinsi = (results) => {
    results.results.forEach((prov) => {
      const option = document.createElement("option");
      option.text = prov.key;
      option.value = prov.value;
      selectProvElement.add(option);
    });
  };

  const renderKabKota = (results) => {
    selectkabKotaElement.innerHTML = "";
    const firstOption = document.createElement("option");
    firstOption.text = results.curr_val;
    firstOption.value = "";
    selectkabKotaElement.add(firstOption);
    results.results.forEach((kabKota) => {
      const option = document.createElement("option");
      option.text = kabKota.key;
      option.value = kabKota.value;
      selectkabKotaElement.add(option);
    });
    selectkabKotaElement.classList.remove("d-none");
  };

  const renderFaskes = (results) => (faskesListElement.faskes = results);
  const onProvChange = (e) => getKabKota(e.target.value);

  getProvinsi();

  selectProvElement.addEventListener("change", onProvChange);
  selectkabKotaElement.addEventListener("change", (e) =>
    getFaskes(provinsiId, e.target.value)
  );
}
export default vaksin;
