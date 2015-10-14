<center><h1>To create a function and an event listener to close the window using the close() method:</h1></center>


<b>Steps:</b>

<ol>
<li>Open the <b>zoom.js</b> file located in the "Lesson6_Assignment" folder</li>
<li>
Below the <code>pageSetup()</code> function, enter the following code to declare the <code>closeWin()</code> function:
<pre>
/* close window */
function closeWin() {
<br>
}</pre>
</li>

<li>
Within the code block for the <code>closeWin()</code> function, add the following statements:
<pre>
    window.close();
</pre>


<h2>Your completed <code>closeWin</code> function should match the following :</h2>

<pre>
/* close window */
function closeWin() {
    window.close();
}
</pre>

<li>
Below the <code>closeWin</code> function, add the following <code>createEventListener()</code> function:

<pre>
/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false); 
    } else if (closeWindowDiv.attachEvent)  {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }
}
</pre>
Because the <code>p</code> element containing the text "Close Window" is the first <code>p</code> element in the document, you use the <code>getElementsByTagName()</code> method with an index of 0 to reference it.
</li>
<li>
Scroll up to the <code>pageSetup()</code> function, and then just before the closing brace, add the following statement:
<pre>
createEventListener();
</pre>
</li>
<h2>Your completed <code>pageSetup()</code> function should match the following :</h2>

<pre>
/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}
</pre>

<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click on the photo in the center of the page in the Photo Gallery Application.  A large version of the photo opens in a separate window.  (see below)
</li>
<li>
At the bottom of the new window, click <b>Close Window</b>.  The window closes.</li>

<center>
<h2>Figure 10:  Window opened with the <code>open()</code> method</h2>
<img src=".guides/img/closeWindow.png" alt="Photo Gallery Close" />
</center>

<h1>
<center><b>Congratulations, you are now finished with Lesson 6 Assignment!!!</b></center>
</h1>
</ol>
