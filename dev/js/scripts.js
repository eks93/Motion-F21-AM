import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin);


const mainTL = gsap.timeline();


function moveSquares(){
  const tl = gsap.timeline();
  tl.from("#left-square",{duration: 1, x:"-=600"},"makeShape")
  .from("#right-square",{duration: 1, x:"+=1200"},"makeShape")
  .from("#top-square",{duration: 1, y:"-=600"},"makeShape")
  .from("#bottom-square",{duration: 1, y:"+=600"},"makeShape");
  return tl;
}

function expand(){
  const tl = gsap.timeline();
  tl.from("#start-one", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-one", {duration: 0.5, ease:"slow", morphSVG:"#end-one"}, "move")
  return tl;
}

function expandTwo (){
  const tl = gsap.timeline();
  tl.from("#start-two", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-two", {duration: 0.5, ease:"slow", morphSVG:"#end-two"});
  return tl;
}

function expandTwoAgain (){
  const tl = gsap.timeline();
  tl.from("#start-start-two", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-start-two", {duration: 0.5, ease:"slow", morphSVG:"#end-end-two"});
  return tl;
}

function expandThree (){
  const tl = gsap.timeline();
  tl.from("#start-three", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-three", {duration: 0.5, morphSVG:"#end-three"}, "move-three")
  .from("#start-start-three", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-start-three", {duration: 0.5, morphSVG:"#end-end-three"}, "move-three");
  return tl;
}

function expandFour (){
  const tl = gsap.timeline();
  tl.from("#start-four", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
  .to("#start-four", {duration: 0.75, morphSVG:"#end-four"});
  return tl;
}

function expandFive (){
  const tl = gsap.timeline();
  tl.from("#start-five", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
  .to("#start-five", {duration:0.25, morphSVG:"#end-five"}, "move-five")
  .from("#start-start-five", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
  .to("#start-start-five", {duration: 0.25, morphSVG:"#end-end-five"}, "move-five")
  return tl;
}

function expandSix (){
  const tl = gsap.timeline();
  tl.from("#start-six", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
  .to("#start-six", {duration:0.25, morphSVG:"#end-six"}, "move-six")
  .from("#start-start-six", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
  .to("#start-start-six", {duration: 0.25, morphSVG:"#end-end-six"}, "move-six");
  return tl;
}

function flyIn(){
  const tl = gsap.timeline();
  tl.from("#fly-in-sq", {duration: 0.75, x:"+=1000"}, "fly");
  return tl;
}

function flyInTwo(){
  const tl = gsap.timeline();
  tl.from("#fly-in-sq-two", {duration: 0.75, x:"+=1000"}, "fly");
  return tl;
}

function rotateShape(){
   const tl = gsap.timeline();
    tl.to("#logo", {duration: 0.5, rotation: "90_ccw", transformOrigin: "50% 50%"});
   return tl;
 }

function moveDown(){
  const tl = gsap.timeline();
  tl.to("#logo", {duration: 0.5, ease:"power1.inOut", y:"+=300"})
  return tl;
}


mainTL.add(moveSquares())
.add(expand())
.add(expandTwo(), "same")
.add(expandTwoAgain(), "same")
.add(expandThree(), "sameThree")
.add(expandFour(), "sameThree")
.add(expandFive())
.add(expandSix(), "sameTwo")
.add(flyIn(), "sameTwo")
.add(flyInTwo())
.add(rotateShape())
.add(moveDown());



//always include return tl; , and the constant line of code, you can make up names for functions
//constants within fuctions are local and only available/accesible within their specific functions



// //add functions to main tl chronologically and after the last one include ";"
// //this is the parent of the functions and dictates which happens first
// //if you want 2 things to happen at the same time:
// // after purple brackets, put: "same" within the yellow one on BOTH elements








GSDevTools.create();













// use this too
// const mainTL = gsap.timeline();





//console.log(heroHeight.clientHeight + "px is the height of the hero section");
//console.log(heroHeight.clientWidth + "px is the width of the hero section");

// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}
// mainTL.to("#hero",{duration:2, alpha:0});

//mainTL.from("#hero >div article",{duration:1, alpha:0})
// .from("#title", {duration:2, blur:8, ease: "none"});

//use this one
// mainTL.from("#hero article", {duration: 2, alpha:0, y:"+=1000"})
  //  .from("#title", {duration:0.25, alpha:0, blur:10, scale:1.5})
  //  .to("#title", {duration:1, scale:1})
  //  .from("splittext", {duration:1, y:"+=20", stagger:0.5});



       
       
