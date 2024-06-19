// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import gsap from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

console.log("Script chargé !");

gsap.registerPlugin(ScrollTrigger) 
let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '#project_container',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom bottom', // end after scrolling 500px beyond the start
        markers: true,
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
    }
});


