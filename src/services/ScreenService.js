import React from "react";
class ScreenService{

    getAllMovies(){    
        return http.get("/movies");
    };
    createMovie(data){
        return http.post("/movies", data);
    }
    editMovie(mId){
        return http.put(`/movies/${mId}`);
    }
    deleteMovie(mId){
        return http.delete(`/movies/${mId}`);
    }

}
export default new ScreenService();