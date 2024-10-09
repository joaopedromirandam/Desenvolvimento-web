// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const formData = new FormData(event.target); // Captura os dados do formulário
    const formObject = Object.fromEntries(formData.entries()); // Transforma em um objeto

    // Faz a requisição para o servidor Node.js
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o formulário');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('formResponse').textContent = 'Formulário enviado com sucesso!';
    })
    .catch(error => {
        document.getElementById('formResponse').textContent = 'Erro ao enviar o formulário: ' + error.message;
    });
});
