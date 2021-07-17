import { useState, useEffect } from "react";
import Article from "./Article";

const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		// Initially when the component renders the unmounted variable set to false.
		let unmounted = false;
		const getArticles = async () => {
			
			//  Fetch and set the state only when the component is mounted
			if (!unmounted) {
				const response = await fetch("/rss/news");
				const fetchedArticles = await response.json();
				setArticles(fetchedArticles);
			}
		};
		getArticles();
		
		// After this component gets unmounted unsubscribe any background calls.
		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<div className="page-content">
			<ul id="articles">
				{articles.map((article, index) => {
					return <Article key={index} index={index} article={article} />;
				})}
			</ul>
		</div>
	);
};

export default Articles;
