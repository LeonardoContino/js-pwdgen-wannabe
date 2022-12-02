// console.log("ok js");

/*
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/*
    1. prendo elemento in dom   
    2. chiedo all'utente il suo nome
    3. chiedo il suo cognome
    4. chiedo il suo colore preferito
    5. inserire numero 21 su dom
    6. inserisco in html o dom gli elementi dell'utente
 */
//prendo elemento in dom
const targetElement = document.getElementById("password");
// console.log(targetElement);

// chiedo all'utente il suo nome
const UserName = prompt("quale è il tuo nome?", "Leonardo");
// console.log(UserName);

// chiedo il suo cognome
const LastName = prompt("quale è il tuo cognome?", "Contino");
// console.log(LastName);

// chiedo il suo colore preferito
const PrefereColor = prompt("quale è il tuo colore preferito?", "blu");
// console.log(PrefereColor);
// inserire numero
let myNumber = "21";
console.log(myNumber);
// inserire elementi in html
targetElement.innerText = `${UserName}${LastName}${PrefereColor} ${myNumber}`;
// console.log(targetElement);
