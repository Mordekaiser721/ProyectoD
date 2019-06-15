window.addEventListener('load', () => {
  carga();
  function carga() {
    document.getElementById('cuerpo').className = 'animated fadeIn faster';

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      type: 'success',
      title: 'Sesión Iniciada'
    })
  };
})