<center><h1>Add event listeners to the photo gallery application using the <code>getElementById()</code> method:</h1></center>

<ol>
<li>Open the <b>photos.htm</b> file located in the "Lesson6_Assignment" folder:

<li>Add Comments by entering your name, today’s date, and all information below where indicated in the <b>photos.htm</b> file:<br>
<pre>
Program Name: Photo Gallery Application <br>
Author: <br>
Date: <br>
Filename: photos.htm
</pre>
</li>

<li>
Scroll through the document to familiarize yourself with its content.  Below the header element, the <code>article</code> element contains a <code>div</code> element, three <code>figure</code> elements, and two more <code>div</code> elements.  The first two <code>div</code> elements will serve as the back and forward buttons for navigating through gallery, and the final <code>div</code> element will serve as the button that enables users to switch between viewing three and five images at a time.  Each <code>figure</code> element contains an <code>img</code> element, which will display one of five images.  Notice that no <code>src</code> attribute is specified for the <code>img</code> elements.  You'll use JavaScript to specify the <code>src</code> values based on user actions.
</li>
<li>
Repeat Steps 1 and 2 to open <b>photos.js</b>, then scroll through the document to familarize yourself with its content.  The file defines a <code>photoOrder</code> variable, which you will use to track the order of photos as users move through the gallery.  It also contains <code>rightArrow()</code> and <code>leftArrow</code> functions, which work with the <code>photoOrder</code> variable to shift the images to the left or to the right.  The file contains an empty function, <code>zoomFig()</code>, where you will add code to view an image at a larger size.  Finally, it includes a <code>setUpPage()</code> function and code for an event listener to run the <code>setUpPage()</code> function when the page loads.  The existing functions include references to the <code>populateFigures()</code> and <code>createEventListeners()</code> functions, which you will create.
<pre>
Program Name: Photo Gallery Application <br>
Author: <br>
Date: <br>
Filename: photos.js
</pre>
</li>
<li>
Preview the <b>photos.htm</b> web page by right-clicking on the file and selecting "Preview static".  The navigation buttons are diplayed, but the area where the images would appear is empty.  No images will be diplayed until you add <code>src</code> values to the <code>img</code> elements, which you will do later.
</li>
<li>Return to the <b>photos.js</b> file, then below the <code>leftArrow()</code> function, before the <code>setUpPage()</code> function, enter the following statements to create the <code>createEventListeners()</code> function:
<pre>
// create event listeners for left arrow, right arrow, and center figure element 
function createEventListeners() {


   
}//end of createEventListerners function
</pre>
</li>

<li>
Within the code block for the function, add the following statement:
<pre>
    var leftarrow = document.getElementById("leftarrow");
</pre>
This statement creates a local variable named <code>leftarrow</code>, and then uses the <code>getElementById()</code> method to specify the varaible value as the document element with the <code>id</code> value <code>leftarrow</code>.
</li>

<li>
Below the variable declaration and within the code block for the function, enter the following <code>if/else</code> statement to create the event listener for the left navigation arrow:
<pre>
   if (leftarrow.addEventListener) {
     leftarrow.addEventListener("click", leftArrow, false); 
   } else if (leftarrow.attachEvent)  {
     leftarrow.attachEvent("onclick", leftArrow);
   }
</pre>
</li>

<li>
Below the code in Step 8, and within the code block for the function enter the following code to create the event listener for the right navigation arrow:
<pre>
    var rightarrow = document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false); 
    } else if (rightarrow.attachEvent)  {
        rightarrow.attachEvent("onclick", rightArrow);
    }
</pre>
</li>




<li>
The code for your <code>createEventListeners()</code> function should match the following:
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
}//end of createEventListerners function
</pre>
</li>


</ol>