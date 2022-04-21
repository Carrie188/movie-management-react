
import http from "./server";
class SignupService {
    register(data){
        return http.post("/register", data);
    }
}
export default new SignupService();
