import { fakerPT_BR as faker } from '@faker-js/faker';
export class util {

    static gerarNumeroAleatorio(minimo: number, maximo: number): number {
    return minimo + Math.round(Math.random() * (maximo - minimo));
    }

    static gerarInimigoAleatorio(): string {
        const inimigos = ["Goblin", "Orc", "Troll", "Dragão", "Esqueleto"];
        const randomIndex = Math.floor(Math.random() * inimigos.length);
        return inimigos[randomIndex]!;
    }

    static gerarNome(): string {
        const randomName = faker.person.firstName() ?? "NomeGenérico";
        return randomName;
    }
}