import {useState, useEffect} from 'react';
import {Markup} from 'interweave'

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
        <div>
            <p>Articles Component</p>
            <ul>
                {
                    articles.map((article, index) => {
                        return (
                            <li key={index}>
                                <img width="300" height="auto" src={article.img} alt="" />
                                <a href={article.link}><h4>{article.title}</h4></a>
                                <Markup content={article.content} />
                                <p>Published on: {article.pubDate}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Articles