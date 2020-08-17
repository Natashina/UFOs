// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First clear out any existing data
    tbody.html("");

    //Next loop through each object in the data 
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );   
	});
}
// Keep track of all filters
var filters = {
    Date:"",
    City:"",
    State:"",
    Country:"",
    Shape:""
};

function updateFilters() {
    // Save the element, value, and id of the filter that was changed

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object

    // Grab the datetime value from the filter
    filters.Date = d3.select("#date_input").property("value");
    filters.City = d3.select("#city_input").property("value");
    filters.State = d3.select("#state_input").property("value");
    filters.Country = d3.select("#country_input").property("value");
    filters.Shape = d3.select("#shape_input").property("value");
    // Call function to apply all filters and rebuild the table
    filterTable();
}

function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    if (filters.Date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === filters.Date);
    };  
    if (filters.City) {
        // Apply `filter` to the table data to only keep the
        // rows where the `city` value matches the filter value
        filteredData = filteredData.filter(row => row.city === filters.City);
    };  
    if (filters.State) {
        // Apply `filter` to the table data to only keep the
        // rows where the `state` value matches the filter value
        filteredData = filteredData.filter(row => row.state === filters.State);
    };  
    if (filters.Country) {
        // Apply `filter` to the table data to only keep the
        // rows where the `country` value matches the filter value
        filteredData = filteredData.filter(row => row.country === filters.Country);
    };  
    if (filters.Shape) {
        // Apply `filter` to the table data to only keep the
        // rows where the `shape` value matches the filter value
        filteredData = filteredData.filter(row => row.shape === filters.Shape);
    };  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);
// Build the table when the page loads
buildTable(tableData);