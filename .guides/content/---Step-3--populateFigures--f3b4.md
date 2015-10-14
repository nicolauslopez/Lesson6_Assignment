<center><h1>To create the populateFigures() function to change the src attribute values of the img elements:</h1></center>

<b>Purpose:</b>  This step will create the <code>populateFigures()</code> function for the photo gallery.  The navigation works by changing the <code>src</code> attribute values of the three <code>img</code> elements.  You will create a <code>for</code> loop that changes the value of each <code>img src</code> attribute.
<ol>
<li>Return to the <b>photos.js</b> file.

<li>
Below the global variable declaration, enter code to declare the <code>popluateFigures()</code> function as follows:
<pre>
function populateFigures() {
    var filename;
    var currentFig;

<br>
}//end of populateFigures()</pre>
In addition to declaring the function, this code also declares two local variables for use within the function.
</li>


<li>
Within the function code block and below the local variable declarations, enter the following for loop:
<pre>
    for (var i = 1; i < 4; i++) {
        filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i - 1];
        currentFig.src = filename;
    }
</pre>
This loop runs three times, setting the value of the <code>filename</code> variable using the corresponding value in the <code>photoOrder</code> array, then looking up the element corresponding to one less than the counter variable value, and then assigning the value of <code>filename</code> to the <code>src</code> attribute of the <code>img</code> element.
</li>

<h1>Your completed <code>populateFigures()</code> function should match the following :</h1>

<pre>
function populateFigures() {
    var filename;
    var currentFig;<br>
        for (var i = 1; i < 4; i++) {
            filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
            currentFig = document.getElementsByTagName("img")[i - 1];
            currentFig.src = filename;
        }//end of loop<br>
}//end of populateFigures()
</pre>
<li>
Preview <b>photos.htm</b> by right-clicking on the file and select "Preview static".  

Click the <code><b>></b></code> button on the right side of the screen.  As shown in the Figure 3 below, all the images shift to the left, and the photo of the flower growing through the fence is now the center.
<center>
<h1>Figure 3:  Photo Gallery after clicking right arrow</h1>
<img src=".guides/img/galleryRight.png" alt="Photo Gallery Right" />
</center>
</li>
</ol>
