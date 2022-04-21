
import http from "./server";

class LoginService {

    login(data){    
        return http.post("/login", data);
    }
}

export default new LoginService();