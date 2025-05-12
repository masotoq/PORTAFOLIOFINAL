// seleccion de categoria para escanear
function navigateToQR(category) {
  // Navegar a la página de escaneo QR con la categoría seleccionada
  window.location.href = `scanQR.html?category=${encodeURIComponent(category)}`;
}

// cerrar sesión con confirmación
function logout() {
  const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
  
  if (confirmLogout) {
    // Limpiar cualquier sesión activa (puede variar según tu implementación)
    localStorage.clear(); // Si estás usando localStorage para manejar la sesión
    sessionStorage.clear(); // Si estás usando sessionStorage

    // Redirigir a la página de login
    window.location.href = 'login.html';
  }
}

// -----------------------------------------------------------------------------

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
 