const person = {
    age: 23, 
    location: {
        city: 'Tehran',
        temp: 40
    }
}

const {name: firstName = 'Sepehr', age} = person 


console.log(`${firstName} is ${age}.`)

if (person.location.city && person.location.temp){
    console.log(`It is ${person.location.temp} in ${person.location.city}`)
}
    

const address = ['Farmanieh', 'Tehran', 'Iran','123456']
const [street, city, state, zip] = address

console.log(`I live in ${street} ${state} ${zip} ${city}`)