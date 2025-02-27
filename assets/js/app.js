const navLinks = document.getElementById('navLinks')
const menuIcon = document.getElementById('menuIcon')
const closeIcon = document.getElementById('closeIcon')

menuIcon.addEventListener('click', () => {
    navLinks.style.transition = '0.3s ease'
    navLinks.classList.add('top-0')
})
closeIcon.addEventListener('click', () => {
    navLinks.style.transition = '0.3s ease'
    navLinks.classList.remove('top-0')
})

function startCounterAnimation(counter) {
    const target = parseInt(counter.getAttribute('data-count').split('-')[1]);
    let count = 50;
    const increment = target / 100;

    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            counter.textContent = target;
            clearInterval(interval);
        } else {
            counter.textContent = Math.ceil(count);
        }
    }, 10);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            entry.target.querySelectorAll('.counter').forEach(startCounterAnimation);
            observer.unobserve(entry.target);  
        }
    });
}, { threshold: 0.5 }); 

observer.observe(document.getElementById('clients-count'));

