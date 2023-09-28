function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      throw new Error(`Error fetching data: ${error.message}`);
    });
}

export default fetchData;
