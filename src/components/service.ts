import http from "./http-common";

class DataService {
    getAll(): Promise<any> {
        return http.get("/");
    }

}

export default new DataService();