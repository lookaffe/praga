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
- Ognuno apre il link → **Condividi** → scrive il proprio nome → **Condividi** di nuovo (consenti la posizione). Il gruppo è unico per tutti: il codice sta in `settings.js` e si cambia solo lì, **prima** che gli amici usino l'app.
- Aggiungi alla Home: Chrome (Android) menu ⋮ → *Installa app*; Safari (iPhone) Condividi → *Aggiungi alla schermata Home*.
- **Tenere premuto sulla mappa** = aggiungi un punto per tutto il gruppo.

## 5. Quiz di prossimità
- Il pulsante 🏆 in alto apre classifica e "＋ Nuova domanda". Serve **Condividi** attivo per giocare.
- Un punto quiz compare sulla mappa entro **500 m**; la domanda si vede e si risponde entro **100 m** (250 m per le 5 domande iniziali sui monumenti, perché le loro coordinate sono approssimate). Un solo tentativo, scelta multipla.
- Punti: 1° 10, 2° 7, 3° 5, dagli altri 3 (modificabili in `quiz.js`).
- Ogni utente può scrivere 2 domande; chi le scrive prende gli stessi punti di ogni risposta corretta. Gli admin ne scrivono quante vogliono e non prendono punti autore.
- **Diventare admin**: apri "Io", copia il tuo ID, mettilo in `ADMIN_UIDS` in `quiz.js` (es. `["a1b2c3d4e5f6"]`) e ricarica.
- Limiti: niente login e le risposte giuste stanno nel database, quindi chi sa usare gli strumenti del browser può barare o superare il limite delle 2 domande. Va bene tra amici, non è a prova di furbo.

## Limiti da conoscere
- **Privacy/sicurezza**: le regole permettono lettura/scrittura a chiunque conosca il codice gruppo, che sta in `settings.js` nel repo pubblico: chi trova il repo lo trova. Non c'è login; il codice è lungo e casuale per non essere indovinabile. Smetti di condividere con **Stop**; a fine viaggio elimina il nodo `groups` dalla console.
- **Coordinate approssimate**: i luoghi iniziali sono posizionati a livello di quartiere. Usa "Apri in Google Maps" nel popup per il punto esatto. Controlla orari e prenotazioni a gennaio (alcune attività richiedono prenotazione).
- **Posizione in background**: una PWA aggiorna la posizione solo con l'app aperta/schermo acceso. Non è un tracker continuo.
- Le tessere mappa servono la rete: in roaming/offline vedrai solo quelle già visitate.
