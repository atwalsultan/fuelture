const Article = ({article, index}) => {
    return (
        <li className="article-list-item">
            <div>
                <img width="300" height="auto" src={article.img} alt="" />
                <h4>
                    <a href={article.link} target="_blank" rel="noreferrer">{index === 0 ? `${article.title}` : `${article.title.toString().substring(0, 60)}..`}</a>
                </h4>
            </div>

            <footer>
                <p>By {article.publisher}</p>
                <a href={article.link} target="_blank" rel="noreferrer">Read Article</a>
            </footer>
        </li>
    )
}

export default Article
