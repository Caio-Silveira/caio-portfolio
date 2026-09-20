import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element: Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

export const fadeInUp = (element: Element, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1.2,
    delay,
    ease: "power3.out",
  });
};

export const staggerReveal = (elements: Element[], delay = 0) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    delay,
    ease: "power3.out",
  });
};

export const splitTextReveal = (element: Element) => {
  const text = element.textContent || "";
  const chars = text.split("");
  element.textContent = "";

  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
  });

  return gsap.from(element.children, {
    opacity: 0,
    y: 20,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: "back.out",
  });
};

export const parallaxEffect = (element: Element, speed = 0.5) => {
  return gsap.to(element, {
    y: () => -(element.getBoundingClientRect().top * speed),
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const createScrollTrigger = (
  trigger: Element,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options?: ScrollTrigger.Vars
) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    ...options,
  });
};
