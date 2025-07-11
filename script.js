function scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        window.scrollTo({
            top: contactsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл и подсветка пунктов меню
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Функция для подсветки активного раздела
    function activateMenu() {
        let fromTop = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            
            if (fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Плавный скролл при клике
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Подчеркиваем все пункты при скролле
    function underlineAllOnScroll() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            navLinks.forEach(link => {
                link.classList.add('active');
            });
        } else {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            activateMenu();
        }
    }
    

    // Анимация элементов при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-fade-in');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    // Анимация для карточек преимуществ
    function animateCards() {
        const cards = document.querySelectorAll('.benefit-card');
        
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.animation = `fadeIn 0.6s forwards ${index * 0.2}s`;
            }
        });
    }
    
    // Анимация для преимуществ
    function animateAdvantages() {
        const items = document.querySelectorAll('.advantage-item');
        
        items.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.animation = `fadeIn 0.6s forwards ${index * 0.2}s`;
            }
        });
    }
    
    // Анимация для элементов услуг
    function animateFeatures() {
        const items = document.querySelectorAll('.feature-item');
        
        items.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.animation = `fadeIn 0.6s forwards ${index * 0.1}s`;
            }
        });
    }
    
    // Анимация для FAQ
    function animateFaqItems() {
        const items = document.querySelectorAll('.accordion-item');
        
        items.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.animation = `fadeIn 0.6s forwards ${index * 0.15}s`;
            }
        });
    }
    
    // Анимация кнопок контактов
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Обработчики событий
    window.addEventListener('scroll', () => {
        underlineAllOnScroll();
        animateOnScroll();
        animateCards();
        animateAdvantages();
        animateFeatures();
        animateFaqItems();
    });
    
    // Инициализация
    activateMenu();
    animateOnScroll();
    animateCards();
    animateAdvantages();
    animateFeatures();
    animateFaqItems();
});