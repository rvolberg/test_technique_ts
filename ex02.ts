/*
** Une fonction qui reçoit 1 seul paramètre. 
** Si le paramètre est une Collection (un Array d'Objets), 
** la fonction renvoie true si au moins un des objets contient une key s'appelant total 
** dont la valeur est comprise entre 50 et 100 compris. Sinon, la fonction renvoie false.
*/

/*
** NE PREND PAS EN COMPTE LES OBJETS IMBRIQUÉS DANS DES OBJETS
*/

function findKeyValue(array : Array<any>) : boolean
{
     for(let entry of array)
     {    
        if (entry.hasOwnProperty("total") && entry.total >=50 && entry.total <= 100)
            return(true);
     }
   return(false);
}


// --------------------------------------------------------------------------------------------------------- //
// TEST :                                                                                                    //
// --------------------------------------------------------------------------------------------------------- //


type obj = {
  name: string;
  animal: boolean;
  total: number;
};

let my_obj01 :  obj = {name : "rose", animal : false,  total : 49};
let my_obj02 :  obj = {name : "chien", animal : true,  total : 42};
let my_obj03 :  obj = {name : "cheval", animal : true,  total : 101};
let my_obj04 :  obj = {name : "porte", animal : false,  total : 99};

let i = [];
let obj_array = [];


i = ["ceci est une string test", "test02", "Hello World !", "total", "100"];
obj_array.push(my_obj01, my_obj02, my_obj03, my_obj04);


console.log("Random Array : " + findKeyValue(i));
console.log("Collection : " + findKeyValue(obj_array));

