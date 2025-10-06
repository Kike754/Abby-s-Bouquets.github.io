// ----------------------
// Variables del carrito
// ----------------------
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nombre = btn.dataset.nombre;
    const precio = Number(btn.dataset.precio);
    carritoItems.push({ nombre, precio });
    actualizarCarrito();
  });
});
const carritoBtn = document.getElementById("carrito-btn");
const carrito = document.getElementById("carrito");
const carritoLista = document.getElementById("carrito-lista");
const carritoTotal = document.getElementById("carrito-total");
const btnEnviarWhatsapp = document.getElementById("enviar-whatsapp");

// Array que guarda los productos agregados
let carritoItems = [];

// ----------------------
// Abrir / Cerrar carrito
// ----------------------
carritoBtn.addEventListener("click", () => {
  carrito.classList.toggle("open");
});

// ----------------------
// Agregar productos
// ----------------------
function agregarAlCarrito(producto) {
  carritoItems.push(producto);
  actualizarCarrito();
}

// ----------------------
// Actualizar carrito
// ----------------------
function actualizarCarrito() {
  carritoLista.innerHTML = "";

  let total = 0;
  carritoItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} ($${item.precio})`;
    carritoLista.appendChild(li);
    total += item.precio;
  });

  carritoTotal.textContent = `Total: $${total}`;
}

// ----------------------
// Enviar pedido por WhatsApp
// ----------------------
btnEnviarWhatsapp.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;

  if (!nombre || !apellidos || !correo) {
    alert("Por favor completa todos los datos del formulario.");
    return;
  }

  if (carritoItems.length === 0) {
    alert("Agrega al menos un producto al carrito.");
    return;
  }

  // Crear mensaje
  const productos = carritoItems.map(p => `${p.nombre} ($${p.precio})`).join(', ');
  const mensaje = `Nuevo pedido:\nNombre: ${nombre} ${apellidos}\nCorreo: ${correo}\nProductos: ${productos}`;

  // Número de WhatsApp del dueño (con código de país, sin +)
  const numero = "503 7826-6165"; // <-- Cambia aquí por el número real del dueño

  // URL de WhatsApp
  const url = `https://wa.me/${50378266165}?text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp
  window.open(url, "_blank");
});
//
