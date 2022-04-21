import useMovieSearch from 'hooks/useMovieSearch';
import React from 'react'
import { useState, useRef, useCallback } from 'react';

const MoviesOverView = () => {

    const [pageNum, setPageNum] = useState(1);
    const observer = useRef() 
    const imgURL= "https://image.tmdb.org/t/p/w300";
    // useRef() only returns one item. It returns an Object called current.
    // In React, we can add a ref attribute to an element to access it directly in the DOM.
    const {
        loading,
        error,
        hasMore,
        movies
    } = useMovieSearch(pageNum)

    const lastMovieElementRef = useCallback((node)=>{
        console.log(node) // node is the last element of the request
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                // make another request when the last element is visible
                console.log("the last element is visible now")
                console.log("current page: "+pageNum)
                // for debug: set a timeout to see the loading text
                setTimeout(()=>{
                    setPageNum(prevNum=>prevNum+1)
                },2000)
                

            }
        })
        if(node) observer.current.observe(node)

        
    },[loading, hasMore])
    
   

  return (
      <>
        <h1>Recently Popular Movies</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.map((item, index)=>{

                if(movies.length == index+1){
                    return (
                        <div className="col" ref={lastMovieElementRef} key={item.id}>
                        <div className="card h-100">
                            <img src={imgURL+item.backdrop_path} className="card-img-top" alt={imgURL+item.backdrop_path}/>
                            <div className='tag-score'>{item.vote_average}</div>
                            <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.overview}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Release: {item.release_date}</small>
                            </div>
                        </div>
                    </div>
                    )
                }else{
                    return (
                        <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={imgURL+item.backdrop_path} className="card-img-top" alt={imgURL+item.backdrop_path}/>
                            <div className='tag-score'>{item.vote_average}</div>
                            <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.overview}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Release: {item.release_date}</small>
                            </div>
                        </div>
                    </div>
                    )
                }
                
            })}
            
        </div>
        <p>{loading && "Loading..."}</p>
        <div>{error && "Error..."}</div>
    </>
  )
}

export default MoviesOverView