import {useState, useEffect} from 'react';
import Article from './Article';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        const response = await fetch('/rss/news')
        const fetchedArticles = await response.json()

        setArticles(fetchedArticles)
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <div className="page-content">
            <ul id="articles">
                {
                    articles.map((article, index) => {
                        return (
                            <Article key={index} article={article}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Articles