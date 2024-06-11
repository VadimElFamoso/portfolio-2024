console.log("Script chargé !");
import { createApp } from 'vue'
import App from './App.vue'
import TypeWriter from 'typewriter-effect/dist/core';

createApp(App).mount('#app')

// Typewriter effect
const tw = new TypeWriter('.title h2', {
    loop: true,
    delay: 75,
});

tw
.start()
.typeString('Etudiant en B.U.T 2A MMI : parcours <span>développement web et dispositifs interactifs.</span>')
.pauseFor(750)
.deleteAll(25)
.typeString('Développeur web <span>passionné.</span>')
.pauseFor(750)
.deleteAll(25)
.typeString('Papa de <span>Ryuk</span> le Maincoon :)')
.pauseFor(750)
.deleteAll(25)
.typeString('Gérant de <span>CodeCorp.</span> : entreprise spécialisée <br>dans<span> les services web.</span>')
.pauseFor(750)
.deleteAll(25)
.typeString('Développeur <span>Java</span> depuis 10 ans !')
.pauseFor(750)
.deleteAll(25)
.typeString("Ancien féru <span>d'Arduino...</span>")
.pauseFor(750)
.deleteAll(25);
