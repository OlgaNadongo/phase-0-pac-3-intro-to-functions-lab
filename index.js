function shout(string) {
    return string.toUpperCase();
  }
shout('string')
 
function whisper(string){
    return string.toLowerCase();
}
whisper('string')

function logShout(string){
    console.log(string.toUpperCase());
}
logShout('string')

function logWhisper(string){
    console.log(string.toLowerCase())
}
logWhisper('string')

/*Use the nested if statements*/
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase()=== string){
        return "I can't hear you!"

    }
    if(string.toUpperCase()===string){
        return "YES INDEED!"
    }
    if (string="Let's have dinner together!"){
        return "I would love to!"
    }
}
sayHiToHeadphonedRoommate('string')
