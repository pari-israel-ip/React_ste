// console.log('Hola mundo')



// let firstName = 'Israel'
// const lastName = 4
// var isDeveloper = true


//  console.log(firstName)
// firstName = 'Pepito'
// console.log(firstName) 

// {
//  var isDeveloper = true
// }

//TIPOS PRIMITIVOS SON INMUTABLES : 

/*2
"STRING"
TRUE FALSE
UNDEFINED
NULL
*/

//AHORA OTROS QUE SON LOS OBJETOS QUE SE PUEDEN MUTAR


// const firstName = ' Israel'
// const firsNameWhitUpperCase = firstName.toUpperCase()
// console.log(firsNameWhitUpperCase)

// const list = []
// list.push(157)

// console.log(list[0])

const list = []
const anotherList = list.concat(157)

// console.log(anotherList)

const persona =  {
    name: 'Israel',
    twitter: '@israel_pari',
    age: 18,
    isDeveloper: true,
    links: ['https://eternity.es','https://eternity.post']
}

console.log(persona.name)
console.log(persona.links[0])

const field = 'twitter'
console.log(persona [field])


