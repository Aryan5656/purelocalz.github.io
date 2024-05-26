// JavaScript for Video Carousel
document.addEventListener("DOMContentLoaded", function() {
    let currentVideoIndex = 0;
    const videoUrls = [
        'https://www.youtube.com/embed/lyqckHDdYlA',
        'https://www.youtube.com/embed/DjAJE5cW674'
    ];
 
 
    const iframe = document.querySelector('.carousel-videos iframe');
 
 
    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
        updateCarousel();
    });
 
 
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
        updateCarousel();
    });
 
 
    function updateCarousel() {
        iframe.src = videoUrls[currentVideoIndex];
    }
 });
 document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
   
    // Here you can add your form submission logic, like sending data to a server
    console.log(`Name: ${name}, Email: ${email}`);
   
    // Show an alert or message to the user
    alert('Thank you for subscribing!');
 });
 