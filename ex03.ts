/*
** Une fonction qui reçoit 1 paramètre de type string. 
** La fonction renvoie chaque mot avec ces lettres à l'envers, 
** mais en gardant l'ordre des mots. Également, 
** la première lettre de chaque mot inversé doit être en majuscule.
*/


function strReverseAndUpper(str : string) : string
{
  let arrayOfWord = str.split(" ");
  for (let i = 0; i < arrayOfWord.length; i++)
  {
    arrayOfWord[i] = arrayOfWord[i].split("").reverse().join("");
    arrayOfWord[i] = arrayOfWord[i].charAt(0).toUpperCase() + arrayOfWord[i].slice(1);
  }
  return (arrayOfWord.join(" "))
}

// --------------------------------------------------------------------------------------------------------- //
// TEST :                                                                                                    //
// --------------------------------------------------------------------------------------------------------- //


let str01 : string = "hello     world !";
let str02 : string = "hello world !";
let str03 : string = "";
let str04 : string = "                           ";
let str05 : string = "toto titi titi tata tata toto test01 test02 test03";


console.log("string 01 : " + strReverseAndUpper(str01) + "| end str.");
console.log("string 02 : " + strReverseAndUpper(str02) + "| end str.");
console.log("string 03 : " + strReverseAndUpper(str03) + "| end str.");
console.log("string 04 : " + strReverseAndUpper(str04) + "| end str.");
console.log("string 05 : " + strReverseAndUpper(str05) + "| end str.");
