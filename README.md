### UFOs

App.js has been enchanced to include additional four filters for the webpage to allow users to filter the data by multiple factors.

1. To keep track of all filters, a variable "filters" has been declared as follows:

    var filters = {
        Date:"",
        City:"",
        State:"",
        Country:"",
        Shape:""
    };

2. The new function "updateFilters" has been created that saves the value of each element of user input into the "filters" variable. 
Then it calls the function filterTable().

3. The filterTable() function was created to loop through all five of the filters and keep any data that matches the filter values. The filtered data is then passed to function buildTable().

4. The buildTable() function creates html table from the filtered data.

5. The main part of the script includes an event to listen for the form button and builds the table when the page loads.
