// 20eventi: preventivatore + invio form (Formspree)
const PACKS = {
  basic: { name: "Basic", base: 990 },
  plus: { name: "Plus", base: 2490 },
  full: { name: "Full Experience", base: 4990 },
};

// <-- Sostituisci qui con il tuo endpoint Formspree, es: https://formspree.io/f/abcd1234 -->
const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourEndpoint";

function formatEUR(n) {
  return n.toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}

function computeExtra(form) {
  let tot = 0;
  const n = Number(form.persone?.value || 0);
  const food = form.food?.checked ? 20 : 0;
  const bev = form.beverage?.checked ? 10 : 0;
  const ent = form.entertainment?.checked ? 5 : 0;
  tot += n * (food + bev + ent);

  const citta = (form.citta?.value || "").trim().toLowerCase();
  if (citta && citta !== "milano") tot += 350;

  const dateStr = form.data?.value;
  if (dateStr) {
    const m = new Date(dateStr).getMonth() + 1;
    if ([6, 7, 12].includes(m)) tot += 500;
  }
  return tot;
}

function updateSummary() {
  const form = document.getElementById("quote-form");
  const packId = form.pacchetto.value;
  const base = PACKS[packId].base;
  const extra = computeExtra(form);
  const totale = base + extra;

  document.getElementById("stima").textContent = formatEUR(totale);

  document.getElementById("s-pack").textContent = PACKS[packId].name;
  document.getElementById("s-base").textContent = formatEUR(base);
  document.getElementById("s-extra").textContent = formatEUR(extra);
  document.getElementById("s-persone").textContent = form.persone.value || "—";
  document.getElementById("s-citta").textContent = form.citta.value || "—";

  const servizi = [
    form.food.checked && "Food",
    form.beverage.checked && "Beverage",
    form.entertainment.checked && "Entertainment",
  ].filter(Boolean).join(" • ") || "—";
  document.getElementById("s-servizi").textContent = servizi;
}

function attachHandlers() {
  const form = document.getElementById("quote-form");

  // Ricalcolo in tempo reale
  form.querySelectorAll("input, select, textarea").forEach(el => {
    el.addEventListener("input", updateSummary);
    el.addEventListener("change", updateSummary);
  });

  // Bottoni "Scegli pacchetto"
  document.querySelectorAll("[data-pack]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-pack");
      form.pacchetto.value = id;
      updateSummary();
      document.getElementById("preventivo").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Submit a Formspree
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const packId = form.pacchetto.value;
    const base = PACKS[packId].base;
    const extra = computeExtra(form);
    const totale = base + extra;

    const data = new FormData(form);
    data.append("preventivo", formatEUR(totale));

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: data });
      if (res.ok) {
        alert("Richiesta inviata! Ti ricontattiamo entro 24h.");
        form.reset();
        // Default switches back on
        form.food.checked = true;
        form.beverage.checked = true;
        form.entertainment.checked = true;
        updateSummary();
      } else {
        alert("Errore di invio. Scrivi a info@20eventi.it");
      }
    } catch (err) {
      alert("Errore di connessione. Riprova o scrivi a info@20eventi.it");
    }
  });

  updateSummary();
}

document.addEventListener("DOMContentLoaded", attachHandlers);
