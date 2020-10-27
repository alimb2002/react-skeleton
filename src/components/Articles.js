import React, { useState, useEffect } from 'react';
import SkeletonArticle from './skeletons/SkeletonArticle';


const Articles = () => {
    const [articles , setArticles] = useState(null);
    useEffect( () => 
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then( res => res.json() )
    .then( res=> setArticles(res))
    .catch(err => console.log(err))
    )
    return (
        <div className="articles">
            <h2>Articles</h2>
            { articles ? 
            ( articles.map( article => (
            <div className="article" key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </div>
            ) ) ) :
             ([1,2,3,4,5].map(n => <SkeletonArticle key={n} /> )) }
        </div>
    )
}

export default Articles
