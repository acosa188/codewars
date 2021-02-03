/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
    //...
    let cmpArr = []
    let test = true
    
    str.toLowerCase().split('').map(e =>{
      if(cmpArr.includes(e)){
        test = false
        return
      }   
      else
        cmpArr.push(e)      
    })
    
    return test
  }