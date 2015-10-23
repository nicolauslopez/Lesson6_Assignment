/*    
    Program Name:  Photo Gallery Application
    Author: Nicolaus Lopez
    Date:   10/14/15
    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
//var autoAdvance = setInterval(rightAdvance,5000);
var figureCount = 3;

function populateFigures()
{
  var filename;
  var currentFig;
  if (figureCount === 3)
  {
    for (var i = 1; i < 4; i++)
      {
        filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i-1];
        currentFig.src = filename;
      } 
  }
  
  else
  {
    for (var i = 0; i <5; i++)
      {
        filename = "images/IMG_0" + photoOrder[i] +"sm.jpg";
        currentFig = document.getElementsByTagName("img")[i];
        currentFig.src = filename;
      }
  }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}



/* shift all images one figure to the left, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive()
{
  var articleE1 = document.getElementsByTagName("article")[0];
  
  var lastFigure = document.createElement ("figure");
  lastFigure.id = "fig5";
  lastFigure.style.zIndex = "5";
  lastFigure.style.position = "absolute";
  lastFigure.style.right = "45px";
  lastFigure.style.top = "67px";
  
  var lastImage = document.createElement ("img");
  lastImage.width = "240";
  lastImage.height = "135";
  
  lastFigure.appendChild(lastImage);
  articleE1.appendChild(lastFigure);
  
  var firstFigure = lastFigure.cloneNode(true);
  
  firstFigure.id = "fig1";
  firstFigure.style.right = "";
  firstFigure.style.left = "45px";
  
  articleE1.insertBefore(firstFigure, document.getElementById("fig2"));
  
 document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
 document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
 
 figureCount = 5;
}

/* open center figure in separate window */
function zoomFig() 
{
  var zoomWindow = window.open("zoom.htm", "zoomwin", "width = 960, height=600");
   
}

function createEventListeners()
{ 
  var leftarrow = document.getElementById("leftarrow");
  if(leftarrow.addEventListener)
    {
      leftarrow.addEventListener("click", leftArrow, false);
    }  
  else if (leftarrow.attachEvent)
    {
      leftarrow.attachEvent("onclick", leftArrow);
    }
  
  var rightarrow = document.getElementById("rightarrow")
  if(rightarrow.addEventListener)
    {
      rightarrow.addEventListener("click", rightArrow, false)
    }
  else if(rightarrow.attchEvent)
    {
      rightarrow.attachEvent("onclick", rightArrow)
    }
  var mainFig = document.getElementsByTagName("img")[1];
  if(mainFig.addEventListener)
    {
      mainFig.addEventListener("click", zoomFig, false);
    }
  else if(mainFig.attachEvent)
    {
      mainFig.attachEvent("onclick", zoomFig)
    }
  
  var showAllButton = document.querySelector("#fiveButton p");
  if (showAllButton.addEventListener)
    {
      showAllButton.addEventListener("click", previewFive, false);
    }
  else if(showAllButton.attachEvent)
    {
      showAllButton.attachEvent("onclick", previewFive);
    }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}



/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}