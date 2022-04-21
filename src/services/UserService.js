import http from "./server";

class UserService{
    getAllUsers(){
        return http.get("/users");
    }
    getUserById(uId){
        return http.get(`/users/${uId}`);
    }
    createUser(newUser){
        return http.post("/users",newUser);
    }
    updateUser(uId, userData){
        return http.put(`/users/${uId}`,userData);
    }
    deleteUser(uId){
        return http.delete(`/users/${uId}`);
    }
}
export default new UserService();
