// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function randomchar(leng){
  let str='';
  let random = Math.floor(Math.random()*leng.length);

  for(let i=0;i<leng;i++){
    str+=characters.charAt(random);
    
  }
  return str;
}
console.log(randomchar(5))