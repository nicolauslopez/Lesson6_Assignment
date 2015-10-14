<center><h1>To clone the lastFigure node to create the firstFigure node:</h1></center>

<b>Purpose:</b> <br> 
In the previous steps, you created the <code>figure</code> and <code>img</code> elements to display the first image in the gallery.  Rather than create and configure new elements from scratch, you can create a copy of the document fragment you already create.

<hr><br>
<b>Cloning Nodes:</b>
Sometimes you want to create a new node that is the same as or similar to an existing node in your document.  Rather than duplicate all the statements necessary to create and configure a new node, you can use the <code>cloneNode()</code> method of the <code>Document</code> object to duplicate an existing node.  The <code>cloneNode()</code> method has the following syntax:
<pre>
existingNode.cloneNode(true | false)
</pre>
In this method, <code>existingNode</code> is a reference to the node that you want to clone.  The method takes a Boolean value as an argument to indicate whether the cloned node should include any child nodes of the existing node (true) or only the specified parent node (false).  For instance, the following code creates a new <code>li</code> element and assigns it to the contact variable, and then specifies a class name of <code>mainNav</code> for this element.  The final statement clones the <code>contact</code> node and stores the copy in the <code>directions</code> variable.

<pre>
    var contact = document.createElement("li");
    contact.className = "mainNav";
    var directions = contact.cloneNode(true);
    </pre>
<b>Explanation:</b>  The cloned node stored in the <code>directions</code> variable includes the <code>class</code> value <code>mainNav</code> because the <code>cloneNode()</code> method cloned all child nodes (based on the <code>true</code>) argument).

<h1><b>Steps:</b></h1>
The steps clone the <code>lastFigure</code> node to create the <code>firstFigure</code> node:

<ol>
<li>Return to the <b>photos.js</b> file.  </li>

<li>Within the <code><b>previewFive()</b></code> function, just before the final <code><b>}</b></code>, enter the following comment and statement:
<pre>
//clone figure element for fifth image and edit to be first image
var firstFigure = lastFigure.cloneNode(true);
</pre>
This statement uses the <code>cloneNode()</code> method to duplicate the <code>lastFigure</code> node and assign the result to the variable name <code>firstFigure</code>.  Because the <code>cloneNode()</code> method includes the <code>true</code> argument, the copy includes the child <code>img</code> node of the <code>lastFigure</code> node.
</li>

<li>
Below the code you added in the previous step, and before the final <code><b>}</b></code>, enter the following statements:
<pre>
    firstFigure.id = "fig1";
    firstFigure.style.right = "";
    firstFigure.style.left = "45px";
</pre>
This code changes the <code>id</code> value for the <code>firstFigure</code> node from <code>fig5</code>, the value cloned from the <code>lastFigure</code> node, to <code>fig1</code>.  It also removes the cloned value for the <code>right</code> CSS style and specifies a new value for the <code>left</code> CSS style.
</li>

<li>
Below the statement you entered in the previous step and before the closing <code><b>}</b></code>, enter the following statement:
<pre>
articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
</pre>
This statement uses the <code>insertBefore()</code> method to add the <code>firstFigure</code> node to the document tree before the existing element with the <code>id</code> value <code>fig2</code>.
</li>

<h1>Your completed <code>previewFive()</code> function should match the following :</h1>

<pre>
function previewFive() {<br>
    var articleEl = document.getElementsByTagName("article")[0];<br>
    // create figure and img elements for fifth image
    var lastFigure = document.createElement("figure");
    lastFigure.id = "fig5";
    lastFigure.style.zIndex = "5";
    lastFigure.style.position = "absolute";
    lastFigure.style.right = "45px";
    lastFigure.style.top = "67px";<br>    
    var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.height = "135";<br>
    lastFigure.appendChild(lastImage);
    articleEl.appendChild(lastFigure);<br>
    //clone figure element for fifth image and edit to be first image
    var firstFigure = lastFigure.cloneNode(true);
    firstFigure.id = "fig1";
    firstFigure.style.right = "";
    firstFigure.style.left = "45px";
    articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
}//end of previewFive()
</pre>

