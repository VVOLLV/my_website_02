(function() {
    function init() {
        var themeToggle = document.getElementById('theme-toggle');
        var body = document.body;
        var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        var navLinks = document.querySelector('.nav-links');
        var themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
        var navbar = document.querySelector('.navbar');

        function setTheme(isDark) {
            if (isDark) {
                body.classList.add('dark');
                if (themeIcon) themeIcon.textContent = '☀️';
            } else {
                body.classList.remove('dark');
                if (themeIcon) themeIcon.textContent = '🌙';
            }
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }

        function initTheme() {
            var savedTheme = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme) {
                setTheme(savedTheme === 'dark');
            } else {
                setTheme(prefersDark);
            }
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                var isDark = body.classList.contains('dark');
                setTheme(!isDark);
            });
        }

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }

        initTheme();
        initParticles();
        initCursorEffect();
        initNavbarScroll();
        initScrollAnimations();
    }

    function initParticles() {
        var particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        var particleCount = 30;
        for (var i = 0; i < particleCount; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particle.style.opacity = 0.3 + Math.random() * 0.5;
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }

    function initCursorEffect() {
        var isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        var cursorCircle = document.createElement('div');
        cursorCircle.className = 'cursor-circle';
        document.body.appendChild(cursorCircle);

        var cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);

        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;

            cursorDot.style.left = x + 'px';
            cursorDot.style.top = y + 'px';

            cursorCircle.style.left = (x - 25) + 'px';
            cursorCircle.style.top = (y - 25) + 'px';
        });

        var interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag, .about-card, .contact-item');
        interactiveElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                cursorCircle.style.transform = 'scale(1.5)';
                cursorCircle.style.borderColor = '#764ba2';
            });
            el.addEventListener('mouseleave', function() {
                cursorCircle.style.transform = 'scale(1)';
                cursorCircle.style.borderColor = '#667eea';
            });
        });
    }

    function initNavbarScroll() {
        var navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    function initScrollAnimations() {
        var fadeElements = document.querySelectorAll('.section, .about-card, .skill-category, .project-card, .publication-item, .contact-item');
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        fadeElements.forEach(function(el) {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
