function procesarPago() {
    var form = document.getElementById('paymentForm');
    var inputs = form.querySelectorAll('input');
    var allFilled = true;

    inputs.forEach(function(input) {
        if (!input.value) {
            allFilled = false;
            input.style.borderColor = 'red'; // Opcional: marca los campos vacíos en rojo
        } else {
            input.style.borderColor = ''; // Restablece el borde si está lleno
        }
    });

    if (allFilled) {
        var loading = document.getElementById('loading');
        var paymentSuccess = document.getElementById('paymentSuccess');

        // Mostrar carga
        loading.style.display = 'block';
        form.style.display = 'none'; // Opcional: ocultar formulario durante la carga

        // Simula un proceso de pago
        setTimeout(function() {
            loading.style.display = 'none';
            paymentSuccess.style.display = 'block';

            // Redirigir después de 3 segundos
            setTimeout(function() {
                window.location.href = '../index.html';
            }, 3000);
        }, 2000); // Simula un tiempo de procesamiento de 2 segundos
    } else {
        alert('Por favor, llena todos los campos.');
    }
}
