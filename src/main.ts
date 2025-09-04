import { Personagem } from "./personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

const p = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "Desarmado";
p.armaPoder = 1;
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

while(true) {

console.log("+--------------MENU--------------+");
console.log("| 1. Treinar Poder de Ataque     |");
console.log("| 2. Ver Status                  |");
console.log("| 3. Checar Vida                 |");
console.log("| 4. Equipar Arma                |");
console.log("| 5. Lançar Feitiço              |");
console.log("| 6. Atacar                      |");
console.log("| 7. Apanhar                     |");
console.log("| 8. Recuperar Mana              |");
console.log("| 9. Sair                        |");
console.log("+--------------------------------+");

const escolha: number = +teclado("Escolha uma opção: ");

if(escolha === 9){
    break;
}
switch(escolha){
    case 1:
        treinarPoderAtaque(p);
        break;
    case 2:
        console.table(p);
        break;
    case 3:
        console.log(p.estaVivo()? "Personagem vivo" : "Foi pro Vasco");
        break;
    case 4:
        equiparArma(p);
        break;
    case 5:
        console.log("Lançar Feitiço - Em construção");
        break;
    case 6:
        atacar(p);
        break;
    case 7:
        apanhar(p);
        break;
    case 8:
        recuperarMana(p);
        break;
    default:
        console.log("Opção inválida!");
        break;
}
}

function treinarPoderAtaque(person: Personagem): void{
    person.treinarPoderAtaque();
}

console.table(p);

function equiparArma(p: Personagem): void {
    const novaArma = teclado("Qual arma deseja equipar? ");
    const poderDaArma = +teclado("Qual o poder da arma? ");
    p.equiparArma(novaArma, poderDaArma);
    console.log(`Arma equipada: ${novaArma} com poder: ${poderDaArma}`);
}

function recuperarMana(p: Personagem): void {
    const recuperacao: number = Math.floor(5 + Math.random() * 15);
    p.manaAtual += recuperacao;
    if (p.manaAtual > p.manaMaxima) {
        p.manaAtual = p.manaMaxima;
    }
    console.log(`${p.nome} recuperou ${recuperacao} de mana! Mana atual: ${p.manaAtual}`);
}

function atacar(p: Personagem): void {
    const ataque: number = p.poderAtaque;
    console.log(`${p.nome} ataca com ${p.arma} causando ${ataque} de dano!`);
}

function apanhar(p: Personagem): void {
    const dano: number = Math.floor(10 + Math.random() * 10);
    p.vidaAtual -= dano;
    console.log(`${p.nome} sofreu ${dano} de dano! Vida atual: ${p.vidaAtual}`);
    if (!p.estaVivo()) {
        console.log(`${p.nome} foi derrotado!`);
    }

    if (p.vidaAtual <= 0) {
        console.log(`${p.nome} não pode apanhar porque já está derrotado!`);
        return;
    }
}