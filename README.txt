# 20EVENTI — Pacchetto statico per Vercel

Questo ZIP contiene un sito statico pronto per il deploy su Vercel.

## Contenuto
- `index.html` — Landing page
- `styles.css` — Stili (palette viola/fucsia/bianco, testi in maiuscolo)
- `script.js` — Script opzionali
- `assets/` — Cartella asset (puoi aggiungere immagini/logo)

## Come pubblicare su Vercel
1. Vai su https://vercel.com → Importa progetto → **Drag & Drop** della cartella/ZIP
2. Seleziona framework: **Other** (static)
3. Build command: *(vuoto)* — Output directory: **/**

## Formspree
Per attivare il form:

1. Vai su https://formspree.io → crea un form → copia il tuo **Form ID** (es. `abcdwxyz`)
2. Apri `index.html` e sostituisci `YOUR_FORMSPREE_ID` nell'attributo `action` del form:
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
3. Pubblica.

Email display sul sito: `info@20eventi.it` (modificabile nell'HTML).

## WhatsApp
Il bottone WhatsApp apre una chat con questo testo precompilato:
- "Ciao, vorrei un preventivo per un evento aziendale"
Se vuoi collegare un numero specifico, imposta il link così:
```
https://wa.me/<numero_con_prefisso_internazionale>?text=...
```
Esempio Italia: `https://wa.me/393331234567?text=...`

## Footer
Nome azienda: **NEXUS GROUP SRL**  
Partita IVA: **P. IVA 06343770969   **  
→ Sostituisci con i dati reali in `index.html`.

---

© NEXUS GROUP SRL — Tutti i diritti riservati.
