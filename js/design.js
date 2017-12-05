$(function() {
  function makeGrid() {
    let grid = $("<table cellpadding='0' cellspacing='0' id='grid'></table>");
    let columnCount = $("#grid-height").val();
    let rowCount = $("#grid-width").val();
    for (var i = 0; i < columnCount; i++) {
      var row = $("<tr></tr>").addClass("column");
      for (var j = 0; j < rowCount; j++) {
        let cell = $("<td></td>").addClass("cell").click(cellClickedListener);
        row.append(cell);
      }
      grid.append(row);
    }
    $(".page-wrap").append(grid);
  }

  function cellClickedListener(event) {
    let cell = event.currentTarget;
    let colorPicked = $("input[name=colorPicker]").val();
    cell.style.backgroundColor = colorPicked;
  }

  function clearGrid() {
    $(".cell").each(function(index, element) {
      $(element)[0].removeAttribute("style");
    });
  }

  function doSubmit() {
    if ($("#grid").length) {
      if (areColoredSquares()) {
        clearGrid();
      }
      if (gridSize() != $(".cell").length) {
        $("#grid").remove();
        makeGrid();
      }
    } else {
      makeGrid();
    }

  }

  function areColoredSquares() {
    let cells = $(".cell").toArray();
    for (var position in cells) {
      if (cells[position].hasAttribute("style")) {
        return true;
      }
    }
    return false;
  }

  function gridSize() {
    let columnCount = $("#grid-height").val();
    let rowCount = $("#grid-width").val();
    let size = columnCount * rowCount;
    return size;
  }

  $("button[name=submit]").click(doSubmit);
});
