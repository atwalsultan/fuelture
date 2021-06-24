import {Markup} from 'interweave';

const Article = ({article}) => {
    return (
        <li className="article-list-item">
            <img width="300" height="auto" src={article.img} alt="" />
            <a href={article.link}><h4>{article.title}</h4></a>
            {/* <Markup content={article.content} /> */}
            <p>Published on: {article.pubDate}</p>
        </li>
    )
}

export default Article
