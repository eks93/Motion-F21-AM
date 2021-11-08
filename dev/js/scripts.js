import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();





//always include return tl; , and the constant line of code, you can make up names for functions
//constants within fuctions are local and only available/accesible within their specific functions


function cubeRotation(){
  const tl = gsap.timeline();
  tl.to();
  return tl;
}


function uniteCubes(){
  const tl = gsap.timeline();
  tl.to();
  return tl;
}


function rotateShape(){
  const tl = gsap.timeline();
  tl.to();
  return tl;
}


function growShape(){
  const tl = gsap.timeline();
  tl.fromTo("#4", {x:154.82, y:508.29, opactiy:0}, {x:114.32, y:578.44, opacity:1, duration:0.25});
  tl.fromTo("#5", {x:114.32, y:578.44, opacity:0}, {x:77.21, y:643.39, opacity:1,duration:0.25});
            ("#16", {x:84.64, y:432.47, opacity:0}, {x:69.21, y:362.39, opacity:0, duration:0.25});
  tl.fromTo("#9", {x:77.21, y:643.39, opacity:0}, {x:40.21, y:708.39, opacity:1, duration:0.25});
  tl.fromTo("#10", {x:40.21, y:708.39, opacity:0}, {x:126.21, y:708.39, opacity:1, duration:0.25});
            ("#17", {x:69.21, y:362.39, opactiy:0}, {x:26.21, y:288.39, opacity:1, duration:0.25});
            ("#18", {x:26.21, y:288.39, opacity:0}, {x:113.21, y:288.71, opacity:1, duration:0.25});
            ("#6", {x:241.62, y:508.97, opacity:0}, {x:328.21, y:508.97, opaacity:1, duration:0.25});
  tl.fromTo("#13", {x:126.21, y:708.39, opacity:0}, {x:211.21, y:708.39, opacity:1, duration:0.25});
  tl.fromTo("#12", {x:211.21, y:708.39, opacity:0}, {x:253.21, y:636.39, opacity:1, duration:0.25});
          ("#19", {x:113.21, y:288.71, opacity:0}, {x:200.01, y:289.39, opacity:1, duration:0.25});
          ("#7", {x:328.21, y:508.97, opacity:0}, {x:413.21, y:508.97, opacity:1, duration:0.25});
          ("#20", {x:200.01, y:289.39, opacity:0}, {x:286, y:289.39, opacity:1, duration:0.25});
          ("#8", {x:413.21, y:508.97, opacity:0}, {x:499.81, y:508.97, opacity:1, duration:0.25});
          ("#21", {x:499.81, y:508.97, opacity:0}, {x:456.21, y:434.39, opacity:1, duration:0.25});
  tl.fromTo("#11", {x:253.21, y:636.39, opacity:0}, {x:286.21, y:577.39, opacity:1, duration:0.25});
          ("#22", {x:286.21, y:577.39, opacity:0}, {x:371.61, y:289.39, opacity:1, duration:0.25});
  return tl;
}


function flyInSquare(){
  const tl = gsap.timeline();
  tl.fromTo("#14", {x:1500, y:640}, {x:338, y:640, duration:0.25});
  tl.fromTo("#15", {x:1500, y:711},{x:384, y:711, duration:0.25});
  return tl;
}


function rotateLogo(){
  const tl = gsap.timeline();
  tl.to()
  return tl;
}


//add functions to main tl chronologically and after the last one include ";"
//this is the parent of the functions and dictates which happens first
//if you want 2 things to happen at the same time:
// after purple brackets, put: "same" within the yellow one on BOTH elements


mainTL.add(cubeRotation())
      .add(uniteCubes())
      .add(rotateShape())
      .add(growShape())
      .add(flyInSquare())
      .add(rotateLogo());






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



       
       
