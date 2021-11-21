const socket = io();

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('#message');
    const text = input.value;
    socket.emit('message', text);
    input.value = '';
});

socket.on('message', function (text) {
    if (!text) {
        return;
    }
    const container = document.querySelector('section');
    const newMessage = document.createElement('p');
    newMessage.innerText = text;
    container.appendChild(newMessage);

    const seperator = document.createElement('br');
    container.appendChild(seperator);

    container.scrollTop = container.scrollHeight;
});