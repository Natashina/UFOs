### UFOs

The aim is to create additional four filters for the webpage to allow users to filter the data by multiple factors.

1. Firstly, to keep track of all filters, a variable "filters" has been declared as follows:

    var filters = {
        Date:"",
        City:"",
        State:"",
        Country:"",
        Shape:""
    };

2. Secondly, the new function "updateFilters" has been created that saves the value of each element of user input into the "filters" variable. 
Then it calls the function filterTable() to apply all filters and rebuild the table.

3. Thirdly, filterTable() function was created to loop through all five of the filters and keep any data that matches the filter values.

4. Finally, an event is included to listen for the form button and the table rebuilds when the page loads.


    function buildTable(data) {
    
        tbody.html("");
        data.forEach((dataRow) => {
            let row = tbody.append("tr");
            Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                cell.text(val);
                }
            );
        });
    }
