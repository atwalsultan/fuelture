import {Markup} from 'interweave';

const Article = ({article}) => {
    return (
        <li className="article-list-item">
            <div>
                <img width="300" height="auto" src={article.img} alt="" />
                <h4>
                    <a href={article.link} target="_blank">{`${article.title}`}</a>
                </h4>

                {/* <Markup content={article.content} /> */}
            </div>

            <footer>
                <p>By {article.author !== '' ? article.author : article.publisher}</p>
                <a href={article.link} target="_blank">Read Article</a>
            </footer>
        </li>
    )
}

export default Article
