let partyLocation = "GARDEN"; // String (Message Might Change)

Number.isInteger(shiftValue);

const encryptedMessage = "EUXWXV"; // String (Changed when encoded)

let decryptedMessage = ""; // String (Changed When Decoded)

let isPartySafe = false; // Boolean 
// New Changes //

const friend = "BRUTUS"

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const firstLetter = friend[0]
const index = alphabet.indexOf(firstLetter.toLowerCase());
// Q1 = Zero Based indexing

const alphabetLength = alphabet.length;
//Q2 = Modulus (%) brings us back to the start
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstletter = alphabet[newIndex];
const teaserMessage = encryptedMessage.slice(0,3);

const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31
const randomInRange = randomDecimal * range;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;

let locationStart = "";

if(emblemClue1 === "Eagle"){
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion"){
    locationStart = "Coliseum";
}
else 
{
    locationStart = "Villa"
} 

if (emblemClue2 === "Laurel" && locationStart === "Forum"){
    locationStart += "Of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa"){
    locationStart += "Of Pompey";
}

switch (emblemClue3)
{
    case 7:
        locationStart += "North"
        break
    case 3:
        locationStart += "South"
        break
    case 9:
        locationStart += "East"
        break
    case 4:
        locationStart += "West"
        break
}