"use strict";
const dice = document.querySelector(".dice") as HTMLDivElement;
const adviceId = document.querySelector(".advice-id") as HTMLSpanElement;
const adviceContent = document.querySelector(
  ".advice-content"
) as HTMLParagraphElement;
const divider = document.querySelector(".divider img") as HTMLImageElement;

const changeAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";
  const res = await fetch(url);
  const data = await res.json();
  const { id, advice } = data.slip;

  adviceId.textContent = id;
  adviceContent.textContent = advice;
};

dice.addEventListener("click", changeAdvice);

window.addEventListener("load", () => {
  const isDesktop = matchMedia("(min-width: 1280px)").matches;

  if (isDesktop) divider.src = "./images/pattern-divider-desktop.svg";
});
