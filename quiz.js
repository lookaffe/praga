// Impostazioni e domande iniziali del quiz di prossimità.

export const REVEAL_M = 500;   // il punto quiz compare sulla mappa entro questa distanza
export const ANSWER_M = 100;   // si può rispondere solo entro questa distanza
export const POINTS = [10, 7, 5];   // 1°, 2°, 3° a rispondere correttamente
export const POINTS_OTHERS = 3;     // dal 4° in poi
export const MAX_USER_QUESTIONS = 2; // domande che può aggiungere un utente non admin
export const AUTHOR_SHARE = 1;       // l'autore (non admin) prende AUTHOR_SHARE x i punti di ogni risposta corretta

// Admin = domande illimitate, vede sempre tutti i punti quiz, niente punti autore.
// Si diventa admin in due modi (valgono per quel browser, finché non cancelli i dati del sito):
//  1) aprendo il link  https://TUO-SITO/?admin=CODICE   (poi l'indirizzo viene ripulito)
//  2) scrivendo il CODICE nel campo "Codice admin" della finestra "Io".
// Qui sotto c'è solo l'impronta (SHA-256) del codice, non il codice. Per cambiarlo, sostituisci ADMIN_HASH
// con lo SHA-256 del nuovo codice (es. su un terminale:  printf '%s' 'nuovocodice' | sha256sum).
export const ADMIN_HASH = "8a0f9bf69c5c9efec010363dbd0688eeddb715dc2830dab0cc93f4bd686457a2";
// Facoltativo: ID fissi sempre admin (l'ID si legge in "Io"; cambia se cancelli i dati del sito).
export const ADMIN_UIDS = ["d939fb6e-153"];

export const pointsForRank = (rank) => POINTS[rank - 1] ?? POINTS_OTHERS;

export function distM(a, b) {
  const R = 6371000, rad = Math.PI / 180;
  const dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// Domande su monumenti noti. Le coordinate dei luoghi sono approssimate, quindi qui il raggio
// per rispondere è più largo (radius). Le domande aggiunte dal gruppo usano ANSWER_M.
export const QUIZ_SEED = [
  { id: "s-carlo", area: "Ponte Carlo", lat: 50.0865, lng: 14.4114, radius: 250,
    text: "Da quale sovrano prende il nome il Ponte Carlo?",
    options: ["Carlo Magno", "Carlo IV", "Carlo V", "Carlo XII"], correct: 1 },
  { id: "s-orologio", area: "Piazza della Città Vecchia", lat: 50.0870, lng: 14.4208, radius: 250,
    text: "In quale edificio si trova l'Orologio Astronomico?",
    options: ["Castello di Praga", "Klementinum", "Municipio della Città Vecchia", "Teatro Nazionale"], correct: 2 },
  { id: "s-petrin", area: "Collina di Petřín", lat: 50.0833, lng: 14.3953, radius: 250,
    text: "A quale celebre torre si ispira la torre di Petřín?",
    options: ["Torre di Pisa", "Big Ben", "Torre Eiffel", "Space Needle"], correct: 2 },
  { id: "s-danzante", area: "Casa Danzante", lat: 50.0756, lng: 14.4143, radius: 250,
    text: "Quale architetto ha progettato la Casa Danzante insieme a Vlado Milunić?",
    options: ["Zaha Hadid", "Frank Gehry", "Norman Foster", "Renzo Piano"], correct: 1 },
  { id: "s-castello", area: "Castello di Praga", lat: 50.0909, lng: 14.4005, radius: 250,
    text: "Come si chiama la cattedrale dentro il complesso del Castello di Praga?",
    options: ["San Nicola", "Santa Sofia", "San Vito", "Sant'Egidio"], correct: 2 },
];
