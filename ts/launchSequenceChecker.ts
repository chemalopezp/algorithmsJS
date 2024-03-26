// function solution(systemNames: string[], stepNumbers: number[]): boolean {
//     for(let i=0; i < systemNames.length; i++) {
//         if (systemNames[i] === null) continue
//         let steps = [stepNumbers[i]]
//         // console.log('Checking ', systemNames[i], steps)
//         for(let j=i+1; j< stepNumbers.length; j++) {
//             if (systemNames[j] === null) continue
//             if (systemNames[i] === systemNames[j]) {
//                 // console.log('Same system', systemNames[i], stepNumbers[j], steps)
//                 if(stepNumbers[j] <= steps[steps.length -1]) {
//                     // console.log('Wrong', stepNumbers[j], steps)
//                     return false
//                 } else {
//                     steps.push(stepNumbers[j])
//                     systemNames[i] = null
//                 }
//                 // console.log('Found ', stepNumbers[j], steps)
//             }
//         }
//     }
//     return true
// }

function solution(systemNames: string[], stepNumbers: number[]): boolean {
  let sys = {};
  for (let i = 0; i < systemNames.length; i++) {
    // console.log('Checking ', systemNames[i])
    if (!sys[systemNames[i]]) {
      sys[systemNames[i]] = [stepNumbers[i]];
      // console.log('First occurence ', sys)
    } else {
      if (
        stepNumbers[i] <= sys[systemNames[i]][sys[systemNames[i]].length - 1]
      ) {
        // console.log('Not in sequence ', sys, stepNumbers[i])
        return false;
      } else {
        sys[systemNames[i]].push(stepNumbers[i]);
        // console.log('In sequence ', sys, stepNumbers[i])
      }
    }
  }
  return true;
}
