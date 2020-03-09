// function takeANumber(arr, name){
//   arr.push(name)
//   return `Welcome, ${name}. You are number ${arr.length} in line.`
// }
var counter = 0;
function takeANumber(arr){
  
  arr.push(counter++)
}

function nowServing(arr){
  if(arr.length){
    return `Currently serving ${arr.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(arr){
// Use while loop to get into non-empty array
  while(arr.length){
    var msg = "The line is currently: "
  // Use for loop to iterate every customer     
    for(let i = 0; i < arr.length; i++){
    // Use if to execute before the last customer  
      if(i < arr.length-1){
      // Update the customer and position to the message
        msg += `${i+1}. ${arr[i]}, `
      }
    // If array has 1 customer left
      else msg += `${i+1}. ${arr[i]}`
    }
    return msg
  }
// If array is empty
  return "The line is currently empty."

}