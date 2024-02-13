// MILESTONE 0:
// - Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// - Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// - Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// - Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// - Organizzare i singoli membri in card/schede
// Consigli del giorno:
// - Ragioniamo come sempre a step.
// - Prima la logica in italiano e poi traduciamo in codice.
// - E ricordiamoci che console.log() è nostro amico!

// creiamo un array di oggetti con le informazioni fornite
const membersTeam = [
    {
    "name" : 'Wayne Barnett',
    "role" : 'Founder & Ceo',
    "photo": 'wayne-barnett-founder-ceo.jpg'
    },
    {
    "name" : 'Angela Caroll',
    "role" : 'Chief Editor',
    "photo": 'angela-caroll-chief-editor.jpg'
    },
    {
    "name" : 'Walter Gordon',
    "role" : 'Office Manager',
    "photo": 'walter-gordon-office-manager.jpg'
    },
    {
    "name" : 'Angela Lopez',
    "role" : 'Social Media Manager',
    "photo": 'angela-lopez-social-media-manager.jpg'
    },
    {
    "name" : 'Scott Estrada',
    "role" : 'Developer',
    "photo": 'scott-estrada-developer.jpg'
    },
    {
    "name" : 'Barbara Ramos',
    "role" : 'Graphic Designer',
    "photo": 'barbara-ramos-graphic-designer.jpg'
    },
];

// stampiamo in console l'array di oggetti
// console.log(membersTeam);

// stampiamo in pagina le informazioni fornite
const listElement = document.querySelector("ul");

// ciclo for per iterare su ogni elemtno dell'array (oggetto)
for (let i = 0; i < membersTeam.length; i++){

    const actualMember = membersTeam[i];

    // ciclo "for-in" per ciclare su ogni chiave dell'oggetto
    for (let key in actualMember){

        // stampiamo in console le informazioni fornite tramite oggetti
        console.log(`${key}: ${actualMember[key]}`)
    }
}