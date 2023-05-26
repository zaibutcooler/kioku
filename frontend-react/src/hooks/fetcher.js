const fetcher = (url) => {
  const output = [];
  const loading = false;
  fetch(url)
    .then((response) => response.json())
    .then((data) => output);
  return { output, loading };
};
