console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('person3 shows ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    
    const getColdDrinks = new Promise((resolve, reject) => resolve('coldDrinks'));
    let ticket = await promiseWifeBringingTicks;

    console.log('wife:i have the ticket');
    console.log('husband:we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log('husband:i got some popcorn');
    console.log('husband:we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('wife: i need cold Drinks');
    
    let coldDrinks = await getColdDrinks;

    console.log('husband:anything else');
    console.log('wife: lets go we are getting late');
    console.log(`thanks!`);
   

    return ticket;

}

preMovie().then((m) => console.log(m));

console.log('person4: shows ticket');
console.log('person5: shows ticket');