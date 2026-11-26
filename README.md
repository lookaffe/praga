# Praga 2027 – mappa di gruppo (PWA)

Mappa con luoghi per categoria (birra / cibo / attività), posizione live degli amici e punti aggiunti dal gruppo.
Funziona su Android e iPhone: si apre da link e si aggiunge alla schermata Home.

## 1. Provala subito (senza Firebase)
Hosting e Firebase sono opzionali per provare: pubblica la cartella (passo 3) e avrai già mappa e filtri.

## 2. Firebase (serve per posizioni live e punti condivisi)
1. https://console.firebase.google.com → Aggiungi progetto (Analytics non serve).
2. Build → **Realtime Database** → Crea database (regione Europa) → modalità *locked*.
3. Scheda **Regole** → incolla il contenuto di `database.rules.json` → Pubblica.
4. Impostazioni progetto (ingranaggio) → Le tue app → icona Web `</>` → registra l'app → copia l'oggetto `firebaseConfig`.
5. Incolla i valori in `config.js` (sostituisci gli "INCOLLA_QUI"). `databaseURL` è nella pagina del Realtime Database.

## 3. Pubblicazione (serve HTTPS: la geolocalizzazione non funziona senza)
Opzione più semplice, **GitHub Pages**: crea un repo, carica tutti i file di questa cartella, Settings → Pages → branch `main`. Il link sarà `https://<utente>.github.io/<repo>/`.
Alternativa: Firebase Hosting (`firebase deploy`).

## 4. Uso
- Ognuno apre il link → **Gruppo** → nome + codice condiviso → **Condividi** (consenti la posizione).
- Aggiungi alla Home: Chrome (Android) menu ⋮ → *Installa app*; Safari (iPhone) Condividi → *Aggiungi alla schermata Home*.
- **Tenere premuto sulla mappa** = aggiungi un punto per tutto il gruppo.

## Limiti da conoscere
- **Privacy/sicurezza**: le regole permettono lettura/scrittura a chiunque conosca il codice gruppo. Scegli un codice non indovinabile (non "praga"). Non c'è login. Smetti di condividere con **Stop**; a fine viaggio elimina il nodo `groups` dalla console.
- **Coordinate approssimate**: i luoghi iniziali sono posizionati a livello di quartiere. Usa "Apri in Google Maps" nel popup per il punto esatto. Controlla orari e prenotazioni a gennaio (alcune attività richiedono prenotazione).
- **Posizione in background**: una PWA aggiorna la posizione solo con l'app aperta/schermo acceso. Non è un tracker continuo.
- Le tessere mappa servono la rete: in roaming/offline vedrai solo quelle già visitate.
