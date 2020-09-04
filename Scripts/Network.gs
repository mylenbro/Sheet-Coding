// Network.gs

function requestIGDBData() {
  const apiURL = 'https://api-v3.igdb.com/games/'
  const searchParameters = '?search=';
  const gameToSearch = SpreadsheetApp.getActiveSheet().getActiveCell().getValue();
  const fieldsParameters = '&fields=';
  const fields = 'name,genres.name,keywords.name,url';
  const searchURL = apiURL + searchParameters + gameToSearch + fieldsParameters + fields;
  const headers = {
    'method': 'post',
    'headers': { 
      'user-key': apiKeyIGDB
    }
  }
  
  return UrlFetchApp.fetch(searchURL,headers);
}