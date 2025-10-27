// Archivo: scripts.js

document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // 1. Botón de WhatsApp Flotante (Borde de Color)
    // ==================================================
    const whatsappBtn = document.getElementById('whatsapp-flotante');
    
    if (whatsappBtn) {
        const colors = ['#FF4136', '#FFDC00']; // Rojo y Amarillo
        let colorIndex = 0;

        function changeBorderColor() {
            // Alterna el color del borde cada 2 segundos
            whatsappBtn.style.borderColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length; 
        }

        setInterval(changeBorderColor, 2000);
    }


    // ==================================================
    // 2. Efecto de Entrada al Hacer Scroll 
    // ==================================================
    const animatedElements = document.querySelectorAll('.seccion-animada');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ==================================================
    // 3. Funcionalidad de Slider (Carrusel)
    // ==================================================
    let slideIndex = 1; // Empezamos en el primer slide
    const slides = document.querySelectorAll('.slider-content .slide');
    const nextBtn = document.querySelector('.slider-content .next');
    const prevBtn = document.querySelector('.slider-content .prev');
    let timer; // Definimos timer aquí para que esté disponible globalmente

    // Salir si no hay slides para evitar errores
    if (slides.length > 0) { 

        // Función principal para mostrar el slide
        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1; // Vuelve al primero
            }
            if (n < 1) {
                slideIndex = slides.length; // Va al último
            }
            
            // Oculta todos los slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            
            // Muestra el slide actual
            slides[slideIndex - 1].classList.add('active');
        }

        // Navegación manual (botones)
        function plusSlides(n) {
            // Detiene el temporizador y luego lo reinicia
            clearTimeout(timer); 
            showSlides(slideIndex += n);
            timer = setTimeout(autoSlide, 5000); // Reinicia la rotación automática
        }

        // Rotación automática
        function autoSlide() {
            showSlides(slideIndex += 1);
            timer = setTimeout(autoSlide, 5000); // Se llama a sí misma cada 5 segundos
        }

        // Inicialización del Slider
        showSlides(slideIndex); // Muestra el primer slide
        timer = setTimeout(autoSlide, 5000); // Inicia la rotación

        // Asignar eventos a los botones
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => plusSlides(1));
            prevBtn.addEventListener('click', () => plusSlides(-1));
        }
    }


    // ==================================================
    // 4. Hojas Flotantes (Efecto Jardín) - ¡CÓDIGO AÑADIDO!
    // ==================================================
    const leavesContainer = document.getElementById('leaves-container');

    if (leavesContainer) { // Solo ejecuta si el contenedor existe (en index.html)
        const totalLeaves = 15; // Número de hojas que deseas
        const colors = ['#38761D', '#6AA84F', '#93C47D']; // Variedad de tonos verdes

        for (let i = 0; i < totalLeaves; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf');
            
            // Posición inicial aleatoria (horizontal)
            leaf.style.left = `${Math.random() * 100}vw`; 
            
            // Tamaño aleatorio
            const size = Math.random() * 15 + 10; // Entre 10px y 25px
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;
            
            // Color aleatorio
            leaf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Velocidad de caída y oscilación aleatoria (para que se vean naturales)
            const duration = Math.random() * 15 + 8; // Duración de caída entre 8s y 23s
            leaf.style.animationDuration = `${duration}s, ${Math.random() * 5 + 3}s`; 
            
            // Retraso para que no caigan todas a la vez
            leaf.style.animationDelay = `-${Math.random() * 10}s, -${Math.random() * 5}s`; 
            
            leavesContainer.appendChild(leaf);
        }
    }
});