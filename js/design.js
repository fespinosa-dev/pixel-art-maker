$(function() {
  document.querySelector("form").addEventListener("submit", function(e) {
     e.preventDefault();
    if (gridExits() && gridSizeChanged()) {
      resetGrid();
    }
    if (!gridExits()) {
      makeGrid();
    }
  });
  /**
   * @description Checks if the grid already exits or not
   * @returns {boolean} true or false
   */
  function gridExits() {
    return $("#grid").length;
  }

  /**
   * @description Checks if the grid size isn't equal to the total inputs values
   * @returns {boolean} true or false
   */
  function gridSizeChanged() {
    return $("#grid").length != gridSize();
  }

  /**
   * @description Calculate the grid size
   * @returns {number} size of the grid
   */
  function gridSize() {
    let columnCount = $("#grid-height").val();
    let rowCount = $("#grid-width").val();
    let size = columnCount * rowCount;
    return size;
  }

  /**
   * @description Deletes the grid and creates a new one
   */
  function resetGrid() {
    $("#grid").remove();
    makeGrid();
  }

  /**
   * @description Creates a grid using the inputs values
   */
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
    $("form").append(grid);
  }

  /**
   * @description assigns the choosen color to the clicked cell
   */
  function cellClickedListener(event) {
    let cell = event.currentTarget;
    cell.style.backgroundColor = getPickedColor();
  }

  /**
   * @description gets the selected color
   * @returns {string} picked color
   */
  function getPickedColor() {
    let colorPicker = document.querySelector(".jscolor");
    let bckColor = colorPicker.getAttribute("style").split(";")[1];
    let color = bckColor.substring(bckColor.indexOf("rgb"), bckColor.length);
    return color;
  }
});
