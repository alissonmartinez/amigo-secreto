function agregarAmigo() {
    const nombre = document.getElementById('amigo').value;
    if (nombre) {
        const listaAmigos = document.getElementById('listaAmigos');
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombre;
        listaAmigos.appendChild(nuevoAmigo);
        document.getElementById('amigo').value = ''; // Limpiar el input
    }
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;
    const amigos = Array.from(listaAmigos).map(amigo => amigo.textContent);

    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para el sorteo.');
        return;
    }

    // Algoritmo de Fisher-Yates para mezclar
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Asignar amigos secretos
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        const amigoSecreto = amigos[(i + 1) % amigos.length];
        const asignacion = document.createElement('li');
        asignacion.textContent = `${amigos[i]} le regala a ${amigoSecreto}`;
        resultado.appendChild(asignacion);
    }
}