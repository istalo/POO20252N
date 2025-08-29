import { util } from "./util";
export class Personagem{

    nome: string
    classe: string
    raca: string
    nivel: number
    arma: string
    armaPoder: number
    manaAtual: number
    manaMaxima: number
    vidaAtual: number
    vidaMaxima: number
    poderAtaque: number 

    constructor(nome: string){
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.armaPoder = 0;
        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;
        this.poderAtaque = 0;
    }
    treinarPoderAtaque(): void {
        const incrementoDoTreino: number = util.gerarNumeroAleatorio(5, 15);
        this.poderAtaque += incrementoDoTreino + 3 + this.poderAtaque * 1.1;
    }

    //estaVivo(){
    //    if (this.vidaAtual > 0) {
    //        return true;
    //     }
    //    return false;
    //}

    estaVivo(){
       return (this.vidaAtual > 0);
    }


    equiparArma(novaArma: string, poderDaArma: number): void {
    this.arma = novaArma;
    this.poderAtaque += poderDaArma ;
    }
}