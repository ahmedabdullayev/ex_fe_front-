import http from "./http-common";

class DataService {
    getAllCategories(): Promise<any> {
        return http.get("/categories");
    }

}

export default new DataService();