"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newTitle = void 0;
var newTitle = function newTitle(title, className, container) {
  var h1 = document.createElement("h1");
  h1.className = "animate__animated " + className;
  h1.innerHTML = title;
  container.appendChild(h1);
};
exports.newTitle = newTitle;