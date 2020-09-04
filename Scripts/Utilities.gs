// Utilities.gs

function formattedDate() {
  return Utilities.formatDate(new Date(), 'GMT-3', 'yyyy/MM/dd HH:mm:ss');
}

function getNeighborCellOfColumnNamed(name) {
  const currentCell = SpreadsheetApp.getActiveSheet().getActiveCell();
  var newCell = undefined;
  const column = getColumnNamed(name);
  if(column >= 0) {
    newCell = currentCell.offset(0, column - currentCell.getColumn());
  }
  return newCell;
}

function getColumnNamed(name) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange('A1:Z1');
  const values = range.getValues()[0];
  var column = -1;
  
  for(var i = 0; i < values.length ; i++) {
    if(values[i] === name) {
      column = i + 1;
      break;
    }
  }
  
  return column;
}

function hyperlink(url, text) {
  return "=HYPERLINK(\"" + url + "\",\""+ text + "\")";
}