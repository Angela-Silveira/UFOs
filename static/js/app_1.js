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

// Filter
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if date entered and filter data using that date
    if (date) {
        // Apply 'filter' to table data to only keep rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using filtered data
    // @NOTE: If no date entered, filteredData will just be original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);