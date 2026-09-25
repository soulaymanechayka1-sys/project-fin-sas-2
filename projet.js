const prompt = require("prompt-sync")();
const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Parti Authenticite et Modernite",
    age: 40,
    electeurs: ["DD993456" ,"NN23456" ,"AB323456" ],
  },
  {
    cin: "BS123456",
    nom: "samir",
    prenom: "Samor",
    partiPolitique: "Parti Authenticite et Modernite",
    age: 30,
    electeurs: ["MM88456" ,"KJ663456"],
  },
  {
    cin: "BB423456",
    nom: "boushak",
    prenom: "amin",
    partiPolitique: "Rassemblement National des Independants",
    age: 20,
    electeurs: ["AB963456"],
  },
  {
    cin: "AA12346",
    nom: "aymen",
    prenom: "amin",
    partiPolitique: "Rassemblement National des Independants",
    age: 50,
    electeurs: [],
  },
  {
    cin: "KK123456",
    nom: "soulaimane",
    prenom: "salim",
    partiPolitique: "Mouvement Populaire",
    age: 20,
    electeurs: ["CC123456" , "FF453456"],
  },
  {
    cin: "LL753456",
    nom: "samir",
    prenom: "daw",
    partiPolitique: "Mouvement Populaire",
    age: 30,
    electeurs: [],
  },
  {
    cin: "DD993456",
    nom: "bouadi",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 60,
    electeurs: [],
  },
  {
    cin: "NN23456",
    nom: "labib",
    prenom: "anas",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: [],
  },
  {
    cin: "AB323456",
    nom: "mohamed",
    prenom: "hanin",
    partiPolitique: "Indépendant",
    age: 25,
    electeurs: [],
  },
  {
    cin: "KJ663456",
    nom: "walid",
    prenom: "khawa",
    partiPolitique: "Indépendant",
    age: 60,
    electeurs: [],
  },
  {
    cin: "MM88456",
    nom: "senani",
    prenom: "sakaria",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: [],
  },
  {
    cin: "AB963456",
    nom: "hamada",
    prenom: "adam",
    partiPolitique: "Indépendant",
    age: 29,
    electeurs: [],
  },
  {
    cin: "CC123456",
    nom: "Boushaba",
    prenom: "oussama",
    partiPolitique: "Indépendant",
    age: 47,
    electeurs: [],
  },
  {
    cin: "FF453456",
    nom: "hamami",
    prenom: "ayoub",
    partiPolitique: "Indépendant",
    age: 43,
    electeurs: [],
  },
  
];


// 1. Ajouter un nouveau candidat
function trouverCandidatParCin(cin) {
  return candidats.find(function (c) {
    return c.cin === cin;
  });
}
function ajouterCandidat() {
  console.log("\n--- Ajout d'un nouveau candidat ---");

  const cin = prompt("CIN: ");

  if (trouverCandidatParCin(cin)) {
    console.log("Un candidat avec ce CIN existe déjà.");
    return;
  }

  const nom = prompt("Nom: ");
  const prenom = prompt("Prénom: ");
  let partiPolitique = prompt("Parti politique (laisser vide pour Indépendant): ");

  if (partiPolitique === "") {
    partiPolitique = "Indépendant";
  }
let age = prompt("age :");
const objet = {};

  objet.cin= cin,
  objet.nom= nom,
  objet.prenom= prenom,
  objet.partiPolitique= partiPolitique,
  objet.age= age,
  

  candidats.push(candidats);
  console.log("Candidat ajouté avec succès !");
}



// 2. Ajouter plusieurs candidats à la fois

function ajouterPlusieursCandidats() {
  let n = prompt("Combien de candidats voulez-vous ajouter ? ");
for (let i = 0; i < n; i++){
     ajouterCandidat()

}
 
}
ajouterPlusieursCandidats()
ajouterCandidat()