<center><h1>To create the zoomFig() function</h1></center>

<b>Purpose:</b> <br> 
This step will add an additional feature to the Photo Gallery App, which responds to the user clicking on the photo in the center.  When the user selects the photo in the center the photo should open in a separate window at full size.  In this step you will be creating the <code>zoomFig()</code> function, which will incorporate the <code>window.open()</code> method to open the image in a separate window.

<hr><br>
<b>Opening and Closing a window:</b>
Most web browsers allow you to open new web browser windows or tabs in addition to the web browser(s) and tab(s) that you may have open.  
Whenever a new web browser window or tab is opened, a new <code>Window</code> object is created to represent the new Window or tab.  You can have as many web browser windows or tabs open as your system will support, each displaying a different web page.

To open a Window or Tab, use the JavaScript <code>open()</code> method of the <code>Window</code> object.  The syntax for the <code>open()</code> method is:
<pre>
window.open(url, name, options, replace);
</pre>
<b>Explanation:</b><br>
<b><em>url</em></b>:  Represents the web address or filename to be opened<br>
<b><em>name</em></b>:  Assigns a value to the <em>name</em> property of the new <code>Window</code> object<br>
<b><em>options</em></b>:  Represents a string that allows you to customize the new web browser window's appearance<br>
<b><em>replace</em></b>:  A Boolean value that determines whether the URL should create a new entry in the web browser's history list (true) or replace the existing entry <false); if not specified, false is the default value<br>

<b>Example:</b>  To display the information about a specific printer in a new window, you might use the following code:
<pre>>
var openWin = window.open("htx23specs.htm","SpecsWindow","toolbar=no, menubar=no, location=no, scrollbars=no, resizable=no, width=380, height=405");
</pre>




<h1><b>Steps:</b></h1>
The steps below will allow the Photo Gallery App to respond to the user clicking on the photo in center and displaying the photo in a separate window at full size.  In this step you create the <code>zoomFig()</code> function, which will incorporate the <code>window.open()</code> method to open the image in a separate window.

<ol>
<li>Open the <b>zoom.htm</b> file located in the "Lesson6_Assignment" folder:

<li>Add Comments by entering your name, today’s date, and all information below where indicated in the <b>zoom.htm</b> file:<br>
<pre>
Program Name: Photo Gallery Application <br>
Author: <br>
Date: <br>
Filename: zoom.htm
</pre>
</li>

<li>
Scroll through the document to familiarize yourself with its content.  The body section contains only two elements:  <code>figure</code> and <code>footer</code>.  The <code>figure</code> element contains a single <code>img</code> element.
</li>

<li>
Repeat Steps 1 and 2 to open <b>zoom.js</b>, then scroll through the document to familarize yourself with its content.  The file contains global variable declarations and a <code>pageSetup()</code> function.
</li>

<li>
Return to the <b>photos.js</b> document.
</li>

<li>
Within the function block for the <code>zoomFig()</code> function, add the following statement:
<pre>
    var zoomWindow = window.open("zoom.htm", "zoomwin", "width=960,height=600");
</pre>
This statement creates a variable named <code>zoomWindow</code> and assigns to it the window crate by the <code>window.open()</code> method.  This window, which displays the contents of the zoom.htm document, has the name <code>zoomwin</code> and is 960px wide and 600px high.  Asigning this window to a variable will enable you to modify it in other parts of your app.
</li>

<h1>Your completed <code>zoomFig()</code> function should match the following :</h1>

<pre>
/* open center figure in separate window */
function zoomFig() {
    var zoomWindow = window.open("zoom.htm", "zoomwin", "width=960,height=600");
}
</pre>

<li>
Refresh or reload <b>photos.htm</b> in your browser, and then click on the photo in the center of the page in the Photo Gallery Application.  A larger version of the photo opens in a separate window.  (see below)
</li>

<center>
<h2>Figure 10:  Window opened with the <code>open()</code> method</h2>
<img src=".guides/img/zoomPlant.png" alt="Photo Gallery Zoom" />
</center>

<li>
Close the window showing the larger version of the photo.   Note that clicking the <b>Close Window</b> text at the bottom of the window has no effect.  In the next step, you will add this functionality!
</li>
</ol>
