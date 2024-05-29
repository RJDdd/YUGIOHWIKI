// Simula el contenido de tus archivos Markdown como una cadena de texto
const contenidoMarkdown = `
# Título 1
Contenido del primer archivo...

# Título 2
Contenido del segundo archivo...
`;

// Función para dividir el contenido en párrafos (simplemente para ilustrar)
function dividirEnParrafos(texto) {
    return texto.split('\n\n');
}

// Función de búsqueda simple
function buscar(textoBusqueda) {
    // Divide el contenido en párrafos para facilitar la búsqueda
    const parrafos = dividirEnParrafos(contenidoMarkdown);

    // Filtra los parrafos basándose en el término de búsqueda
    return parrafos.filter(parrafos => parrafos.toLowerCase().includes(textoBusqueda.toLowerCase()));
}

// Evento de envío del formulario de búsqueda
document.getElementById('formBusqueda').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtiene el término de búsqueda del campo de entrada
    const terminoBusqueda = document.getElementById('buscador').value;
    
    // Realiza la búsqueda
    const resultados = buscar(terminoBusqueda);
    
    // Muestra los resultados
    document.getElementById('resultadosBusqueda').innerHTML = resultados.join('<br>');
});
