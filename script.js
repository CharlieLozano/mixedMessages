console.log("Welcome to Silly RPG Tabletop Game")

const races = [
    'Candyman',
    'Sugar Daddy',
    'Burger Flipper Wizard',
    'Pokemon Card Collector',
    'Left Socks Thief'
]

const places = [
    'KEE KUU CUACK CUACK',
    'Apple\'s Kindergarten',
    'Walmart',
    'an unfinished tree house',
    'Landyland',
    '... I forgot where'
]

const mentors = [
    'Obama',
    'Shrek',
    'your Mom',
    'one cartoon singing frog',
    'Chears',
    'Jimi Hendrix'
]

let race = races[Math.floor(Math.random() * races.length)]
let place = places[Math.floor(Math.random() * places.length)]
let mentor = mentors[Math.floor(Math.random() * mentors.length)]

console.log(`You are a ${race} trained by ${mentor} in the lands of ${place}. `)