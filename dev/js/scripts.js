import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);


//this is a global variable ; aka global constant
//whatever js file you make, they'll be aware of this constant 
const mainTL = gsap.timeline();


//mainTL.from("#right-square",{duration:1, alpha:0});


//always include return tl; , and the constant line of code, you can make up names for functions
//constants within fuctions are local and only available/accesible within their specific functions

function fadeInSquare(){
    const tl = gsap.timeline();
    tl.from("#right-square",{duration:1, alpha:0});
    return tl;
}




//add functions to main tl chronologically and after the last one include ";"
//this is the parent of the functions and dictates which happens first
//if you want 2 things to happen at the same time:
// after purple brackets, put: "same" within the yellow one on BOTH elements
mainTL.add(fadeInSquare());




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



       
       
