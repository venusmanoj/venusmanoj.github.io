// === MENU & MODAL ===
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const modal = document.getElementById('enquiry-modal');
const closeBtn = document.querySelector('.close-btn');
const openModalBtns = document.querySelectorAll('.open-modal-btn');

// Toggle Menu
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

// Close Menu on Touch Anywhere
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Open Modal
openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        navLinks.classList.remove('active');
    });
});

// Close Modal
closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

// === INFINITE SLIDER LOGIC ===
function initMobileSlider() {
    if (window.innerWidth <= 768) {
        const slider = document.getElementById('product-slider');
        const cards = document.querySelectorAll('.product-card');
        
        // Clone first card for seamless loop
        const firstClone = cards[0].cloneNode(true);
        slider.appendChild(firstClone);
        
        let index = 0;
        const totalSlides = cards.length + 1; 

        setInterval(() => {
            index++;
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${index * 100}vw)`;

            if (index === totalSlides - 1) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    index = 0;
                    slider.style.transform = `translateX(0)`;
                }, 500); 
            }
        }, 2000);
    }
}
initMobileSlider();

// === ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.2 });
gsap.from(".stat-card", { scrollTrigger: ".about", opacity: 0, y: 30, stagger: 0.2, duration: 1 });
gsap.from(".process-step", { scrollTrigger: ".process", opacity: 0, y: 30, stagger: 0.2, duration: 0.8 });

// Cities Animation (Clear props to prevent visibility issues)
gsap.from(".city-pill", { 
    scrollTrigger: ".cities", 
    y: 15, 
    stagger: 0.05, 
    duration: 0.5,
    clearProps: "all" 
});