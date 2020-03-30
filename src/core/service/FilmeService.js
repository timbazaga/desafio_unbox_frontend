import * as axios from "axios";

const api = axios.create({baseURL: 'http://localhost:8080'});

class FilmeService {
    listar() {
        const response = api.get('/filmes');
        console.log(response);
        return response.data;
    }
}

export default FilmeService;
