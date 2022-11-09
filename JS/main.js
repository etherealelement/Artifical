"use strict";

const logo = document.querySelector(".header__logo"),
  link = document.getElementById("header__link"),
  title = document.getElementsByClassName("intro__title"),
  headerNav = document.querySelector(".header__nav"),
  navList = document.querySelectorAll(".header__item"),
  navListItems = document.querySelector(".header__list");

navList.forEach((element) => {
  element.style.cssText = "background-color: blue";
});

const li = document.createElement("li");
li.classList.add("AYE");
// navListItems.append(li);
// navListItems.prepend(li);
navListItems.prepend(li);
li.innerHTML = "<p>Иди воруй</p>";
li.insertAdjacentHTML("afterend", "<p>Fuck you</p>");
