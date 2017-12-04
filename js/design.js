$(function() {

  function makeGrid() {
    let grid = $("#grid");
    // let gHeight = $("input[name=gHeight]").val();
    // let gWidth = $("input[name=gWidth]").val();
    let gHeight = 20;
    let gWidth = 20;

    for (var i = 0; i < gHeight; i++) {
      var row = $("<tr></tr>");
      for (var j = 0; j < gWidth; j++) {
        let cell = $("<td>cell</td>");
        row.append(cell);
      }
      grid.append(row);
    }


  }

  makeGrid();

});
