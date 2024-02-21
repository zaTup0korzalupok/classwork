//after
let recepte =[{
    name:'nuggets',
    time:40,
    ingred:['nuggets','oil'],
    cooking:'just drop it',
    },
    {
    name:'apple_pie',
    time:120,
    ingred:['apple','milk','eggs','sugar'],
    cooking:'mixing',
    },
    {
    name:'pancakes',
    time:20,
    ingred:['milk','eggs','sugar'],
    cooking:'mixing',
    },{name:'ragu',
    time:80,
    ingred:'vegetables',
    cooking:'mixing',
    }]

    for (let food in recepte){
        if(recepte.hasOwnProperty(food)){
            let obj = recepte[food];
            if(obj.time <100){
                console.log('so fast cooking')
            }else if(obj.time >100){
                console.log('so slow cooking')
            }
        }
//before
// let nuggets ={
// name:'nuggets',
// time:40,
// ingred:['nuggets','oil'],
// cooking:'just drop it',
// }
// let apple_pie={
// name:'apple_pie',
// time:120,
// ingred:['apple','milk','eggs','sugar'],
// cooking:'mixing',
// }
// let pancakes={
// name:'pancakes',
// time:20,
// ingred:['milk','eggs','sugar'],
// cooking:'mixing',
// }
// let ragu ={
// name:'ragu',
// time:80,
// ingred:'vegetables',
// cooking:'mixing',
//     }
// let recepte =[nuggets,apple_pie,pancakes,ragu]

    // if(food.time >0){
    //     console.log('food.time '+food.time)
    // }
    // console.log(food)
}
// for (let food in recepte) {
//     for (let blude in food) {
//         if(blude.time<=100){
//             console.log(blude)
//     }
// }
// }
console.log('help')
// if(food.time<100){
//     console.log(food.name)
// }