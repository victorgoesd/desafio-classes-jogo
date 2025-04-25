export default class Hero {
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    golpe(){
        var golpe = '';

        switch(this.tipo){
            case 'Mago':
            golpe = 'Magia';
            break;
                case 'Guerreiro':
                golpe = 'Espada';
                break;
                    case 'Monge':
                    golpe = 'Artes Marciais';
                    break;
                        case 'Ninja':
                        golpe = 'Shuriken';
                        break;
        }

        return golpe;
    }

    attack(){
        console.log(`o ${this.tipo} atacou usando ${this.golpe()}`)
    }
}