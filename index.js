const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(tutorial => {
//   let splitStr = tutorial.split(" ")
//   for (let i=0; i<splitStr.length; i++) {
//     splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
//   }
//   return splitStr.join(" ")
// })
  
function titleCased() {
  return tutorials.map(tutorial => {
    let splitStr = tutorial.split(" ")
    for (let i=0; i<splitStr.length; i++) {
      splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
    }
    return splitStr.join(" ")
  })
}