import React from 'react';

class TheMovieDBService{
   
    // use fetch
    getPopularMovies(){
        const URL = "https://api.themoviedb.org/3/movie/popular?api_key=75f92bed9b3471d86a26b4a78913bfd8&language=en-US&page=1"
        // let result =[];
        fetch(URL)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            return data.results;

        }).catch((err)=>{
            console.log("error: "+err);
        })
        // console.log(result);
        
    }


     // const [languages, setLanguages] = useState(["English","Chinese","Thai","Japanese","Korean","Spanish"]);
    // use fecth to get data from api
    // useEffect(()=>{
    //     const API_KEY="75f92bed9b3471d86a26b4a78913bfd8"
    //     const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`

    //     fetch(URL)
    //     .then((response)=>{
    //         return response.json();
    //     }).then((data)=>{
    //         console.log(data)
    //         let movies = data.results
    //         console.log(data.results)
    //         setPopularMovies(data.results);
    //         console.log("popularMovies"+movies)
    //     }).catch((err)=>{
    //         console.error("error: "+err);
    //     })
    //     // haven't figure out below
    //     // setPopularMovies(TheMovieDBService.getPopularMovies())
    //     if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
    //         // Do load more content here!

    //     }
    // },[]);

}
export default new TheMovieDBService();