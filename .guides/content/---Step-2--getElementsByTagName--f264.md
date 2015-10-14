<center><h1>Add event listener to the photo gallery application using the <code>getElementsByTagName()</code> method:</h1></center>

<b>Purpose:</b>  This step will allow users to be able to click the center image to see a larger version.  To enable this feature, you will use the <code>getElementsByTagName()</code> method to add an event listener for the second <code>img</code> element in the document, which has the index value 1.
<ol>
<li>Return to the <b>photos.js</b> file.

<li>
Within the code block for the <code>createEventListeners()</code> function, just before the closing <code><b>}</b></code>, add the following statement:
<pre>
    var mainFig = document.getElementsByTagName("img")[1];   
</pre>
This statement creates a local variable named <code>mainFig</code>, and then it uses the <code>getElementsByTagName()</code> method to specify the varaible value as the second <code>img</code> element in the document (with the index value of 1).
</li>

<li>
Below the variable declaration and before the closing <code><b>}</b></code> for the function, enter the following <code>if/else</code> statement to create the event listener for the center image:
<pre>
   if (mainFig.addEventListener) {
     mainFig.addEventListener("click", zoomFig, false); 
   } else if (mainFig.attachEvent)  {
     mainFig.attachEvent("onclick", zoomFig);
   }
</pre>
This code calls a function when a user clicks the middle image in the gallery.  
</li>

<h2>Your completed <code>createEventListener()</code> function should match the following after completing <b>Step 2</b>:</h2>

<pre>
// create event listeners for left arrow, right arrow, and center figure element 
function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");<br>
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false); 
    } else if (leftarrow.attachEvent)  {
        leftarrow.attachEvent("onclick", leftArrow);
    }<br>    
    var rightarrow = document.getElementById("rightarrow");<br>
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false); 
    } else if (rightarrow.attachEvent)  {
        rightarrow.attachEvent("onclick", rightArrow);
    }<br>  
    var mainFig = document.getElementsByTagName("img")[1];<br>
    if (mainFig.addEventListener) {
        mainFig.addEventListener("click", zoomFig, false); 
    } else if (mainFig.attachEvent)  {
        mainFig.attachEvent("onclick", zoomFig);
    }<br>
}//end of createEventListerners function
</pre>
</ol>