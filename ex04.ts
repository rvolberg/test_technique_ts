/*
** Une fonction qui reçoit 2 paramètres: le premier sera toujours un Array, 
** le deuxième peut être une String ou undefined;
** La fonction renvoie l'Array trié:
**  
** 1. Par ordre croissant si le 2ème paramètre est égal à « asc »
** 2. Par ordre décroissant si le 2ème paramètre est égale à « desc »
** 3. Renvoie une erreur si le 2ème paramètre n'est pas égal à « asc », « desc » ni undefined
** 4. Par ordre croissant si le 2ème paramètre est undefined
*/

/*
** LE TYPE D'ARRAY EN PARAMÈTRE N'AYANT PAS ÉTÉ DONNÉ, 
** UNE ARRAY<STRING> A ÉTÉ DÉFINI AVEC UN TRI ALPHABÉTIQUE
*/

function sortArrayString(tab : Array<string>, str : string | undefined ) : Array<string>
{
   if (str == "asc" || str == "desc" || str == undefined) 
    {
      if (str == "asc"|| str == undefined)
        tab = tab.sort();
      else if (str == "desc")
        tab = tab.sort().reverse();
    }
   else 
    throw new Error(
    'Unvalid Array. Expected asc, desc or undefined sorting option.')

  return(tab)
}


// --------------------------------------------------------------------------------------------------------- //
// TEST :                                                                                                    //
// --------------------------------------------------------------------------------------------------------- //


let array01 = ["1", "test00" ,"test01", "42", "50", "test02", "test04", "48"]; 
let array02 = [""]; 
let array03 = ["AAA", "ADF" ,"EEC", "42", "000", " ", "FFz", "542sdfv"]; 
let array04 = ["   ", "1000" ,"56", "42", "hello world", " ", "", "end"]; 



console.log("Before Sorting 01 : " + array01);
console.log("After Sorting 01 desc: " + sortArrayString(array01, "desc"));
console.log("After Sorting 01 asc: " + sortArrayString(array01, "asc"));
console.log("After Sorting 01 undefine: " + sortArrayString(array01, undefined) + "\n");


console.log("Before Sorting 02 : " + array02);
console.log("After Sorting 02 desc: " + sortArrayString(array02, "desc"));
console.log("After Sorting 02 asc: " + sortArrayString(array02, "asc"));
console.log("After Sorting 02 undefine: " + sortArrayString(array02, undefined) + "\n");

console.log("Before Sorting 03 : " + array03);
console.log("After Sorting 03 desc: " + sortArrayString(array03, "desc"));
console.log("After Sorting 03 asc: " + sortArrayString(array03, "asc"));
console.log("After Sorting 03 undefine: " + sortArrayString(array03, undefined) + "\n");

console.log("Before Sorting 04 : " + array04);
console.log("After Sorting 04 desc: " + sortArrayString(array04, "desc"));
console.log("After Sorting 04 asc: " + sortArrayString(array04, "asc"));
console.log("After Sorting 04 undefine: " + sortArrayString(array04, undefined) + "\n");
