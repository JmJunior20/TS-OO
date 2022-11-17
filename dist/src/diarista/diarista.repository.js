export class DiaristaRepository {
    constructor() {
        this.diaristas = [];
        this.id = 1;
    }
    listar() {
        return this.diaristas;
    }
    exibir(id) {
        //
    }
    cadastrar(model) {
        model.id = this.id++;
        this.diaristas.push(model);
        console.log('Diarista cadastrado com sucesso!');
    }
    excluir(id) {
        //
    }
}
