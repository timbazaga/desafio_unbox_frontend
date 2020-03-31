import api from "../../arquitetura/api";

const endpoint = "/filmes";
export default class FilmeService {


     listarFilmes() {
         return api.get(`${endpoint}`);
     }

     adicionarFilme(filme) {
         return api.post(`${endpoint}`, filme);
     }

    static excluir(id) {
        return api.delete(`${endpoint}/${id}`);
    }

    static recuperar(id) {
        return api.get(`${endpoint}/${id}`);
    }

    static atualizar(filme) {
        return api.put(`${endpoint}/${filme.id}`, filme);
    }
}
