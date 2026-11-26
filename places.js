// Luoghi iniziali. Coordinate APPROSSIMATE (precisione di quartiere):
// la scheda apre Google Maps con nome+zona per la posizione esatta.
// Fonti: Foursquare, VisitCzechia, Lonely Planet, HelloPrague, prague.eu, expats.cz.
export const CATEGORIES = {
  birra:     { label: "Birra",     icon: "beer", color: "#d98a00" },
  cibo:      { label: "Cibo",      icon: "food", color: "#c0392b" },
  attivita:  { label: "Attività",  icon: "axe", color: "#2e7d32" },
  cultura:   { label: "Cultura",   icon: "culture", color: "#00838f" },
  altro:     { label: "Altro",     icon: "pin", color: "#5e35b1" },
};

export const PLACES = [
  // --- BIRRA (artigianale / pub tipici) ---
  { id: "beergeek", cat: "birra", name: "BeerGeek Bar", area: "Vinohrady",
    lat: 50.0775, lng: 14.4460, note: "~30 spine, metà ceche metà estere, centinaia di bottiglie. Ottimo per craft." },
  { id: "roesel", cat: "birra", name: "Roesel", area: "Mostecká 45/20, Malá Strana",
    lat: 50.0885, lng: 14.4040, note: "Piccolo, 8 spine craft, barman preparato." },
  { id: "badflash", cat: "birra", name: "Bad Flash Bar", area: "Krymská 126/2, Vršovice",
    lat: 50.0690, lng: 14.4510, note: "Craft beer in zona Vršovice, meno turistica." },
  { id: "dvakohouti", cat: "birra", name: "Dva Kohouti", area: "Plaská 5, Malá Strana",
    lat: 50.0790, lng: 14.4090, note: "Pub frequentato da clienti locali, birre craft." },
  { id: "drinkoteka", cat: "birra", name: "Drinkøtéka", area: "Rašínovo nábř. 56, Nové Město",
    lat: 50.0720, lng: 14.4155, note: "Bar + bottle shop sul fiume, craft ceca moderna, informale." },

  // --- CIBO (ceco tradizionale, non da trappola turistica) ---
  { id: "lokal-dlouha", cat: "cibo", name: "Lokál Dlouhááá", area: "Dlouhá, Città Vecchia",
    lat: 50.0890, lng: 14.4260, note: "Cucina ceca fatta bene (svíčková), frequentato da locali. Prenotare nel weekend." },
  { id: "lokal-kuzelka", cat: "cibo", name: "Lokál U Bílé Kuželky", area: "Míšeňská 12, Malá Strana",
    lat: 50.0888, lng: 14.4087, note: "Stessa formula Lokál, zona più tranquilla." },
  { id: "kachnicka", cat: "cibo", name: "U Modré kachničky", area: "Nebovidská, Malá Strana",
    lat: 50.0875, lng: 14.4045, note: "Cucina tradizionale ceca (anatra), consigliato da Lonely Planet. Più caro." },
  { id: "nejen", cat: "cibo", name: "Nejen Bistro", area: "Londýnská 56, Vinohrady",
    lat: 50.0750, lng: 14.4400, note: "Bistro moderno con ingredienti cechi di stagione." },

  // --- ATTIVITÀ ---
  { id: "houseofaxes", cat: "attivita", name: "The House of Axes", area: "Centro di Praga",
    lat: 50.0870, lng: 14.4250, note: "Lancio asce indoor, 2-30 persone. Posizione solo di zona: verificare indirizzo." },
  { id: "mercuria", cat: "attivita", name: "Mercuria Laser Game (The Playground)", area: "Na Příkopě 14",
    lat: 50.0840, lng: 14.4290, note: "Laser tag in pieno centro, 2-14 giocatori." },
  { id: "funarena", cat: "attivita", name: "Fun Arena", area: "Vicino metro Opatov (linea C)",
    lat: 50.0285, lng: 14.5065, note: "Lancio asce, escape game, HADO, airsoft, arcade. In periferia sud (~25 min dal centro)." },

  // --- CULTURA (coordinate approssimate; orari e biglietti da verificare per gennaio) ---
  { id: "castello", cat: "cultura", icon: "castle", name: "Castello di Praga", area: "Hradčany",
    lat: 50.0909, lng: 14.4005, note: "Complesso con Cattedrale di San Vito e Vicolo d'Oro." },
  { id: "pontecarlo", cat: "cultura", icon: "bridge", name: "Ponte Carlo", area: "Città Vecchia / Malá Strana",
    lat: 50.0865, lng: 14.4114, note: "Ponte pedonale medievale con le statue. Meno affollato la sera." },
  { id: "orologio", cat: "cultura", icon: "clock", name: "Orologio Astronomico", area: "Piazza della Città Vecchia",
    lat: 50.0870, lng: 14.4208, note: "Orologio medievale con il corteo degli apostoli (orari da verificare)." },
  { id: "josefov", cat: "cultura", name: "Quartiere ebraico (Josefov)", area: "Josefov",
    lat: 50.0900, lng: 14.4180, note: "Sinagoghe storiche e antico cimitero. Biglietto cumulativo, verificare orari." },
  { id: "klementinum", cat: "cultura", icon: "book", name: "Klementinum", area: "Città Vecchia",
    lat: 50.0865, lng: 14.4156, note: "Biblioteca barocca e osservatorio, solo con visita guidata." },
  { id: "petrin", cat: "cultura", icon: "tower", name: "Collina di Petřín e torre", area: "Malá Strana",
    lat: 50.0833, lng: 14.3953, note: "Panorama sulla città dalla torre-belvedere. A gennaio possibile ghiaccio sui sentieri." },
  { id: "vysehrad", cat: "cultura", icon: "castle", name: "Vyšehrad", area: "Vyšehrad",
    lat: 50.0645, lng: 14.4180, note: "Fortezza sul fiume con parco e vista, meno turistica del centro." },
  { id: "casadanzante", cat: "cultura", name: "Casa Danzante", area: "Nové Město, lungofiume",
    lat: 50.0756, lng: 14.4143, note: "Edificio moderno di Gehry. Terrazza panoramica con bar." },
  { id: "lennon", cat: "cultura", name: "Muro di John Lennon", area: "Malá Strana",
    lat: 50.0861, lng: 14.4054, note: "Muro dei graffiti, cambia continuamente. Visita di pochi minuti." },
  { id: "museonaz", cat: "cultura", name: "Museo Nazionale e Piazza Venceslao", area: "Nové Město",
    lat: 50.0793, lng: 14.4301, note: "Edificio neorinascimentale sopra la piazza. Verificare se la sede storica è aperta." },
];

// Albergo: punto fisso, sempre visibile (non dipende dai filtri).
// POSIZIONE PROVVISORIA (centro città): sostituire lat/lng/area con l'indirizzo reale.
export const HOTEL = { id: "hotel", icon: "bed", name: "Albergo", area: "Posizione provvisoria",
  lat: 50.0813, lng: 14.4280, note: "Posizione di prova: da aggiornare con l'indirizzo vero." };
