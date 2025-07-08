const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
});
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
});

// Toggle profile menu
document.querySelector('.profile-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const profileMenu = document.querySelector('.profile-menu');
    profileMenu.classList.toggle('active');
});

// Close profile menu when clicking outside
document.addEventListener('click', function(e) {
    const profileContainer = document.querySelector('.profile-container');
    if (!profileContainer.contains(e.target)) {
        document.querySelector('.profile-menu').classList.remove('active');
    }
});

//features
document.addEventListener('DOMContentLoaded', () => {
    const featureBoxes = document.querySelectorAll('#feature .fe-box');

    const checkScroll = () => {
        featureBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Add 'active' class when box is in viewport
            if (boxTop < windowHeight * 0.8) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    };

    // Run on scroll and initially
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

//products
const observerOptions = {
    threshold: 0.2 // Adjust visibility percentage
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateOnScroll.unobserve(entry.target); // Optional: run only once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up, .pro').forEach(el => {
    animateOnScroll.observe(el);
});

//createmore
const boxes = document.querySelectorAll('.blog-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
