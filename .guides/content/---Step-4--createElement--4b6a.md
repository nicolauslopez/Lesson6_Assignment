<center><h1>To create the figure and img nodes for the first new preview image:</h1></center>
<ul>
<b>Purpose:</b> <br> 
This step will add the feature to the Photo Gallery App that will give users the option to add two additional images to the screen so users can:
<li>see parts of all the images in the slideshow at once</li>
<li>use the buttons to navigate to any image they want to view</li>
</ul>

In this step, you will use DOM methods for creating new nodes and adding them to the DOM tree.  You will use these methods to enable users to switch between seeing three and five image previews at once.

<b>Creating Nodes:</b>
To create a new element node using the <code>createElement()</code> method of the Document object, the following syntax is used:
<pre>
document.createElement("element")
</pre>
The term <code>element</code> is an HTML element name.  For example, to create a new <code>div</code> element, you would use the following statement:
<pre>
document.createElement("div");
</pre>

To add additional preview images to the photo gallery app, you need to create new <code>figure</code> elements and new <code>img</code> elements.  See Figure 4 below the changes to the DOM tree you will make in the Step:
<center>
<h1>Figure 4:  DOM tree updated to show five image previews</h1>
<img src=".guides/img/GalleryUpdateTree.png" alt="Photo Gallery Right" />
</center>

<h1><b>Steps:</b></h1>
The steps below will create the first <code>figure</code> and <code>img</code> elements and set their attributes and styles using DOM methods.

<ol>
<li>Return to the <b>photos.js</b> file.  Below the <code>leftArrow()</code> function, add the following code to create a <code>previewFive()</code> function:
<pre>
function previewFive() {
<br>
}//end of previewFive()
</pre>
</li>


<li>
Within the <code>previewFive()</code> function, enter the following comment and statement:
<pre>
    // create figure and img elements for fifth image
    var lastFigure = document.createElement("figure");
</pre>
The statement uses the <code>createElement()</code> method to create a new figure element and assign it to the variable name <code>lastFigure</code>.
</li>

<li>
Below the statement you entered in the previous step and within the code block, enter the following statements:
<pre>
    lastFigure.id = "fig5";
    lastFigure.style.zIndex = "5";
    lastFigure.style.position = "absolute";
    lastFigure.style.right = "45px";
    lastFigure.style.top = "67px";
</pre>
The first statement uses the <code>id</code> property of the element stored in the <code>lastFigure</code> variable to set the value of the element's <code>id</code> attribute to <code>fig5</code>.  The remaining statements use the element's <code>style</code> attribute to set values for CSS style properties.  Note that the statement second line uses the property name <code>zIndex</code>, which is the CSS property name <code>z-index</code> with the hyphen removed and the letter after the hyphen capitalized.  You must follow this practice when referring to any hyphenated CSS property in JavaScript.
</li>

<li>
Below the statement you entered in the previous step and within the code block, enter the following statements:
<pre>
    var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.height = "135";
</pre>
The first statement uses the <code>createElement()</code> method to create a new <code>img</code> element and assign it to the <code>lastImage</code> variable name.  The second and third lines assign values to the element's width and height attributes. 
</li>

<h1>Your completed <code>previewFive()</code> function should match the following :</h1>

<pre>
function previewFive() {<br>
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");<br>
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";<br>    
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";<br>
}//end of previewFive()
</pre>

<li>
Scroll down to the <code>createEventListeners()</code> function and then, in this code block just before the closing <b><code>}</code></b>, enter the following code:
<pre>
    var showAllButton = document.querySelector("#fiveButton p");
    if (showAllButton.addEventListener) {
        showAllButton.addEventListener("click", previewFive, false);
    } else if (showAllButton.attachEvent) {
        showAllButton.attachEvent("onclick", previewFive);
    }
</pre>
This code adds an event listener that calls the <code>previewFive()</code> function when a user clicks the Show more images button.
</li>

<h1>Your completed <code>createEventListeners()</code> function should match the following :</h1>

<pre>
/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false); 
    } else if (leftarrow.attachEvent)  {
        leftarrow.attachEvent("onclick", leftArrow);
    }<br>
    var rightarrow = document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false); 
    } else if (rightarrow.attachEvent)  {
        rightarrow.attachEvent("onclick", rightArrow);
    }<br>
    var mainFig = document.getElementsByTagName("img")[1];
    if (mainFig.addEventListener) {
        mainFig.addEventListener("click", zoomFig, false); 
    } else if (mainFig.attachEvent)  {
        mainFig.attachEvent("onclick", zoomFig);
    }<br>   
    var showAllButton = document.querySelector("#fiveButton p");
    if (showAllButton.addEventListener) {
        showAllButton.addEventListener("click", previewFive, false);
    } else if (showAllButton.attachEvent) {
        showAllButton.attachEvent("onclick", previewFive);
    }
}
</pre>
<li>Preview <b>photos.htm</b> by right-clicking on the file and select "Preview static".  Open the <b>browser tool</b> that lets you inspect the DOM of the current web page using the method for your browser:

---Internet Explorer DOM Inspector:  Press <b>F12</b>, then <b>Ctrl + i</b><br>
---Firefox Inspector:  Press <b>Ctrl + Shift + C</b> (Windows) or <b>command + option + C</b> (Mac)<br>
---Chrome Elements:  Press <b>Ctrl + Shift + i</b> (Windows) or <b>command + option + i</b> (Mac), then click <b>Elements</b><br>

The pane that displays the console for each browser also contains an option to view the DOM tree of the current web page.
</li>

<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click the <b>Show more images</b> button on the Photo Gallery Application.
</li>
<li>
In the JavaScript Console Pane, click the <b>right-pointing triangle (<img src=".guides/img/arrowDOM.png" alt="Photo Gallery Right" />)</b> for each element that displays one to view its child elements.  Notice that the new <code>figure</code> element you created, with the <code>id</code> value <code>fig5</code>, does NOT appear anywhere in the DOM tree.
</li>
</ol>
