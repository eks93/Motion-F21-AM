import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, DrawSVGPlugin,  MotionPathPlugin);



const mainTL = gsap.timeline();


function drawShape(){
  const tl = gsap.timeline();
  tl.from("#logo", {duration: 3, drawSVG: "0%"});
  return tl;
}

function rainbowDraw(){
  const tl = gsap.timeline();
  tl.from("#orange", {duration: 1.5, drawSVG: "0%"})
  .from("#pink", {duration: 1.5, drawSVG: "0%", stagger:0.25})
  .from("#purple", {duration: 1.5, drawSVG: "0%", stagger:0.75})
  .from("#blue", {duration: 1.5, drawSVG: "0%", stagger:0.75});
  return tl;
}

function rainbowBlockAppear(){
  const tl = gsap.timeline();
  tl.from("#blue-line", {autoAlpha:0, duration: 0.2}, {alpha:1})
  .from("#line", {autoAlpha:0, duration: 0.2}, {alpha:1});
  return tl;
}

function nameDrop(){
  const tl = gsap.timeline();
  tl.from("#f", {duration: 0.5, y:"-=1000", ease: "bounce.out"})
  .from("#a-two", {duration: 0.3, y:"-=1000", ease: "back.out(0.4)"})
  .from("#r", {duration: 0.3, y:"-=1000", ease: "back.out(0.4)"})
  .from("#m", {duration: 0.3, y:"-=1000", ease: "back.out(0.4)"})
  .from("#a", {duration: 0.3, y:"-=1000", ease: "back.out(0.5)"})
  .from("#p", {duration: 0.1, y:"-=1000", ease: "back.out(0.5)"})
  .from("#p-two", {duration: 0.2, y:"-=1000", ease: "back.out(0.5)"})
  .from("#e", {duration: 0.3, y:"-=1000", ease: "back.out(0.5)"})
  .from("#l", {duration: 0.3, y:"-=1000", ease: "back.out(0.5)"});
  return tl;
}

function blockMove(){
  const tl = gsap.timeline();
  tl.to("#line", {duration: 1, motionPath:{path:"#white-line", align:"white-line", ease: "bounce.in"}})
  .from("#new-rainbow", {duration: 2, x:"+=800", ease: "bounce.out", stagger: 0.5})
  return tl;
}

function fadeInLine(){
  const tl = gsap.timeline();
  tl.from("#slogan", {duration: 2 })
  return tl;
}





mainTL.add(drawShape())
.add(rainbowDraw())
.add(rainbowBlockAppear())
.add(nameDrop())
.add(blockMove())
.add(fadeInLine());



GSDevTools.create();




// function moveSquares(){
//   const tl = gsap.timeline();
//   tl.from("#left-square",{duration: 1, x:"-=600"},"makeShape")
//   .from("#right-square",{duration: 1, x:"+=1200"},"makeShape")
//   .from("#top-square",{duration: 1, y:"-=600"},"makeShape")
//   .from("#bottom-square",{duration: 1, y:"+=600"},"makeShape");
//   return tl;
// }

// function expand(){
//   const tl = gsap.timeline();
//   tl.from("#start-one", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-one", {duration: 0.5, ease:"slow", morphSVG:"#end-one"}, "move")
//   return tl;
// }

// function expandTwo (){
//   const tl = gsap.timeline();
//   tl.from("#start-two", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-two", {duration: 0.5, ease:"slow", morphSVG:"#end-two"});
//   return tl;
// }

// function expandTwoAgain (){
//   const tl = gsap.timeline();
//   tl.from("#start-start-two", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-start-two", {duration: 0.5, ease:"slow", morphSVG:"#end-end-two"});
//   return tl;
// }

// function expandThree (){
//   const tl = gsap.timeline();
//   tl.from("#start-three", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-three", {duration: 0.5, morphSVG:"#end-three"}, "move-three")
//   .from("#start-start-three", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-start-three", {duration: 0.5, morphSVG:"#end-end-three"}, "move-three");
//   return tl;
// }

// function expandFour (){
//   const tl = gsap.timeline();
//   tl.from("#start-four", {autoAlpha: 0, duration: 0.2}, {alpha: 1})
//   .to("#start-four", {duration: 0.75, morphSVG:"#end-four"});
//   return tl;
// }

// function expandFive (){
//   const tl = gsap.timeline();
//   tl.from("#start-five", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
//   .to("#start-five", {duration:0.25, morphSVG:"#end-five"}, "move-five")
//   .from("#start-start-five", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
//   .to("#start-start-five", {duration: 0.25, morphSVG:"#end-end-five"}, "move-five")
//   return tl;
// }

// function expandSix (){
//   const tl = gsap.timeline();
//   tl.from("#start-six", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
//   .to("#start-six", {duration:0.25, morphSVG:"#end-six"}, "move-six")
//   .from("#start-start-six", {autoAlpha: 0, duration: 0.25}, {alpha: 1})
//   .to("#start-start-six", {duration: 0.25, morphSVG:"#end-end-six"}, "move-six");
//   return tl;
// }

// function flyIn(){
//   const tl = gsap.timeline();
//   tl.from("#fly-in-sq", {duration: 0.75, x:"+=1000"}, "fly");
//   return tl;
// }

// function flyInTwo(){
//   const tl = gsap.timeline();
//   tl.from("#fly-in-sq-two", {duration: 0.75, x:"+=1000"}, "fly");
//   return tl;
// }

// function rotateShape(){
//    const tl = gsap.timeline();
//     tl.to("#logo", {duration: 0.5, rotation: "90_ccw", transformOrigin: "50% 50%"});
//    return tl;
//  }

// function moveDown(){
//   const tl = gsap.timeline();
//   tl.to("#logo", {duration: 0.5, ease:"power1.inOut", y:"+=250", x:"-=500", scale:0.25 })
//   return tl;
// }


// mainTL.add(moveSquares())
// .add(expand())
// .add(expandTwo(), "same")
// .add(expandTwoAgain(), "same")
// .add(expandThree(), "sameThree")
// .add(expandFour(), "sameThree")
// .add(expandFive())
// .add(expandSix(), "sameTwo")
// .add(flyIn(), "sameTwo")
// .add(flyInTwo())
// .add(rotateShape())
// .add(moveDown());      
       
