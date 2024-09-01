const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações iniciais
const player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: 'blue'
};

// Função de atualização do jogo
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height); // Desenha o jogador
}

// Função de animação
function animate() {
    update();
    requestAnimationFrame(animate); // Solicita o próximo quadro
}

// Inicia a animação
animate();
