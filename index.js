 var katzDeliLine = [];
 
 function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
 }
 
 function nowServing (katzDeliLine) {
   var nextInLine = katzDeliLine.shift()
   if (katzDeliLine.length === 0) {
     return "There is nobody waiting to be served!";
   } else {
     return "Currently serving " + nextInLine + ".";
   }
 }
 
 function currentLine (katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   } else {
     for (var i=0; i < katzDeliLine.length; i++) {
      katzDeliLine += "The line is currently: " + (i+1) + ". " + katzDeliLine[i] + ", ";
     } return currentLine
   } 
 }