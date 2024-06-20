document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar ferramentas (exemplo)
    function carregarFerramentas() {
        fetch('/api/ferramentas')
            .then(response => response.json())
            .then(data => {
                const listaFerramentas = document.getElementById('ferramentas-lista');
                listaFerramentas.innerHTML = '';
                data.forEach(ferramenta => {
                    const li = document.createElement('li');
                    li.textContent = `${ferramenta.id} - ${ferramenta.nome}: ${ferramenta.descricao}`;
                    listaFerramentas.appendChild(li);
                });
            });
    }

    // Função para adicionar uma nova ferramenta
    document.getElementById('form-ferramenta').addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;

        fetch('/api/ferramentas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, descricao })
        })
        .then(response => response.json())
        .then(data => {
            alert('Ferramenta adicionada com sucesso!');
            carregarFerramentas();
        });
    });

    // Função para registrar devolução (exemplo)
    document.getElementById('form-devolucao').addEventListener('submit', (event) => {
        event.preventDefault();
        const ferramentaId = document.getElementById('ferramenta-id').value;
        const dataDevolucao = document.getElementById('data-devolucao').value;

        fetch('/api/devolucoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ferramentaId, dataDevolucao })
        })
        .then(response => response.json())
        .then(data => {
            alert('Devolução registrada com sucesso!');
        });
    });

    // Carregar ferramentas ao carregar a página
    carregarFerramentas();
});
