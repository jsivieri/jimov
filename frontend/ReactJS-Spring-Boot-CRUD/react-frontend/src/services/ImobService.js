import axios from 'axios';

const IMOVEL_API_BASE_URL = "http://localhost:8080/imoveis";

class ImobService {

    getImoveis(){
        return axios.get(IMOVEL_API_BASE_URL);
    }

    createImovel(imovel){
        return axios.post(IMOVEL_API_BASE_URL, imovel);
    }

    getImovelById(imovelId){
        return axios.get(IMOVEL_API_BASE_URL + '/' + imovelId);
    }

    updateImovel(imovel, imovelId){
        return axios.put(IMOVEL_API_BASE_URL + '/' + imovelId, imovel);
    }

    deleteImovel(imovelId){
        return axios.delete(IMOVEL_API_BASE_URL + '/' + imovelId);
    }
}

export default new ImobService()