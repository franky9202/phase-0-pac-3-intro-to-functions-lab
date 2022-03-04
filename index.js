function shout (string) {
    return string.toUpperCase();
}
function whisper (string) {
    return string.toLowerCase();
}
const string = "Hello";
function logShout (string) {
    console.log(string.toUpperCase())
}
function logWhisper (string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate (string) {
    const lowLet = "I can't hear you!";
    const uppLet = "YES INDEED!";
    const love = 'I would love to!'
    if (string === string.toLowerCase()){
       return lowLet;
    } else if (string === string.toUpperCase()){
       return uppLet;
    } else if (string === "Let's have dinner together!"){
       return love;
    }
}
