"use strict";

const targetDiv = document.querySelector("#target");

const p1 = document.createElement("p");
p1.innerText = `Your browser is: ${navigator.userAgent}`;

const p2 = document.createElement("p");
p2.innerText = `Screen width and height is: ${window.screen.width}px wide/${window.screen.height}px high`;

const p3 = document.createElement("p");
p3.innerText = `Document size is: ${window.innerWidth}px wide/${window.innerHeight}px high`;

const currentDate = new Date();
const p4 = document.createElement("p");
p4.innerText = `Current date and time is: ${currentDate.toLocaleDateString()}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;

targetDiv.append(p1, p2, p3, p4);
