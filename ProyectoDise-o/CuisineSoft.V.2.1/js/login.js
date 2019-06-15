window.addEventListener('load', () => {
  carga();
  function carga() {
    document.getElementById('cuerpo').className = 'animated fadeIn faster';
  };
  $('#btnOlvide').click(function (e) {
    e.preventDefault();

    Swal.fire({
      type: 'info',
      title: 'Cambiar Contraseña',
      text: 'Por favor introduzca su codigo',
      input: 'text',
      animation: false,
      customClass: {
        popup: 'animated jackInTheBox faster'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Recuperar Contraseña'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Hecho',
          'Revisa tu correo',
          'success'
        )
      }
    })
  })
});