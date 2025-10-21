alert("Bem vindo ao jogo do número secreto !");
let numeroSecreto = 29;
let chute
let tentativa = 1

//condicional
while (numeroSecreto != chute) 
{
chute = prompt("Digite um número entre 0 e 30");
    if (numeroSecreto == chute) {
        alert(`Você acertou !! Você descobriu o número secreto. O Número secreto é ${numeroSecreto}. Número de tentativas: ${tentativa}`);
    } else {
        if (numeroSecreto > chute) {
            alert(`Você chegou perto, o número secreto é maior que o ${chute}`);
        } else {
            alert(`Você chegou perto, o número secreto é menor que o ${chute}`);
        }
        tentativa++
    }
}

let tentativaPalavra = tentativa > 1 ? 'tentativas' : 'tentativa'