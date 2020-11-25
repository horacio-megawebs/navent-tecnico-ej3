/**
 * 
 */

// Wait for the DOM to be ready
$(document).ready( function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='formEj']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nombre: {
		    required: true,
		    maxlength: 100
	   },
      monto: {
        required: true,
        digits: true
    
    },
      descuento: {
        digits: true
      },
    },
    // Specify validation error messages
    messages: {
      nombre: {
			required : "por favor ingresa tu nombre",
			maxlength : "el nombre debe tener como maximo 100 caracteres"
  		},
      monto: {
        required: "Por favor ingresa el monto",
        digits: "Debe ser numerico"
      },
      descuento: {
        digits: "Debe ser numerico"
      }
    },
      submitHandler: function(form) {
        alert("hola");
          var post_url = form.action; 
          var request_method = form.method; 
          
          $.ajax({
            url : post_url,
            type: request_method
          }).done(function(response){ //
            $("#resultado").html(response);
          });      }
  });
});
