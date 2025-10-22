function toggleMenu(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
}

// Optional: client-side success message for Formspree
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  if(!form) return;
  form.addEventListener('submit', async (e) => {
    // Allow normal POST; also provide fetch path if desired.
    // To use AJAX instead, uncomment below and set your Formspree endpoint.
    /*
    e.preventDefault();
    const data = new FormData(form);
    const endpoint = form.getAttribute('action');
    const res = await fetch(endpoint, { method:'POST', body: data, headers: { 'Accept': 'application/json' } });
    if(res.ok){
      alert('Richiesta inviata, ti risponderemo entro 24 ore. Grazie!');
      form.reset();
    } else {
      alert('Errore di invio. Scrivici su WhatsApp o via email.');
    }
    */
  });
});
