const output = document.getElementById('output');
const input = document.getElementById('input');

const correctUsername = 'Gariuhor';
const correctPassword = 'pitochuecodecaballo';

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value;
        processCommand(command);
        input.value = '';
    }
});

function processCommand(command) {
    const [username, password] = command.split(' ');

    if (username === correctUsername && password === correctPassword) {
        output.innerHTML += `Acceso concedido. Redirigiendo...\n`;
        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
        }, 1000);
    } else {
        output.innerHTML += `Acceso denegado. Inténtalo de nuevo.\n`;
    }
    output.scrollTop = output.scrollHeight; // Desplazar hacia abajo
}
