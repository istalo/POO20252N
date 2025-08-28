import { fakerPT_BR as faker } from '@faker-js/faker';
export class util {

    static gerarNumeroAleatorio(minimo: number, maximo: number): number {
    return minimo + Math.round(Math.random() * (maximo - minimo));
    }

    static gerarNome(): string{

        const randomName = faker.person.firstName();
        return randomName;
    }

static gerarEmail(nomedoUsuario: string){
    return faker.internet.email({firstName: nomedoUsuario});

    }

}
    for (let index = 0; index < 10; index++) {
        const nome = util.gerarNome();
        const email = util.gerarEmail(nome);
}