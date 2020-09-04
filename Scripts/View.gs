// View.gs

function atEdit( event ) {
  const activeSheet = SpreadsheetApp.getActiveSheet()
  if(event != undefined &&
     event.oldValue != activeSheet.getActiveCell().getValue() &&
     activeSheet.getName() == sheetName) {
    cellUpdateOn();
    cellAddedOn();
    cellUpdateGameDetails();
  }
}

function cellUpdateGameDetails() {
  const activeCell = SpreadsheetApp.getActiveSheet().getActiveCell();
  if(activeCell.getColumn() == getColumnNamed(columnGame) && activeCell.getValue().length > 1) {
    
    const data = getIGDBData();
    
    getNeighborCellOfColumnNamed(columnGame).setValue(hyperlink(data.url, data.name));
    getNeighborCellOfColumnNamed(columnGenre).setValue(data.genres);
    getNeighborCellOfColumnNamed(columnTags).setValue(data.keywords);
  }
}

function cellAddedOn() {
  
  // Get cell "Added On" and check if it is blank, if true then put new date;
  const cellDateAdded = getNeighborCellOfColumnNamed(columnDateAdded);
  if (cellDateAdded.getValue() === '') {
    const date = formattedDate();
    cellDateAdded.setValue(date);
    
    /*
    // If "Updated On" is blank, put the same date;
    // Because this is the first time the cell was created, so there was no updates before;
    const nextCell = cellDateAdded.offset(0, 1);
    if (nextCell.getValue() === '') {
      nextCell.setValue(date);
    }
    */
  }
}

function cellUpdateOn() {
  
  // Checks that the cell being edited is the STATUS cell;
  const activeCell = SpreadsheetApp.getActiveSheet().getActiveCell();
  if (activeCell.getRow() != 1 && activeCell.getColumn() === getColumnNamed(columnStatus)) {
    
    // If true then put new date in the cell with "Updated On";
    const activeCellValue = activeCell.getValue();
    if(activeCellValue != '') {
      const date = formattedDate();
      const string = date + ' ' + activeCellValue + textSeparator;
      const cellWithLog = getNeighborCellOfColumnNamed(columnDateUpdated);
      cellWithLog.setValue(cellWithLog.getValue() + string);
    }
  }
}