// Script para o comportamento do FAQ
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todas as perguntas do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Adicionar evento de clique para cada pergunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Selecionar a resposta associada (próximo elemento irmão)
            const answer = this.nextElementSibling;
            
            // Alternar visibilidade da resposta
            if (answer.style.display === 'none' || !answer.style.display) {
                answer.style.display = 'block';
                this.classList.add('active');
            } else {
                answer.style.display = 'none';
                this.classList.remove('active');
            }
        });
    });
});