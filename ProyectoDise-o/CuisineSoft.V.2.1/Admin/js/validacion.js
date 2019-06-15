$('#btnRegistrar').click(function (e) {
  e.preventDefault();

  var codigo, cargo, primerNombre, segundoNombre, primerApellido, segundoApellido, tipoDocumento, documento, telefono, celular, email;

  codigo = $('#codigo').val();
  cargo = $('#cargo').val();
  primerNombre = $('#primerNombre').val();
  segundoNombre = $('#segundoNombre').val();
  primerApellido = $('#primerApellido').val();
  segundoApellido = $('#segundoApellido').val();
  tipoDocumento = $('#tipoDocumento').val();
  documento = $('#segundoApellido').val();
  telefono = $('#documento').val();
  email = $('#documento').val();

  if (codigo === '' || cargo === 'Elige...' || primerNombre === '' || segundoNombre === '' || primerApellido === '' || segundoApellido === '' || tipoDocumento === 'Elige...' || documento === '' || telefono === '' || celular === '' || email === '') {
    Swal.fire({
      type: 'error',
      title: 'Oops',
      text: 'Campos Vacios',
      animation: false,
      customClass: {
        popup: 'animated jackInTheBox faster'
      }
    })
  } else {
    Swal.fire({
      type: 'success',
      title: 'Hecho',
      text: 'Registrado Exitosamente',
      animation: false,
      customClass: {
        popup: 'animated jackInTheBox faster'
      }
    })
    $('input').val('');
    $('#tipoDocumento').val('Elige...');
    $('#cargo').val('Elige...');
  }
});