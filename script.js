// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select all elements with the class 'dropdown-header'
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');

    // Loop through each of the selected dropdown headers
    dropdownHeaders.forEach(header => {
        // Add a 'click' event listener to each header
        header.addEventListener('click', function() {
            // Find the icon (the '+' or '-') inside the clicked header
            const toggleIcon = this.querySelector('.toggle-icon');

            // Find the content div, which is the next element after the header
            const dropdownContent = this.nextElementSibling;

            // Check if the content is currently visible
            const isVisible = dropdownContent.style.display === 'block';

            // If it's visible, hide it and change icon to '+'.
            // Otherwise, show it and change icon to '-'.
            if (isVisible) {
                dropdownContent.style.display = 'none';
                toggleIcon.textContent = '+';
            } else {
                dropdownContent.style.display = 'block';
                toggleIcon.textContent = '-';
            }
        });
    });

});