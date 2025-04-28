
// escaner
let scanner;

function startScanner() {
  scanner = new Html5Qrcode("reader");
  scanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    qrCodeMessage => {
      document.getElementById('result').innerText = `Código detectado: ${qrCodeMessage}`;
      scanner.stop().then(() => {
        console.log("Escaneo detenido");
      }).catch(err => console.error("Error al detener: ", err));
    },
    errorMessage => {
      // Puedes ignorar errores de escaneo frecuentes si quieres
    }
  ).catch(err => {
    console.error("Error al iniciar el escáner: ", err);
  });
}


 // -----------------------------------------------------------------------------

 const menuToggle = document.getElementById('menuToggle');
 const sidebar = document.getElementById('sidebar');
 const overlay = document.getElementById('overlay');
 const content = document.querySelector('.content');
 
 menuToggle.addEventListener('click', () => {
     sidebar.classList.toggle('hidden');
     overlay.style.display = sidebar.classList.contains('hidden') ? 'none' : 'block';
 
     if (sidebar.classList.contains('hidden')) {
         menuToggle.style.left = '20px';
         content.classList.add('expanded');
     } else {
         menuToggle.style.left = '270px';
         content.classList.remove('expanded');
     }
 });
 
 overlay.addEventListener('click', () => {
     sidebar.classList.add('hidden');
     overlay.style.display = 'none';
     menuToggle.style.left = '20px';
     content.classList.add('expanded');
 });
 