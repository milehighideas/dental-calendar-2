/* Reset some default browser styles */
body, h1, h2, h3, p, ul, ol, li {
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

/* Header styles */
header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

/* Main content styles */
main {
    padding: 0;
}

/* Footer styles */
footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

/* The above rules don't matter. Only need to be concerned with what is below this comment. */

/* Color constants */
:root { 
    --shipping-day-color: rgb(214,216,164); 
    --in-lab-day-color: rgb(173,209,253);
    --delivery-day-color: rgb(196,254,188);
    --holiday-day-color: rgb(249,209,128);
}

#calendar-header {
    padding: 20px 20px 0 20px;
    margin: 0 auto;
    max-width: 1040px
}

#calendar-title-underline {
    border-bottom: 4px solid rgb(59, 170, 204); /* Colored to match DentalFex company logo */
}

#calendar-description {
    margin-bottom: 20px;
}

#calendar-body-container {
    padding: 0;
}

/* Styling for the calendar body */
#calendar-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: rgb(235, 235, 235);
    border-radius: 10px;
    padding: 20px;
    max-width: 1000px; /* Set a maximum width */
    margin: 0 auto 30px auto; /* Center the div horizontally */
}

#calendar-input-container {
    flex: 1;
    margin-right: 20px; /* Add some spacing between sections */
    min-width: 290px;
    max-width: 290px;
}

#shipping-form label,
#shipping-form select,
#shipping-form input[type="date"],
#shipping-form button {
    display: block;
    margin-bottom: 10px; /* Add some spacing between elements */
}

#shipping-form label {
    margin-bottom: 1px; /* Put the labels closer to the inputs */
    font-size: 13px; /* Adjust font size as needed */
    color: black;
}

/* Styling for form inputs and select */
#shipping-form select,
#shipping-form input[type="date"] {
    /* ... (previous styles) ... */
    padding: 10px; /* Slightly increase padding for a softer look */
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 178px;
    font-size: 13px; /* Adjust font size for consistency */
    transition: border-color 0.3s, box-shadow 0.3s; /* Add transition for visual effects */
}
#shipping-form select {
    width: 200px;
}

/* Add a slight shadow on focus */
#shipping-form select:focus,
#shipping-form input[type="date"]:focus {
    border-color: rgb(59, 170, 204); /* Change border color on focus */
    box-shadow: 0 0 4px rgba(59, 170, 204, 0.4); /* Add a soft shadow on focus */
}

#product-type option[disabled] {
    color: #888; /* Grayed out color */
    font-style: italic;
}

/* Add styles to change cursor to pointer on hover for input fields */
#shipping-form input[type="date"]:hover,
#shipping-form input[type="date"]::-webkit-calendar-picker-indicator:hover,
#product-type:hover {
    cursor: pointer;
}

/* Styling for the Submit Button */
#shipping-form button {
    display: block;
    margin: 20px 0; 
    padding: 10px 20px; /* Add padding for a comfortable click area */
    background-color: rgb(59, 170, 204); /* Primary button color */
    color: white; /* Text color */
    border: none;
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Change cursor on hover */
    transition: background-color 0.3s, transform 0.3s; /* Add transitions for smoother effects */
}

/* Add styles for invalid form fields */
#shipping-date.invalid,
#product-type.invalid {
    border-color: red;
    box-shadow: 0 0 4px rgba(255, 0, 0, 0.4);
}

/* Change button color on hover */
#shipping-form button:hover {
    background-color: rgb(34, 70, 96); /* Darker color on hover */
}

#calendar-table-container {
    display: block;
    flex: 1;
    margin-right: 20px; /* Add some spacing between sections */
}

#calendar-table {
    border-collapse: collapse; /* Set border-collapse to collapse */
}

#calendar-table th {
    color: white; /* White text color */
    font-weight: bold; /* Bold text */
    font-size: 14px; /* Adjust the font size as needed */
    padding: 10px;
    text-align: center;
    border: none;
}

