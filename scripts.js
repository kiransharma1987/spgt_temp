function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll-to-top button
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
    // Ensure the button exists to prevent errors
    if (scrollTopBtn) {
        // Function to show or hide the button based on scroll position
        function toggleScrollTopBtn() {
            // Get the current scroll position
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            if (scrollY > 100) { // Show button after scrolling down 100px
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        }
        
        // Add scroll event listener to window
        window.addEventListener('scroll', toggleScrollTopBtn);
        
        // Function to scroll smoothly to the top
        function scrollToTop(event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll
            });
        }
        
        // Add click event listener to the scroll-to-top button
        scrollTopBtn.addEventListener("click", scrollToTop);
    } else {
        console.warn("Scroll-to-Top button with id 'scrollTopBtn' not found.");
    }
});