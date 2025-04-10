// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomString(leng){
    let str ='';

    for(let i=0;i<leng;i++){
     str+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return str;
}
console.log(randomString(8));