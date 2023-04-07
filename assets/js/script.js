const cform = document.getElementById("com-form");
const cLink = document.getElementById("com-link");
const rform = document.getElementById("res-form");
const rLink = document.getElementById("res-link");

cLink.addEventListener("click", function (event) {
  event.preventDefault();
  cform.classList.toggle("d-none");
  cform.scrollIntoView({ behavior: 'smooth' });
});
rLink.addEventListener("click", function (event) {
  event.preventDefault();
  rform.classList.toggle("d-none");
  rform.scrollIntoView({ behavior: 'smooth' });
});

$('#com-form').submit(function (event) {
  const nombre = $('#nombre').val();
  const telefono = $('#telefono').val();
  const correo = $('#correo').val();
  const motivo = $('#motivo').val();
  const mensaje = $('#mensaje').val();

  console.log('Nombre:', nombre);
  console.log('Teléfono:', telefono);
  console.log('Correo:', correo);
  console.log('Motivo:', motivo);
  console.log('Mensaje:', mensaje);

  let missingFields = '';

  if (nombre === '') {
    missingFields += 'Nombre\n';
  }
  if (telefono === '') {
    missingFields += 'Teléfono\n';
  }
  if (correo === '') {
    missingFields += 'Correo\n';
  }
  if (motivo === 'Seleccionar motivo...') {
    missingFields += 'Motivo\n';
  }
  if (mensaje === '') {
    missingFields += 'Mensaje\n';
  }

  if (missingFields !== '') {
    alert('Por favor complete los siguientes campos:\n\n' + missingFields);
  } else {
    alert('Gracias por enviar la información!');
  }

  event.preventDefault();
});


$(document).ready(function () {
  $("#res-form").submit(function (event) {
    const nombre = $("#nombre-reserva").val();
    const correo = $("#correo-reserva").val();
    const telefono = $("#telefono-reserva").val();
    const fecha = $("#fecha-reserva").val();
    const hora = $("#hora-reserva").val();
    const asistentes = $("#asistentes-reserva").val();

    console.log("Nombre: ", nombre);
    console.log("Correo: ", correo);
    console.log("Teléfono: ", telefono);
    console.log("Fecha: ", fecha);
    console.log("Hora: ", hora);
    console.log("Asistentes: ", asistentes);

    let missingFields = "";

    if (nombre === "") {
      missingFields += "Nombre\n";
    }
    if (telefono === "") {
      missingFields += "Teléfono\n";
    }
    if (correo === "") {
      missingFields += "Correo\n";
    }
    if (fecha === "") {
      missingFields += "Fecha\n";
    }
    if (hora === "") {
      missingFields += "Hora\n";
    }
    if (asistentes === "") {
      missingFields += "Asistentes\n";
    }

    if (missingFields !== "") {
      alert("Por favor complete los siguientes campos:\n\n" + missingFields);
    } else {
      alert("Gracias por reservar!");
    }


    event.preventDefault();
  });
})
//document ready
$(document).ready(function () {
  $("img").dblclick(function () {
    var imgSrc = this.src;
    var titulo = $(this).parent().find('h5').text();
    var descripcion = $(this).parent().find('p').text();
    $("#title").text(titulo);
    $("#description").text(descripcion);
    $("#image").attr('src', imgSrc);
    $(".myModal").show('slow');
  });

  $("#modal_close").click(function () {
    $(".myModal").hide('slow');
  });
})

var sobreNosotrosLink = document.querySelector('a[href="#sobre-nosotros"]');
var carousel = document.getElementById('carouselExampleControls');

sobreNosotrosLink.addEventListener('click', function (event) {
  event.preventDefault();
  carousel.classList.remove('d-none');
});



