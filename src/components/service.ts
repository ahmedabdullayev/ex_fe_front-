import http from "./http-common";

class DataService {
    getAllCategories(): Promise<any> {
        return http.get("/categories");
    }
    getPostsByCategory(category : string): Promise<any>{
        return http.get("/postsbycategory/"+ category)
    }
}

export default new DataService();