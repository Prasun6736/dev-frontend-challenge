document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Snowfall Effect
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄"; 
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; 
        snowflake.style.animationTimingFunction = `cubic-bezier(${Math.random() * 1 + 0.5}, 0, 0.5, 1)`; 
        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
    setInterval(createSnowflake, 100);
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`; // Move the background at half the scroll speed
    });
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 150) {
                element.classList.add("fade-in");
            } else {
                element.classList.remove("fade-in");
            }
        });
    }
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); 
});
