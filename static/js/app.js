// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each obj in data and append row/cells for each value
    data.forEach((dataRow) => {
        // Append row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and add each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );    
    });
}