let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color:#b1afd1;">Desarrollo web, Python, Javascript y Node.js.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
