import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, DrawSVGPlugin,  MotionPathPlugin);



const mainTL = gsap.timeline();


function drawShape(){
  const tl = gsap.timeline();
  tl.from("#logo", {duration: 1, drawSVG: "0%"});
  return tl;
}

function rainbowDraw(){
  const tl = gsap.timeline();
  tl.from("#orange", {duration: 1.5, drawSVG: "0%"})
  .from("#pink", {duration: 1.5, drawSVG: "0%", stagger:0.25})
  .from("#purple", {duration: 0.5, drawSVG: "0%", stagger:0.25})
  .from("#blue", {duration: 0.5, drawSVG: "0%", stagger:0.25});
  return tl;
}

function rainbowBlockAppear(){
  const tl = gsap.timeline();
  tl.from("#blue-line", {autoAlpha:0, duration: 0.2}, {alpha:1})
  .from("#line", {autoAlpha:0, duration: 0.2}, {alpha:1});
  return tl;
}

function byeRainbowDraw(){
  const tl = gsap.timeline();
  tl.to("#orange", {duration:0.1, alpha:0}, "together")
  .to("#pink", {duration:0.1, alpha:0}, "together")
  .to("#purple", {duration:0.1, alpha:0}, "together");
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
  tl.from("#slogan", {duration: 2, alpha:0})
  return tl;
}

function bottomLeave(){
  const tl = gsap.timeline();
  tl.to("#new-rainbow", {duration: 1, alpha:0, x:"-=1000"}, "same-time");
  return tl;
}





mainTL.add(drawShape())
.add(rainbowDraw(), "same")
.add(rainbowBlockAppear())
.add(byeRainbowDraw(), "yessame")
.add(nameDrop(), "same")
.add(blockMove(), "yessame")
.add(fadeInLine())
.add(bottomLeave());



GSDevTools.create();
