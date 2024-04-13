// Contador de productos en el carrito
let cartCounter = 0;

// Obtener el botón del carrito y el contador
const cartBtn = document.querySelector('.cart-btn');
const cartCounterSpan = document.getElementById('cart-counter');

// Función para actualizar el contador de productos en el carrito
function updateCartCounter() {
  cartCounterSpan.textContent = cartCounter;
}

// Evento al hacer clic en el botón del carrito
cartBtn.addEventListener('click', function() {
  // Incrementar el contador de productos
  cartCounter++;
  // Actualizar el contador en el botón del carrito
  updateCartCounter();
});

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Función para validar el formulario
  function validarFormulario(event) {
    let errores = [];

    // Validar que se haya ingresado un nombre de cuenta
    if (usernameInput.value.trim() === '') {
      errores.push('Por favor, ingrese su nombre de cuenta.');
    }

    // Validar que se haya ingresado una contraseña
    if (passwordInput.value.trim() === '') {
      errores.push('Por favor, ingrese su contraseña.');
    }

    // Mostrar mensajes de error si existen
    if (errores.length > 0) {
      event.preventDefault(); // Evitar que se envíe el formulario

      // Crear elemento para mostrar los errores
      const errorElement = document.createElement('div');
      errorElement.classList.add('alert', 'alert-danger');
      errorElement.innerHTML = '<strong>Error:</strong><br>' + errores.join('<br>');
      
      // Insertar el elemento de error antes del formulario
      loginForm.parentNode.insertBefore(errorElement, loginForm);
    }
  }

  // Manejar el evento submit del formulario
  loginForm.addEventListener('submit', validarFormulario);
});



document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registro-form');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const nombreCuentaInput = document.getElementById('nombre-cuenta');
    const telefonoInput = document.getElementById('telefono');
    const contrasenaInput = document.getElementById('contrasena');
    const repetirContrasenaInput = document.getElementById('repetir-contrasena');
  
    // Función para validar el formulario de registro
    function validarRegistro(event) {
      let errores = [];
  
      // Validar que se haya ingresado un nombre
      if (nombreInput.value.trim() === '') {
        errores.push('Por favor, ingrese su nombre.');
      }
  
      // Validar que se haya ingresado un apellido
      if (apellidoInput.value.trim() === '') {
        errores.push('Por favor, ingrese su apellido.');
      }
  
      // Validar que se haya ingresado un nombre de cuenta
      if (nombreCuentaInput.value.trim() === '') {
        errores.push('Por favor, ingrese su nombre de cuenta.');
      }
  
      // Validar que se haya ingresado un número de teléfono válido (Formato: +56912345678)
      if (!telefonoInput.value.match(/^\+569[0-9]{8}$/)) {
        errores.push('Por favor, ingrese un número de teléfono válido (Formato: +56912345678).');
      }
  
      // Validar que se haya ingresado una contraseña
      if (contrasenaInput.value.trim() === '') {
        errores.push('Por favor, ingrese su contraseña.');
      }
  
      // Validar que la contraseña coincida con la repetición de la contraseña
      if (contrasenaInput.value !== repetirContrasenaInput.value) {
        errores.push('Las contraseñas no coinciden.');
      }
  
      // Mostrar mensajes de error si existen
      if (errores.length > 0) {
        event.preventDefault(); // Evitar que se envíe el formulario
  
        // Crear elemento para mostrar los errores
        const errorElement = document.createElement('div');
        errorElement.classList.add('alert', 'alert-danger');
        errorElement.innerHTML = '<strong>Error:</strong><br>' + errores.join('<br>');
        
        // Insertar el elemento de error antes del formulario
        registroForm.parentNode.insertBefore(errorElement, registroForm);
      }
    }
  
    // Manejar el evento submit del formulario de registro
    registroForm.addEventListener('submit', validarRegistro);
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo de productos en el carrito
    const productos = [
      { id: 1, nombre: 'Producto 1', precio: 1000 },
      { id: 2, nombre: 'Producto 2', precio: 1500 },
      { id: 3, nombre: 'Producto 3', precio: 2000 }
    ];
  
    // Función para mostrar los productos en el carrito
    function mostrarProductos() {
      const carritoLista = document.getElementById('carrito-lista');
      carritoLista.innerHTML = '';
  
      productos.forEach(producto => {
        const itemCarrito = document.createElement('div');
        itemCarrito.innerHTML = `
          <p>${producto.nombre} - ${formatCurrency(producto.precio)} CLP</p>
          <button class="btn btn-remove" data-id="${producto.id}">Eliminar</button>
        `;
        carritoLista.appendChild(itemCarrito);
  
        // Evento para eliminar el producto del carrito
        itemCarrito.querySelector('.btn-remove').addEventListener('click', function() {
          eliminarProducto(producto.id);
        });
      });
  
      calcularTotal();
    }
  
    // Función para calcular el monto total a pagar
    function calcularTotal() {
      const montoTotalSpan = document.getElementById('monto-total');
      let total = 0;
  
      productos.forEach(producto => {
        total += producto.precio;
      });
  
      montoTotalSpan.textContent = formatCurrency(total);
    }
  
    // Función para eliminar un producto del carrito
    function eliminarProducto(id) {
      const index = productos.findIndex(producto => producto.id === id);
      productos.splice(index, 1);
      mostrarProductos();
    }
  
    // Función para formatear el monto en CLP
    function formatCurrency(amount) {
      return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    }
  
    // Mostrar productos al cargar la página
    mostrarProductos();
  });
  