<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click the <b>Show more images</b> button on the Photo Gallery Application.
</li>

<li>
Right-click the <b>right arrow</b> button on the Photo Gallery App, and then click <b>Inspect element</b>.  The <code>figure</code> element with the <code>id</code> value <code>fig1</code> is now a child of the <code>article</code> element, right after the <code>figure</code> element with the <code>id</code> value <code>fig5</code>.  See the document tree in Chrome (below):
</li>
<center>
<h2>Figure 6:  <code>firstFigure</code> node added to the document tree</h2>
<img src=".guides/img/CloneTree.png" alt="Photo Gallery Clone" />
</center>

<li>click the <b>right-pointing triangle (<img src=".guides/img/arrowDOM.png" alt="Photo Gallery Right" />)</b> next to the <code>figure</code> element with the <code>id</code> value <code>fig1</code> to view the child elements of the figure elements you added.  Figure 8 shows the child <code>img</code> element of the node you cloned was copied as part of the cloning process.<br>
<center>
<h2>Figure 7:  Child elements of inserted nodes</h2>
<img src=".guides/img/cloneTree2.png" alt="Photo Gallery Clone" />
</center>

<li>Return to the <b>photos.js</b> file and then in the <code>previewFive()</code> function, just before the closing <b><code>}</code></b>, enter the following code:
<pre>
    // add appropriate src values to two new img elements
    document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
    document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
</pre>
The two statements assign values to the <code>src</code> attributes for the two new <code>img</code> elements using the same method used in the <code>populateFigures()</code> function for the other <code>img</code> elements.
</li>

<li>
Scroll to the top of <code>photos.js</code> and then below the statement declaring the global <code> photoOrder</code> variable, add the following statement:
<pre>
var figureCount = 3;
</pre>
</li>
<li>
Within the <code>popluateFigures()</code> function, just before the existing <code>for</code> statement, enter the following statement:
<pre>
    if (figureCount === 3) {
</pre>
</li>

<li>
<b>After</b> the <code>for</code> loop but before the closing <code><b>}</b></code> for the function, enter the following code:
<pre>
    }  else {
       for (var i = 0; i < 5; i++) {
            filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i];
            currentFig.src = filename;
        }
    }
</pre>
This code ensures that when five images are displayed in the app, the <code>populateFigures()</code> function assigns an image to each of the <code>img</code> elements in the gallery each time a user clicks one of the arrow buttons. 
</li>

<h1>Your completed <code>populateFigures()</code> function should match the following :</h1>

<pre>
/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } else {
      for (var i = 0; i < 5; i++) {
         filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
   }
}
</pre>

<li>
Scroll down to the <code>previewFive()</code> function, and then just before the closing <b><code>}</code></b>, enter the following statement:
<pre>
figureCount = 5;
</pre>
By default, the <code>figureCount</code> variable is set to 3 when the page opens.  This statement changes it to 5 when a user switches to viewing five images, ensuring that the <code>populateFigures()</code> function assigns a photo to each <code>img</code> element.
</li>
<h1>Your completed <code>previewFive()</code> function should match the following :</h1>

<pre>
function previewFive() {    
  var articleEl = document.getElementsByTagName("article")[0];<br>
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";<br>
   //articleEl.insertBefore(lastFigure, document.getElementById("rightArrow"));    
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";<br>   
   lastFigure.appendChild(lastImage);
   articleEl.appendChild(lastFigure);<br>    
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));<br>    
    // add appropriate src values to two new img elements
    document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
    document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";<br>    
    figureCount = 5;
}

</pre>
<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click the <b>Show more images</b> button on the Photo Gallery Application.  The two additional images are displayed, one at each end of the gallery, as shown below:
</li>
<center>
<h2>Figure 8:  Gallery showing five images</h2>
<img src=".guides/img/gallery5Images.png" alt="Photo Gallery Images" />
</center>


</ol>
