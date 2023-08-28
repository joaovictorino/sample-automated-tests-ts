    import { Repositorio } from "../../model/contract/repositorio";
    import { Conta } from "../../model/conta";

    export class MemoriaContaRepositorio implements Repositorio<Conta, string> {
        private _dicionario: Map<string, Conta>;

        public constructor(){
            this._dicionario = new Map<string, Conta>();
        }

        public buscar(campo: string): Conta | undefined {
            return this._dicionario.get(campo);
        }

        public adicionar(entidade: Conta): void {
            this._dicionario.set(entidade.numero, entidade);
        }
    }