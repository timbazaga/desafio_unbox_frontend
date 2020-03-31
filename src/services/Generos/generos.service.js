import api from "../../arquitetura/api";

export default class GeneroService {
     static listarGeneros() {
         return api.get('/generos');
     }

     static adicionarGenero(genero) {
         return api.post('/generos', genero);
     }

     static atualizarGenero(genero) {
         return api.put(`/generos/${genero.id}`, genero);
     }

    static excluir(id) {
         return api.delete(`/generos/${id}`);
    }

    static recuperar(id) {
         return api.get(`/generos/${id}`);
    }
}
