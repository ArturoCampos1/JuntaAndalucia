
function estudiar(){
    window.location.href = 'grados.html'
}

function inicio(){
    window.location.href = 'index.html'
}

document.getElementById('matriculaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const grado = document.getElementById('grado').value;
    const tipo = document.getElementById('tipo').value;

    console.log(`Nombre: ${nombre}, Email: ${email}, Grado: ${grado}, Tipo: ${tipo}`);

    alert('Formulario enviado con éxito!');
});
