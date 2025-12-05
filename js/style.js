document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-header');
    const numberOfSnowflakes = 100; // Définissez le nombre de flocons que vous voulez

    // Fonction pour créer un flocon
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Contenu du flocon (vous pouvez utiliser '•' ou un emoji '❄️')
        snowflake.innerHTML = '•'; 

        // Taille aléatoire (entre 12px et 24px)
        const size = Math.random() * 12 + 12; 
        snowflake.style.fontSize = `${size}px`;
        
        // Position X aléatoire (sur toute la largeur)
        const startX = Math.random() * 100;
        snowflake.style.left = `${startX}vw`;
        
        // Position Y de départ (légèrement hors écran)
        snowflake.style.top = `${-size}px`; 

        // Vitesse et durée d'animation aléatoires
        const duration = Math.random() * 20 + 10; // Entre 10s et 30s
        snowflake.style.animationDuration = `${duration}s`;
        
        // Délai d'animation aléatoire pour les faire commencer à différents moments
        const delay = Math.random() * 10;
        snowflake.style.animationDelay = `${delay}s`;

        // Animation de chute (CSS Keyframes)
        snowflake.style.animationName = 'fall';
        snowflake.style.animationTimingFunction = 'linear';
        snowflake.style.animationIterationCount = 'infinite';

        // Ajout du flocon au conteneur
        snowContainer.appendChild(snowflake);
        
        // Gestion de la boucle : supprimer le flocon une fois qu'il est tombé pour le recréer
        snowflake.addEventListener('animationiteration', () => {
            // Repositionne le flocon en haut de manière aléatoire
            snowflake.style.left = `${Math.random() * 100}vw`;
        });
    }

    // Création de tous les flocons
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