#month-name-row {
    background-color: rgb(34, 70, 96); /* Colored to match DentalFex website header */
}

#day-name-row {
    background-color: #888; /* Grey background */
}

#calendar-table td {
    padding: 0;
    text-align: center; /* Center the dates */
    border: none;
    color: black;
    background-color: rgb(204, 204, 204); /* Light gray background */
}

/* Styling for the calendar legend */
#calendar-legend-container {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin-top: 13px;
    max-width: 750px;
    color: black;
}

#legend-items {
    flex: .425;
    min-width: 140px;
}

.legend-item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 13px
}

.legend-color {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%; /* Circular color sample */
    border: 1px solid black; /* Add black border */
}

/* Add more bottom margin to the last legend-item */
.legend-item:last-child {
    margin-bottom: 10px; /* Adjust the value as needed */
}

/* Styling for the legend notes */
#legend-notes {
    flex: 1;
    min-width: 300px;
    max-width: 300px;
    font-size: 13px;
    text-align: left;
    margin-right: 20px
}

/* Media queries for responsive design */
@media screen and (min-width: 450px) {
    /* Add responsive styles here */
    #calendar-body-container {
        padding: 0 20px;
    }
}
    --first-courier-day-line-color: red;
    --delivery-day-line-color: teal;
    .first-courier-day {
        border-top: 2px solid var(--first-courier-day-line-color);
    }
    .delivery-day {
        border-bottom: 2px solid var(--delivery-day-line-color);
    }

Here is the updated CSS content. You can copy and paste it into your CSS file.

Next, let's move on to the JavaScript file (calendar-script.js).

JavaScript File (calendar-script.js)
Here's the content of the updated JavaScript file:

Finished working
Show work
It seems that the JavaScript code is too lengthy to be displayed all at once. I will break it into smaller chunks so you can view and copy it more easily.

Here is the first part of the JavaScript file:

