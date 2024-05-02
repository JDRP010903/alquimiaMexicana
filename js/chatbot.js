function toggleChatbot() {
    var chatbot = document.querySelector('.chatbot');
    var icon = document.querySelector('.chatbot-icon');
    if (chatbot.style.display === 'none') {
        chatbot.style.display = 'flex';
        icon.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        icon.style.display = 'flex';
    }
}

function sendMessage(event) {
    if (event.type === 'keypress' && event.keyCode !== 13) return;

    var input = document.getElementById('chatbotInput');
    var message = input.value.trim();
    if (message === "") return;

    var messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.innerHTML += `<div>Tú: ${message}</div>`;

    // Simula una respuesta después de un breve retraso
    setTimeout(() => {
        messagesContainer.innerHTML += `<div>Chatbot: ¿Cómo puedo ayudarte hoy?</div>`;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);

    input.value = ""; // Limpia el input
}
