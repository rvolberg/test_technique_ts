/*
** Une fonction qui reçoit 1 seul paramètre du type string 
** et qui renvoie true si le paramètre contient un ou plusieurs chiffres. 
** Sinon la fonction renvoie false.
*/

function strContainNumber(str : string) : boolean
{
    let numbers= /\d/;

    if (str.search(numbers) == -1)
        return(false);
    else
        return(true);
}


// --------------------------------------------------------------------------------------------------------- //
// TEST :                                                                                                    //
// --------------------------------------------------------------------------------------------------------- //


 console.log(strContainNumber(" "));
 console.log(strContainNumber(""));
 console.log(strContainNumber("12345"));
 console.log(strContainNumber("H3llo World !"));
 console.log(strContainNumber("Hello World !"));