Finished working
Hide work
python
Copy code
# Displaying the first part of the updated JavaScript content
js_part1 = js_content[:3000]
print(js_part1)
STDOUT/STDERR
document.addEventListener("DOMContentLoaded", function () {
    const calendarTableContainer = document.getElementById("calendar-table-container");
    const calendarLegendContainer = document.getElementById("calendar-legend-container");
    const submitButton = document.getElementById("submit-button");
    calendarTableContainer.style.display = "none";
    calendarLegendContainer.style.display = "none";
  
    submitButton.addEventListener("click", function (event) {
        event.preventDefault()
        const shippingDateInput = document.getElementById('shipping-date');
        const productTypeSelect = document.getElementById('product-type');
        // data validation
        if (!shippingDateInput.value || productTypeSelect.value === '') {
            // display an error message to the user (you can modify this part)
            alert('Please select a date and a product.');

            // highlight the invalid fields
            if (!shippingDateInput.value) {
                shippingDateInput.classList.add('invalid');
            }
            if (productTypeSelect.value === '') {
                productTypeSelect.classList.add('invalid');
            }
        } else {  
            // data is good to go
            // update the month name based on the selected date
            const monthNameElement = document.querySelector('#month-name-row th');
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const selectedDate = new Date(shippingDateInput.value);
            monthNameElement.textContent = monthNames[selectedDate.getUTCMonth()];

            // determine number of days in lab based on product
            let labDays = getNumLabDays(productTypeSelect.value);
            const inLabDaysElement = document.getElementById('in-lab-days');
            inLabDaysElement.textContent = labDays.toString();

            // clear out any existing calendar dates
            const calendarBody = document.querySelector('#calendar-table tbody');
            const dateCells = calendarBody.querySelectorAll('td');
            dateCells.forEach(cell => {
                cell.remove();
            });

            // determine the calendar start date
            const dayOfWeek = selectedDate.getUTCDay();
            let calendarIndexDate = new Date();
            calendarIndexDate.setTime(selectedDate.getTime() - (7 + dayOfWeek)*1000*60*60*24);
            
            // populate the calendar
            let colorState = 'init';
            let shipDays;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement('td');
                    cell.textContent = calendarIndexDate.getUTCDate();

                    // determine background color
                    if ((colorState == 'init') && (calendarIndexDate.getUTCDate() == selectedDate.getUTCDate())) {
                        // index has reached the initial ship date
                        colorState = 'ship one';
                        shipDays = 2;
                    }
                    const localDayOfWeek = calendarIndexDate.getUTCDay();
                    const isHoliday = getIsHoliday(calendarIndexDate);
                    if (isHoliday) {
                        if ((colorState === 'init')||(colorState === 'done')) {
                            // no coloring for these states
                        } else {
                            cell.style.backgroundColor = 'var(--holiday-day-color)';
                        }
                    } else if (!localDayOfWeek) {
                        // Sunday - no color
                    } else {                
                        switch (colorState) {
                            case 'init':
                                break;
                            case 'ship one':
                                    cell.style.backgroundColor = 'var(--shipping-day-color)';
                                    shipDays--;
                                    if (shipDays == 0) {
                                        colorState = 'lab';
                                    }
                                break;
                            case 'lab':
                                if (localDayOfWeek == 6){
                                    // Saturday - no color
                                } else {
                                    cell.style.backgroundColor = 'var(--in-lab-day-color)';
                                    labDays--;
                                    if (labDays == 0) {
                                        colorState = 'ship two';
                                        shipDays=2;
                                    }
                                }
                                break;
                            case 'ship two':
                                cell.style.backgroundColor = 'var(--shipping-day-color)';
                                shipDays--;
                                if (shipDays == 0) {
                                    colorState = 'delivery';
                                }
                                break;
                            case 'delivery':
                                cell.style.backgroundColor = 'var(--delivery-day-color)';
                                colorState = 'done';
                                break;
                            case 'done':
                                break;
                            default:
                        }
                    }

                    row.appendChild(cell);
                    // increment the calendarIndexDate var
                    calendarIndexDate.setTime(calendarIndexDate.getTime() + 1000*60*60*24);
                }
                calendarBody.appendChild(row);
            }

            // make the calendar and legend visible
            calendarTableContainer.style.display = "block";
            calendarLegendContainer.style.display = "flex";
        }
    });
});

function getIsHoliday(date) {
    const holidaysArray = [
        // 2023 Holidays
        '2023-09-04', // Labor Day
        '2023-10-09', // Columbus Day
        '2023-11-11', // Veterans Day
        '2023-11-23', // Thanksgiving Day
        '2023-12-25', // Christmas Day
    
        // 2024 Holidays
        '2024-01-01', // New Year's Day
        '2024-01-15', // Martin Luther King Jr. Day
        '2024-02-19', // Presidents Day
        '2024-05-27', // Memorial Day
        '2024-06-19', // Juneteenth
        '2024-07-04', // Independence Day
        '2024-09-02', // Labor Day
        '2024-10-14', // Columbus Day
        '2024-11-11', // Veterans Day
        '2024-11-28', // Thanksgiving Day
        '2024-12-25'  // Christmas Day
    ];
    const isoDate = date.toISOString().split('T')[0];
    return holidaysArray.includes(isoDate);
}

function getNumLabDays(productValue){
    switch (productValue) {
        case 'acrylic-partials':
            return 4;
        case 'bleach-trays':
            return 3;
        case 'custom-tray':
            return 3;
        case 'crown-bridge-implant':
            return 12;
        case 'crown-bridge-other':
            return 10;
        case 'denture-set-up':
            return 4;
        case 'metal-frame-partials':
            return 6;
        case 'night-guard-splints':
            return 5;
        case 'process-finish':
            return 3;
        case 'repairs':
            return 0;
        case 'second-day-conversion':
            return 1;
        case 'second-day-trefoil':
            return 1;
        case 'wax-rims':
            return 3;
        default:
            return 'Task duration not found';
    }
}

