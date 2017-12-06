$(function() {
	$("#submit").click(doSubmit);

	function doSubmit() {
		if (gridExits() && gridSizeChanged()) {
			resetGrid();
		}
		if (!gridExits()) {
			makeGrid();
		}
	}

	function gridExits() {
		return $("#grid").length;
	}

	function gridSizeChanged() {
		return $("#grid").length != gridSize();
	}

	function gridSize() {
		let columnCount = $("#grid-height").val();
		let rowCount = $("#grid-width").val();
		let size = columnCount * rowCount;
		return size;
	}

	function resetGrid() {
		$("#grid").remove();
		makeGrid();
	}

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
		cell.style.backgroundColor = getPickedColor();
	}

	function getPickedColor() {
		let colorPicker = document.querySelector(".jscolor");
		let bckColor = colorPicker.getAttribute("style").split(";")[1];
		let color = bckColor.substring(bckColor.indexOf("rgb"), bckColor.length);
		return color;
	}
});
