import http from './http-service';

class ApiService {
    getAll(){
        return http.get('/historycommits');
    }

}

export default new ApiService();