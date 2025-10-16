//function printvowel(word) {
    const vowel='aeiouAEIOU';
   //for(let char of word){
    //if(vowels.includes(char)){
      //  consolr.log(char)
   // }
   //}
//}

function countvowel(str)
{
return structurevowel.match(/[aeiou]/gi)?.length||0;
}
console.log(countvowel("NIT COLLEGE"));
