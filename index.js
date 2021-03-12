const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(arrayOfStringNames, eventName) {
    const newArrayOfMessages = []
    for (let i = 0; i < arrayOfStringNames.length; i++) {
        newArrayOfMessages.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArrayOfMessages
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}