20eventi — Sito statico pronto per Vercel/Netlify

STRUTTURA
- index.html  → pagina unica (landing + preventivo + contatti)
- style.css   → stile minimale
- script.js   → logica preventivo + invio form (Formspree)
- /assets     → immagini/loghi (inserisci qui i tuoi file)

CONFIGURAZIONE FORMSPREE (obbligatoria per ricevere i lead via email)
1) Crea un form su https://formspree.io (gratuito).
2) Copia l'endpoint (es. https://formspree.io/f/abcd1234).
3) Apri script.js e sostituisci FORMSPREE_ENDPOINT con il tuo URL.
4) Pubblica su Vercel e fai un test: compila il form e controlla la casella info@20eventi.it.

PUBBLICAZIONE SU VERCEL (consigliato)
1) Vai su https://vercel.com → New Project → Add New → Import (Create from template → 'Other').
2) Carica questi file o collega una repo con questi file nella root.
3) Deploy.
4) In Settings → Domains aggiungi 20eventi.it.
5) Su Aruba aggiungi i record DNS che Vercel ti mostra (A/AAAA o CNAME).
6) Attendi la propagazione DNS (15–60 min).

NOTE
- I prezzi base sono indicativi (Basic 990, Plus 2490, Full 4990). Modifica in script.js.
- La stima è indicativa e non vincolante; puoi cambiare le regole nel file script.js (funzione computeExtra).
- Per WhatsApp click-to-chat, aggiungi un link tipo: https://wa.me/39XXXXXXXXXX
