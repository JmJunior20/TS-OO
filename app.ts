import prompt from "prompt-sync";
import { Diarista } from "./src/diarista/diarista.js";
import { DiaristaRepository } from "./src/diarista/diarista.repository.js";

let teclado = prompt();
let option;
let repository = new DiaristaRepository;
do {
    console.log('1 - Listar Diaristas');
    console.log('2 - Exibir Diarista');
    console.log('3 - Cadastrar Diarista');
    console.log('4 - Excluir Diarista');
    console.log('q - Sair');
    option = teclado('Escolha uma opção acima: ');

    switch (option) {
        case '1':            
            break;
        case '2':
            break;
        case '3':
            let nome = teclado('Digite o nome do(a) diarista: ')
            let telefone = teclado('Digite o telefone do(a) diarista: ')
            let endereco = teclado('Digite o endereço do(a) diarista: ')
            let diarista = new Diarista(nome, telefone, endereco);
            repository.cadastrar(diarista);
            break;
        case '4':
            break;
        default:
            break;
    }
} while (option != 'q');
