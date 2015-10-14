<center><h1>To append the img node to the figure node and the resulting document fragment to the DOM tree:</h1></center>

<b>Purpose:</b> <br> 
In the previous steps, you created a new <code>img</code> element and stored it with the variable name <code>newImage</code>.  You also created a new <code>figure</code> element that you stored with the variable name <code>last</code>.  Next you will use the <code>appendChild()</code> method to add the img element as a child of the <code>figure</code> element to match the nesting of the existing <code>figure</code> and <code>img</code> elements in the photo gallery app.  This creates a <u>document fragment</u>, which is a set of connected nodes that are not part of a document.  You will then use the <code>appendChild()</code> method to add the document fragment to the DOM tree for the document, as a child of the <code>article</code> element.

<hr><br>
<b>Attaching Nodes:</b>
A node you create with the <code>createElement()</code> method is not automatically attached to the DOM tree or to any other nodes.  Instead, it exists independently of the DOM tree.  The <code>Document</code> object includes several methods for attaching nodes to the DOM tree.  The most basic method is <code>appendChild()</code>, which has the following syntax:
<pre>
parentNode.appendChild(childNode)
</pre>
To use this method, you specify the node to be attached, which is the child node, and the node to attach it to, which is the parent node.  For instance, the following code creates a new <code>li</code> element and then attaches it to the element with the <code>id</code> value <code>navList</code>:

<pre>
var list = document.getElementById("navList);
var contact = document.createElement("li");
list.appendChild(contact);
</pre>
<b>Explanation:</b>  The first statement sets the value of the <code>list</code> variable to the element with the <code>id</code> element and assigns it to the variable name <code>contact</code>.  The final statement appends the new element stored in the contact variable as a child of the <code>navList</code> element referenced by the <code>list</code> variable.

<h1><b>Steps:</b></h1>
The steps below will append the <code>img</code> node to the <code>figure</code> node and the resulting fragment to the DOM tree:

<ol>
<li>Return to the <b>photos.js</b> file.  </li>

<li>Within the <code><b>previewFive()</b></code> function, at the <b>top</b> of the function block, add the following statement
<pre>
    var articleEl = document.getElementsByTagName("article")[0];
</pre>
</li>

<li>
Just before the closing <code><b>}</b></code>, add the following statement:
<pre>
    lastFigure.appendChild(lastImage);
</pre>
The statement uses the <code>appendChild()()</code> method to add the <code>lastFigure</code> node, creating a document fragment.
</li>

<li>
Below the statement you entered in the previous step and before the closing <code><b>}</b></code>, enter the following statement:
<pre>
articleEl.appendChild(lastFigure);
</pre>
This statement uses the <code>appendChild()</code> method to attach the <code>lastFigure</code> document fragment as a child of the <code>article</code> element in the document (referenced by the <code>articleE1</code> variable).
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
}//end of previewFive()
</pre>

<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click the <b>Show more images</b> button on the Photo Gallery Application.
</li>

<li>
Right-click the <b>right-arrow</b> button on the Photo Gallery App, and then click <b>Inspect element</b> to view the <code>div</code> element for the right arrow button in the document tree for the current page.  <br>
The <code>figure</code> element you created with the <code>id</code> value <code>fig5</code> is a sibling element of the <code>div</code> element with the <code>id</code> value <code>rightarrow</code>.  See the document tree in Chrome (below):
</li><br>
<center>
<h2>Figure 5:  Child elements of the <code>article</code> element in the document tree</h2>
<img src=".guides/img/ChildTree.png" alt="Photo Gallery Append" />
</center>

<b><h1>NOTE:</h1></b> If you don't see the <code>figure</code> element with the <code>id</code> value <code>fig5</code> in the document tree, you may have forgotten to click the <b>Show more images</b> button.  Click the <b>Show more images</b> button, and then examine the child elements of the <code>article</code> element in the document tree.

<li>click the <b>right-pointing triangle (<img src=".guides/img/arrowDOM.png" alt="Photo Gallery Right" />)</b> for <code>figure</code> element with the <code>id</code> value <code>rightarrow</code>, as indicated above, to view the child element of the <code>figure</code> element you added as a child in the document tree.

<b><h1>NOTE:</h1></b> A node attached with the <code>appendChild()</code> method is always added as the last child element of the parent element.

</li>
</ol>
