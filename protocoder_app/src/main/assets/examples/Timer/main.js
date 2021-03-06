/*
*	Timer Executes a task repeatedly 
*   Delay Delays a function for a especific time 
*/

var txt = ui.addText("", 10, 10, ui.screenWidth - 20, ui.screenHeight);

var l = util.loop(1000, function () { 
    txt.append("repeating every 1000 ms \n");
}); 

//this is how you stop a looper 
l.stop();

util.loop(5000, function () { 
    txt.append("repeating every 5000 ms \n");
});

util.delay(1000, function() {
   txt.append("delayed 1000 ms \n"); 
});

util.delay(2000, function() {
   txt.append("delayed 2000 ms \n"); 
}); 