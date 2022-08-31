"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dice = document.querySelector(".dice");
const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");
const divider = document.querySelector(".divider img");
const changeAdvice = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://api.adviceslip.com/advice";
    const res = yield fetch(url);
    const data = yield res.json();
    const { id, advice } = data.slip;
    adviceId.textContent = id;
    adviceContent.textContent = advice;
});
dice.addEventListener("click", changeAdvice);
window.addEventListener("load", () => {
    const isDesktop = matchMedia("(min-width: 1280px)").matches;
    if (isDesktop)
        divider.src = "./images/pattern-divider-desktop.svg";
});
