import {useState, useEffect} from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    const fetchNews = async () => {
        const apiKey = 'b5fb0b650652426cba5cebef44f440f5'
        const apiCall = `https://newsapi.org/v2/everything?qInTitle="electric%20vehicle"&from=2021-05-1&language=en&sortBy=popularity&apiKey=${apiKey}`
        console.log("Fetching news...")
        let response = await fetch(apiCall)
        let data = await response.json()

        setArticles(data['articles']);
    
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div>
            <ul>
                {
                    articles.map((article, index) => <li key={index}>{article.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Articles