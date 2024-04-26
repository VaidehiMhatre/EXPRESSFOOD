// Get all dropdown buttons
var dropdowns = document.getElementsByClassName("dropdown");

// Loop through each dropdown
for (var i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];

    // Add click event listener to each dropdown button
    dropdown.addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Get all dropdown links
var dropdownLinks = document.querySelectorAll(".dropdown-content a");

// Loop through each dropdown link
dropdownLinks.forEach(function(link) {
    // Add click event listener to each link
    link.addEventListener("click", function() {
        var selectedOption = this.textContent;
        var dropdownContainer = this.parentElement.parentElement;
        var dropdownButton = dropdownContainer.querySelector(".dropbtn");
        dropdownButton.textContent = selectedOption;
        // Hide dropdown content after selection
        this.parentElement.style.display = "none";
    });
});

// Function to generate dropdowns for delivery slots based on selected tiffin options
function generateDeliverySlotsDropdowns(selectedTiffins) {
    // Get the container for delivery options
    var deliveryOptionsSection = document.getElementById("delivery-options");

    // Remove existing dropdowns, if any
    deliveryOptionsSection.innerHTML = "";

    // Loop through selected tiffin options
    selectedTiffins.forEach(function(tiffin) {
        // Create a new dropdown for each selected tiffin
        var dropdownContainer = document.createElement("div");
        dropdownContainer.classList.add("dropdown");

        var dropdownButton = document.createElement("button");
        dropdownButton.classList.add("dropbtn");
        dropdownButton.textContent = "Select " + tiffin + " Slot";
        dropdownContainer.appendChild(dropdownButton);

        var dropdownContent = document.createElement("div");
        dropdownContent.classList.add("dropdown-content");

        // Add delivery slot options based on tiffin type
        if (tiffin === "Breakfast") {
            dropdownContent.innerHTML = `
                <a href="#">Early Morning (7:00 AM)</a>
                <a href="#">Morning (9:00 AM)</a>
                <a href="#">Late Morning (11:00 AM)</a>
            `;
        } else if (tiffin === "Lunch") {
            dropdownContent.innerHTML = `
                <a href="#">Early Lunch (12:00 PM)</a>
                <a href="#">Lunch (1:00 PM)</a>
                <a href="#">Late Lunch (3:00 PM)</a>
            `;
        } else if (tiffin === "Dinner") {
            dropdownContent.innerHTML = `
                <a href="#">Early Dinner (6:00 PM)</a>
                <a href="#">Dinner (9:00 PM)</a>
                <a href="#">Late Dinner (10:00 PM)</a>
            `;
        }

        dropdownContainer.appendChild(dropdownContent);
        deliveryOptionsSection.appendChild(dropdownContainer);
    });
}
// Get all dropdown links
var dropdownLinks = document.querySelectorAll(".dropdown-content a");

// Loop through each dropdown link
dropdownLinks.forEach(function(link) {
// Add click event listener to each link
link.addEventListener("click", function() {
var selectedOption = this.textContent;
var dropdownContainer = this.parentElement.parentElement;
var dropdownButton = dropdownContainer.querySelector(".dropbtn");
dropdownButton.textContent = selectedOption; // Update button text with selected timing slot
// Hide dropdown content after selection
this.parentElement.style.display = "none";
});
});

// Get all checkboxes for tiffin selection
var checkboxes = document.querySelectorAll('input[name="tiffin"]');

// Function to handle checkbox selection
function handleCheckboxChange() {
    // Array to store selected tiffin options
    var selectedTiffins = [];

    // Loop through each checkbox
    checkboxes.forEach(function(checkbox) {
        // If checkbox is checked, add its value to the selectedTiffins array
        if (checkbox.checked) {
            selectedTiffins.push(checkbox.value);
        }
    });

    // Generate delivery slots dropdowns based on selected tiffin options
    generateDeliverySlotsDropdowns(selectedTiffins);
}

// Add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
});
