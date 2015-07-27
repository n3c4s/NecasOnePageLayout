$(document).on("ready", enviar);
  function enviar(){
    $("#contactoform").submit(function(event){
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'enviar.php',
        data: $(this).serialize(),
        success: function(data){
          $("#respuesta").slideDown();
          $("#respuesta").html(data);
        }
      });
      document.getElementById("contactoform").reset();
      alert("Gracias! estamos en contacto!");
      return false;
    });
  };
