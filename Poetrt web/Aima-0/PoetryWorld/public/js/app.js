// Initialize AOS
AOS?.init({
    duration: 1000,
    once: true
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links'); 
const navButtons = document.querySelector('.nav-buttons');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks?.classList.toggle('active');
    navButtons?.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
        navButtons?.classList.remove('active');
    });
});

// Authentication
function logout() {
    const logoutButton = document.getElementById('logout-button');
    const authButtons = document.getElementById('authButtons');

    if (logoutButton) logoutButton.style.display = 'none';
    if (authButtons) {
        authButtons.innerHTML = `
            <a href="login.html" class="nav-btn login">Login</a>
            <a href="signup.html" class="nav-btn signup">Sign Up</a>
        `;
    }
}

// Book Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const books = document.querySelectorAll('.Book-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            books.forEach(book => {
                const category = book.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    book.style.display = 'block';
                    book.style.animation = 'fadeIn 0.5s ease';
                } else {
                    book.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => {
                        book.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Newsletter Subscription
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('.newsletter-input')?.value;
    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    }
});

// Smooth scroll for footer links
document.querySelectorAll('.footer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
