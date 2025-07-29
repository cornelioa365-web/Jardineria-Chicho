document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const content = document.getElementById('content');
    const sliderContainer = document.querySelector('.slider-container');
    const whatsappButton = document.getElementById('whatsappButton');
    const balloonContainer = document.querySelector('.balloon-container');
    const bubbleContainer = document.querySelector('.bubble-container');
    const fireworksContainer = document.querySelector('.fireworks-container');
    const pulsingLightsContainer = document.querySelector('.pulsing-lights-container');
    const shootingStarsContainer = document.querySelector('.shooting-stars-container');

    // Array con las rutas de tus imágenes (¡REEMPLAZA CON LAS TUYAS!)
    const images = [
        'imagen1.jpg', // Ejemplo: 'images/mi_esposa_1.jpg'
        'imagen2.jpg', // Ejemplo: 'images/vacaciones_2.jpg'
        'imagen3.jpg', // Ejemplo: 'images/familia_3.jpg'
        'imagen4.jpg'  // Agrega más rutas de tus imágenes aquí
    ];

    let currentImageIndex = 0;
    let sliderInterval;
    let borderSparkInterval; // Intervalo para las chispas del borde

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function initializeSlider() {
        images.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.classList.add('slider-image');
            if (index === 0) {
                img.classList.add('active');
            }
            sliderContainer.appendChild(img);
        });
    }

    function showNextImage() {
        const currentImage = document.querySelector('.slider-image.active');
        if (currentImage) {
            currentImage.classList.remove('active');
        }

        currentImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = document.querySelectorAll('.slider-image')[currentImageIndex];
        if (nextImage) {
            nextImage.classList.add('active');
        }
    }

    // --- Funciones para generación continua de efectos de fondo ---

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${getRandomNumber(0, 100)}vw`;
        balloon.style.animationDuration = `${getRandomNumber(8, 15)}s`;
        balloon.style.animationDelay = `${getRandomNumber(0, 0.5)}s`;
        const colors = ['rgba(255, 0, 255, 0.8)', 'rgba(0, 255, 255, 0.8)', 'rgba(255, 255, 0, 0.8)'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloonContainer.appendChild(balloon);

        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = getRandomNumber(15, 40);
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${getRandomNumber(0, 100)}vw`;
        bubble.style.animationDuration = `${getRandomNumber(6, 12)}s`;
        bubble.style.animationDelay = `${getRandomNumber(0, 1)}s`;
        bubbleContainer.appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${getRandomNumber(10, 90)}vw`;
        firework.style.top = `${getRandomNumber(10, 80)}vh`;
        firework.style.animationDelay = `${getRandomNumber(0, 0.2)}s`;
        fireworksContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }

    function createPulsingLight() {
        const light = document.createElement('div');
        light.classList.add('pulsing-light');
        const size = getRandomNumber(50, 150);
        light.style.width = `${size}px`;
        light.style.height = `${size}px`;
        light.style.left = `${getRandomNumber(0, 100)}vw`;
        light.style.top = `${getRandomNumber(0, 100)}vh`;
        light.style.animationDuration = `${getRandomNumber(2.5, 4)}s`;
        light.style.animationDelay = `${getRandomNumber(0, 1)}s`;
        pulsingLightsContainer.appendChild(light);

        light.addEventListener('animationend', () => {
            light.remove();
        });
    }

    function createShootingStar() {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        star.style.left = `${getRandomNumber(-50, 20)}vw`;
        star.style.top = `${getRandomNumber(-50, 20)}vh`;
        star.style.animationDuration = `${getRandomNumber(4, 7)}s`;
        star.style.animationDelay = `${getRandomNumber(0, 8)}s`;
        shootingStarsContainer.appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // --- Configuración de Particles.js para efecto de Aurora Boreal (se mantiene) ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 1200
                }
            },
            "color": {
                "value": ["#66ff66", "#00ffff", "#ff00ff", "#ffff66"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 8,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "size_min": 2,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 20,
                    "duration": 2,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    // Función para crear una chispa (para la cola de la cometa y la explosión)
    function createKiteSpark(x, y, isExplosion = false) {
        const spark = document.createElement('div');
        spark.classList.add('kite-spark');
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        if (isExplosion) {
            spark.style.animation = `sparkExplosion ${getRandomNumber(0.8, 1.5)}s ease-out forwards`;
            spark.style.setProperty('--x', `${getRandomNumber(-window.innerWidth / 2, window.innerWidth / 2)}px`);
            spark.style.setProperty('--y', `${getRandomNumber(-window.innerHeight / 2, window.innerHeight / 2)}px`);
            spark.style.backgroundColor = `#FFD700`;
            spark.style.boxShadow = `0 0 10px #FFD700, 0 0 20px #FFFF00`;
            spark.style.width = `${getRandomNumber(5, 15)}px`;
            spark.style.height = `${getRandomNumber(5, 15)}px`;
            spark.style.zIndex = '100';
        } else {
            spark.style.animation = `sparkFadeOut 1.5s ease-out forwards`;
            spark.style.animationDelay = `${getRandomNumber(0, 0.2)}s`;
        }
        document.body.appendChild(spark);

        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }

    // Función para generar la explosión de chispas
    function generateSparkExplosion() {
        const numSparks = 200;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < numSparks; i++) {
            createKiteSpark(centerX, centerY, true);
        }
    }

    // FUNCIÓN PARA CREAR UNA CHISPA CAYENDO DEL BORDE DEL CONTENEDOR
    function createBorderSpark() {
        // Asegúrate de que content tenga un tamaño y sea visible antes de intentar obtener sus dimensiones
        // Usa requestAnimationFrame para esperar que el navegador esté listo para pintar el siguiente frame
        requestAnimationFrame(() => {
            const contentRect = content.getBoundingClientRect();

            // Si el elemento aún no tiene dimensiones o no es visible, salimos
            if (contentRect.width === 0 || contentRect.height === 0) {
                return;
            }

            const spark = document.createElement('div');
            spark.classList.add('border-spark');

            // Posición horizontal aleatoria a lo largo del ancho del contenedor
            const startX = getRandomNumber(0, contentRect.width);
            spark.style.left = `${startX}px`;
            spark.style.top = `0px`; // **Cambio clave: Inicia exactamente en el borde superior**

            // Asigna propiedades CSS personalizadas para la animación
            spark.style.setProperty('--fall-distance', `${getRandomNumber(contentRect.height * 0.9, contentRect.height * 1.5)}px`); // Cae por lo menos hasta la parte inferior
            spark.style.setProperty('--drift-x', `${getRandomNumber(-40, 40)}px`); // Desplazamiento horizontal aleatorio y un poco más notorio
            spark.style.animation = `fallingSpark ${getRandomNumber(1.5, 3)}s linear forwards`; // Duración aleatoria

            content.appendChild(spark); // Añade la chispa como hijo del contenedor #content

            // Elimina la chispa una vez que termina su animación para optimizar el DOM
            spark.addEventListener('animationend', () => {
                spark.remove();
            });
        });
    }


    // Evento al hacer clic en el botón de inicio
    startButton.addEventListener('click', function() {
        startButton.disabled = true;
        startButton.style.cursor = 'default';

        startButton.classList.add('flying');
        startButton.style.animationPlayState = 'running';

        let sparkTailInterval = setInterval(() => {
            const kiteRect = startButton.getBoundingClientRect();
            const sparkX = kiteRect.left + kiteRect.width / 2 + getRandomNumber(-10, 10);
            const sparkY = kiteRect.bottom - 10 + getRandomNumber(-10, 10);
            createKiteSpark(sparkX, sparkY, false);
        }, 80);

        const kiteAnimationDuration = 5000;

        setTimeout(() => {
            clearInterval(sparkTailInterval);
        }, kiteAnimationDuration - 1200);

        setTimeout(() => {
            generateSparkExplosion();
        }, kiteAnimationDuration - 1000);


        setTimeout(() => {
            startButton.style.display = 'none';
            content.style.display = 'flex';
            content.classList.add('visible');

            initializeSlider();
            if (images.length > 1) {
                sliderInterval = setInterval(showNextImage, 4000);
            }

            // Inicia la generación de chispas del borde
            // AÑADIMOS UN PEQUEÑO RETRASO para asegurarnos de que el contenedor #content esté listo
            // Y usamos requestAnimationFrame dentro de createBorderSpark para mayor robustez
            borderSparkInterval = setInterval(createBorderSpark, 50); // Genera una chispa cada 50ms para muchas chispas
            // Puedes ajustar este valor: 100 para menos chispas, 30 para aún más.

            setInterval(createBalloon, 1000);
            setInterval(createBubble, 300);
            setInterval(createPulsingLight, 1500);
            setInterval(createShootingStar, 8000);

            createFirework();
            setTimeout(() => {
                setInterval(createFirework, 1500);
            }, 500);

            setTimeout(() => {
                if (sliderInterval) {
                    clearInterval(sliderInterval);
                }
                if (borderSparkInterval) { // Detiene la generación de chispas del borde al final
                    clearInterval(borderSparkInterval);
                }
                sliderContainer.style.display = 'none';
                whatsappButton.style.display = 'block';
            }, (images.length * 4000) + 2000);
        }, kiteAnimationDuration);
    });

    whatsappButton.addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumber = '+50766558054'; // ¡REEMPLAZA CON TU NÚMERO DE TELÉFONO!
        const message = '¡Hola, mi amor! Vi tu sorpresa de cumpleaños y me encantó. Te amo ❤️';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    });
});