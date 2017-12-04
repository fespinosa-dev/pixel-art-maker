$(function() {

  function makeGrid() {
    let grid = $("#grid");
    let gHeight = $("input[name=gHeight]").val();
    let gWidth = $("input[name=gWidth]").val();
    for (var i = 0; i < gHeight; i++) {
      var row = $("<tr></tr>").addClass("col");
      for (var j = 0; j < gWidth; j++) {
        let cell = $("<td></td>").addClass("cell").click(cellClickedListener);
        row.append(cell);
      }
      grid.append(row);
    }
  }

  function cellClickedListener(event) {
      let cell = event.currentTarget;
      let colorPicked = $("input[name=colorPicker]").val();
      cell.style.backgroundColor = colorPicked;
  }

  makeGrid();

});
