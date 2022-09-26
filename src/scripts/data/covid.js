class Covid {
  static getStatistik = async (isGlobal) => {
    try {
      const url =
        isGlobal == true
          ? "https://covid19.mathdro.id/api"
          : "https://covid19.mathdro.id/api/countries/id";
      const response = await fetch(url);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  };
}
export default Covid;
