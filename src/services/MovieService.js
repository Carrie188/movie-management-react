import http from "./server";

class MovieService {

    getAllMovies(){    
        return http.get("/movies");
    };
    createMovie(newMovie){
        return http.post("/movies", newMovie);
    }
    editMovie(mId, movieData){
        return http.put(`/movies/${mId}`,movieData);
    }
    deleteMovie(mId){
        return http.delete(`/movies/${mId}`);
    }




}

export default new MovieService();