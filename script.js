function scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        window.scrollTo({
            top: contactsSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}



// Бургер-меню
function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.nav');
  
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    
    // Блокировка скролла при открытом меню
    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Закрытие меню при клике на ссылку
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
    initAccordion();
    initBurgerMenu();
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
    
    // Аккордеон FAQ - новая реализация
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            // Закрываем все другие элементы
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Переключаем текущий элемент
            const isActive = item.classList.toggle('active');
            
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}
    // Добавьте в обработчик событий
    document.querySelector('.header-cta').addEventListener('click', function(e) {
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
        animateOnScroll();
        animateCards();
        animateAdvantages();
        animateFeatures();
        animateFaqItems();
    });
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
    // Инициализация
    activateMenu();
    animateOnScroll();
    animateCards();
    animateAdvantages();
    animateFeatures();
    animateFaqItems();
});

