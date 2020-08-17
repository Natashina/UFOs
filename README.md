### UFOs

The goal is to create additional four filters for the webpage to allow users to filter the data by multiple factors.

1. Firstly, to keep track of all filters, a variable "filters" has been declared as follows:

var filters = {
    Date:"",
    City:"",
    State:"",
    Country:"",
    Shape:""
};

2. Secondly, the new function "updateFilters" has been created that saves the element, value, and id of the filter that was changed. If a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object. Grab the date, city, state, country, shape value from the filter. It calls the function filterTable() to apply all filters and rebuild the table.
   

3. Thirdly, filterTable() function was modified to include all five filters. The filteredData variable is set to the tableData. Loop through all of the filters and keep any data that matches the filter values.

4. Finally, an event is included to listen for the form button and the table rebuilds when the page loads.
