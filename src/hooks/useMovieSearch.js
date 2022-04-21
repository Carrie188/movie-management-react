import {useEffect, useState} from 'react'
import axios from 'axios'


const useMovieSearch = (pageNum) => {

    const [loading, setLoading] = useState(true)
    const [error, setErorr] = useState(false)
    const [hasMore, setHasMore] = useState(false)

    const [movies, setMovies] = useState([]);


    const API_KEY="75f92bed9b3471d86a26b4a78913bfd8"
    const URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US'


    // use axios
    useEffect(()=>{
        setLoading(true)
        setErorr(false)

        axios({
            method: 'GET',
            url: URL,
            params: {api_key: API_KEY, page: pageNum}
        }).then((response)=>{

            setMovies((preMovies)=>{
                return [...preMovies, ...response.data.results]
            })

            setHasMore(response.data.results.length > 0)
            setLoading(false)
            console.log(response.data)
        }).catch((e)=>{
            setErorr(true)
        })
    },[pageNum])



  return {loading, error, hasMore, movies}
}

export default useMovieSearch