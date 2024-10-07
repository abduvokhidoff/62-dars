// 3 Function

// Declaration Function

// Expression Function

// Arrow Function




//Declaration Function

// function PlusNuber(a, b) {
// return b - a
// }
// console.log(PlusNuber(5,10))





//Expression Function

// let PlusNumber = function(Behruz, Olim){
// return Behruz - Olim
// }

// console.log(PlusNumber(100000, 200000))

// let PlusNumber = function(Oquvchular, BittaOquvchi){
//     return Oquvchular * BittaOquvchi
//     }
    
//     console.log(PlusNumber(11, 210000))






//Arrow Function 

// let PlusNumber = (a, b) => {
//     return a + b
// }
// console.log(PlusNumber(10, 5))








//Zadacha

// 1
// let str = "I love arrays they are my favourite"

// let PlusNumber = (str) => {
//     return str.split(' ')
// }

// console.log(PlusNumber(str))







//2
// let arr = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]

// let PlusNumber = (arr) =>{

//     return `Max ${Math.max(...arr)}, Min ${Math.min(...arr)}`

// }

// console.log(PlusNumber(arr))


// let str = 'WebBrainAcadAmya'

// let FindAFunction = (str) => {
// let result = str.match(/[aA]/g)
// let conf = result.length 
// return conf
// }

// console.log(FindAFunction(str))



// var arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'tarvuz']

// let num = prompt('tovarni nomini kiriting olma, nok, banan, olma, nok, tarvuz')

// var arr2 = []

// let result = arr.filter((v, i, a) => {
//     return v !== num
// }
// )

// arr2.push(...result)


// console.log(arr2)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                    Switch
// let month = 'December';

// switch(month){
//     case 'January':
//     case 'February':
//     case 'December':
//         console.log('Winter');
//         break;
//     case 'March':
//     case 'April':
//     case 'May':  
//         console.log('Spring');
//         break;
//     case 'June':
//     case 'July':
//     case 'August':  
//         console.log('Summer');
//         break;
//     case 'September':
//     case 'October':
//     case 'November': 
//         console.log('Autumn');
//         break;
//     default: 
//         console.log('Bunday fasl yoq');
// }



// let num = +(prompt('Sana Kiriting'));

// switch(num){
//     case 7:
//     case 14:
//     case 21:
//     case 28:
//         console.log('Dushanba');
//         break;
//     case 8:
//     case 15:
//     case 22:
//     case 29:
//         console.log('Seshanba')
//         break;
//     case 9:
//     case 16:
//     case 23:
//     case 30:
//         console.log('Chorshanba')
//         break;
//     case 10:
//     case 17:
//     case 24:
//     case 31:
//         console.log('Payshanba')
//         break;
//     case 11:
//     case 18:
//     case 25:
//         console.log('Juma')
//         break;
//     case 12:
//     case 19:
//     case 26:
//         console.log('Shanba')
//         break;
//     case 13:
//     case 20:
//     case 27:
//         console.log('Yakshanba')
//     default:
//         console.log('Notogri sana')
// }


let header = document.querySelector('header')
let h2 = document.querySelector('h2')
let li = document.querySelectorAll('li')
let light = document.querySelector('.light')
let dark = document.querySelector('.dark')
let h1 = document.querySelector('h1')
let showcase_p = document.querySelector('.showcase_p')
let showcase_button = document.querySelector('.showcase_button')


dark.addEventListener('click', () => {
    header.style.backgroundColor ='black'
    h2.style.color = 'white'
    li[0].style.color = 'white' 
    li[1].style.color = 'white'
    li[2].style.color = 'white'
    light.style.backgroundColor ='#C4B5A5'
    light.style.color = 'white'
    dark.style.backgroundColor = '#FA9021'
    dark.style.color = 'white'
    h1.style.color= 'white'
    showcase_p.style.color = 'white'
    showcase_button.style.color = 'white'
})

light.addEventListener('click', () => {
    header.style.backgroundColor ='#C4B5A5'
    h2.style.color = 'black'
    li[0].style.color = 'black' 
    li[1].style.color = 'black'
    li[2].style.color = 'black'
    light.style.backgroundColor ='#FB982F'
    light.style.color = 'black'
    dark.style.backgroundColor = 'black'
    dark.style.color = 'white'
    h1.style.color= 'black'
    showcase_p.style.color = 'black'
    showcase_button.style.color = 'black'
})

