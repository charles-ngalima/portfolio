document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-header');
    const numberOfSnowflakes = 100; 

    // Fonction pour créer un flocon
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '•'; 

        const size = Math.random() * 12 + 12; 
        snowflake.style.fontSize = `${size}px`;
        
        const startX = Math.random() * 100;
        snowflake.style.left = `${startX}vw`;
        
        const startY = -size;
        snowflake.style.top = `${startY}px`; 

        const duration = Math.random() * 20 + 10; 
        snowflake.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 10;
        snowflake.style.animationDelay = `${delay}s`;

        snowflake.style.animationName = 'fall';
        snowflake.style.animationTimingFunction = 'linear';
        snowflake.style.animationIterationCount = 'infinite';

        snowContainer.appendChild(snowflake);
        
        snowflake.addEventListener('animationiteration', () => {
            snowflake.style.left = `${Math.random() * 100}vw`;
        });
    }

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
});

/*-------------bouton remonter-------------*/

const topBtn = document.getElementById("topBtn");

// Affiche le bouton quand on scrolle
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Remonte en haut avec un scroll fluide
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*--------------------------------------------*/
/*         LOGIQUE DU MODAL CV                */
/*--------------------------------------------*/

const modal = document.getElementById("modalCv");
const btn = document.getElementById("btnCv");
const span = document.getElementsByClassName("close-modal")[0];

if(btn && modal) {
    // Ouvrir le modal
    btn.onclick = function() {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Bloque le scroll
    }

    // Fermer avec la croix
    span.onclick = function() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto"; // Réactive le scroll
    }

    // Fermer en cliquant à côté
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    }
}