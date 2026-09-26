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


// 3. Afficher la liste des candidats

function AfficherListeCandidats(candidat) {
    console.log("1 --> Affichage tri par nombre de vote  ");
    console.log("2 --> Affichage filtre par partie politique");
    let choix = prompt('ton choix : ');
    if (choix == 1) {
        for (let i = 0; i < candidat.length - 1; i++) {
            for (let j = 0; j < candidat.length - 1 - i; j++) {
                if (candidat[j].electeurs.length < candidat[j + 1].electeurs.length) {
                    let temp = candidat[j];
                    candidat[j] = candidat[j + 1];
                    candidat[j + 1] = temp;
                }
            }
        }
        for (let i = 0; i < candidat.length; i++) {
            console.log("Identifiant : ", candidat[i].cin);
            console.log("nom : ", candidat[i].nom);
            console.log("prénom : ", candidat[i].prenom);
            console.log("Parti politique : ", candidat[i].partiPolitique);
            console.log("Age : ", candidat[i].age);
            console.log("Nombre de votes : ", candidat[i].electeurs.length);
            console.log("***")
        }
    }
    else if (choix == 2) {
        let partpolitique = prompt("entrez la partie politique : ")
        for (let i = 0; i < candidat.length; i++) {
            if (candidat[i].partiPolitique == partpolitique) {
                console.log(candidat[i]);
            }

        }
    }
    else {
        console.log("choix invalide !");
    }
}

// 4. Voter pour un candidat

function voter() {
  console.log("\n--- Vote ---");
  const cinElecteur = prompt("Votre CIN: ");

  let aDejaVote = false;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].electeurs.includes(cinElecteur.toUpperCase())) {
      aDejaVote = true;
      break;
    }
  }

  if (aDejaVote) {
    console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.");
    return;
  }

  const cinCandidat = prompt("CIN du candidat pour qui vous votez: ");
  const candidat = trouverCandidatParCin(cinCandidat);

  if (!candidat) {
    console.log("Aucun candidat ne correspond à ce CIN.");
    return;
  }

  candidat.electeurs.push(cinElecteur.toUpperCase());
  console.log("Vote enregistré pour " + candidat.prenom + " " + candidat.nom + ". Merci !");
}

// 5. Modifier les informations d'un candidat

function modifierCandidats(candidats) {
  console.log("\n--- Modification d'un candidat ---");
  const cin = prompt("CIN du candidat à modifier: ");
  const candidat = trouverCandidatParCin(cin);

  if (!candidat) {
    console.log("Candidat introuvable.");
    return;
  }

  console.log("1. Modifier le parti politique");
  console.log("2. Modifier l'âge");
  const choix = prompt("Votre choix: ");

  if (choix === "1") {
    const nouveauParti = prompt("Nouveau parti politique: ");
    candidat.partiPolitique = nouveauParti === "" ? "Indépendant" : nouveauParti;
    console.log("Parti politique mis à jour.");
  } else if (choix === "2") {
    const nouvelAge = parseInt(prompt("Nouvel âge: "));
    if (isNaN(nouvelAge)) {
      console.log("Âge invalide.");
    } else {
      candidat.age = nouvelAge;
      console.log("Âge mis à jour.");
    }
  } else {
    console.log("Choix invalide.");
  }
}

modifierCandidats(candidats)