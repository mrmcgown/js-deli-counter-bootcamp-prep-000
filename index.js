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
    return "blahblah"
  } else {
    return "lahlah"
  }
}