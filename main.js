// 8. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և 9վերադարձնում է՝  
// ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,  
// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ: 
// 9. Արտածել տրված [a,b] միջակայքին պատկանող դրական ամբողջ սիմետրիկ թվերի միջին թվաբանականը: 
// 10. Արտածել տրված n թիվը չգերազանցող բոլոր այն բնական թվերը, որոնք առանց մնացորդի բաժանվում են իրենց թվանշանների գումարի վրա:

// function repeat(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//      if(arr1.includes(arr[i]) == true){
//          return true
//      }else {
//         arr1.push(arr[i])
//      }
//     }
//     return false
   
// }
// console.log(repeat([8, 9, 5, 8, 2]))

// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ: 
 
// function oneOnly(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i]){
//             count++
//             console.log(true)
//         }
//     }
//     console.log(false)
// }
// console.log(oneOnly([2, 8, 1, 2, 9, 4]))

function f(arr) {
    let obj = {}
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]] === undefined) {
          obj[arr[i]] = 1
        }else {
            obj[arr[i]]++
        }
    }
    for (let key in obj){
        if(obj[key] === 1){
            count++
        }
    }
    return count
}
console.log(f([2,3,4,5,2,4,5,7,8]))
