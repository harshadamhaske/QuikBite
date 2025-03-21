// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Function for the search input focus/blur effects
    const searchInput = document.querySelector('.hero input');

    searchInput.addEventListener('focus', function() {
        searchInput.style.borderColor = "#ff5722"; // Change border color on focus
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.borderColor = "#ccc"; // Reset border color on blur
    });

    // Function to handle smooth scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Adding a scroll event listener to the window for adding a scroll-to-top button (Optional)
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = "↑";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.backgroundColor = "#ff5722";
    scrollButton.style.color = "#fff";
    scrollButton.style.border = "none";
    scrollButton.style.padding = "10px";
    scrollButton.style.borderRadius = "5px";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none"; // Initially hide the button

    document.body.appendChild(scrollButton);

    // Show the scroll button when user scrolls down 100px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Event listener for the scroll-to-top button
    scrollButton.addEventListener('click', scrollToTop);

    // Function to handle the form submission (this is just a placeholder for future functionality)
    const searchForm = document.querySelector('form'); // Assuming a form will wrap the input in future
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let searchQuery = searchInput.value.trim();
            if (searchQuery) {
                alert('You searched for: ' + searchQuery);
            } else {
                alert('Please enter a search term!');
            }
        });
    }

});
