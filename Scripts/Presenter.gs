// Presenter.gs

function reduceResponse(data) {
  return data.reduce((string, value) => { return string + value.name + textSeparator }, "");
}

function parseIGDBData(response) {
  const data = JSON.parse(response.getContentText())[0];
  const value = { "name": "Not found", "genres": "", "keywords": "", "url": "" };
  if(data != null) {
    value.name = data.name;
    value.genres = reduceResponse(data.genres);
    value.keywords = reduceResponse(data.keywords);
    value.url = data.url;
  }
  return value;
}

function getIGDBData() {
  const requestData = requestIGDBData();
  const parsedData = parseIGDBData(requestData);
  return parsedData;
}