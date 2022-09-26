class Vaksin {
  static getProvinsi = async () => {
    try {
      const response = await fetch(
        "https://kipi.covid19.go.id/api/get-province",
        {
          method: "post",
        }
      );
      const responsJson = await response.json();
      return responsJson;
    } catch (error) {
      return error;
    }
  };
  static getKabupatenKota = async (provinsi) => {
    try {
      const response = await fetch(
        `https://kipi.covid19.go.id/api/get-city?start_id=${provinsi}`,
        {
          method: "post",
        }
      );
      const responsJson = await response.json();
      return responsJson;
    } catch (error) {
      return error;
    }
  };
  static getFaskes = async (prov, kabKota) => {
    try {
      const response = await fetch(
        `https://kipi.covid19.go.id/api/get-faskes-vaksinasi?skip=0&province=${prov}&city=${kabKota}`
      );
      const responsJson = await response.json();
      return responsJson;
    } catch (error) {
      return error;
    }
  };
}
export default Vaksin;
