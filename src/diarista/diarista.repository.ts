import { Diarista } from "./diarista";
import { IRepository } from "./IRepository";

export class DiaristaRepository implements IRepository<Diarista, number> {
    diaristas: Diarista[] = [];
    id = 1;

    listar(): Diarista[] {
        return this.diaristas;
    }

    exibir(id: number): Diarista {
        //
    }

    cadastrar(model: Diarista): void {
        model.id = this.id++;
        this.diaristas.push(model);
        console.log('Diarista cadastrado com sucesso!')
    }

    excluir(id: number): void {
        //
    }
}