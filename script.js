function createTable() {
    const numRows = parseInt(prompt("Input number of rows:"));
    const numCols = parseInt(prompt("Input number of columns:"));
    const table = document.getElementById("myTable");
    table.innerHTML = "";

	for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
