// close tab handling 
window.addEventListener('beforeunload', function(e) {
    // Mendapatkan textarea dengan id "agendaPerwalian"
    const textarea = document.getElementById("agendaPerwalian");

    // Memeriksa apakah textarea memiliki teks atau string di dalamnya
    if (textarea.value.trim() != "") {
        e.preventDefault();
        e.returnValue = '';
    }
  });
  
window.addEventListener('unload', function(e) {

});