const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // Fetch articles
    const fetchArticles = async () => {
        const Parser = require('rss-parser')
        const parser = new Parser()

        let items = []
        let autoEvolutionImages = []; // For autoevolution image urls


        // Fetch
        const autoblogRaw = await parser.parseURL('https://www.autoblog.com/category/green-auto-news/rss.xml')
        const autoevolutionRaw = await parser.parseURL('https://www.autoevolution.com/rss/backend-green.xml')
        const insideevsRaw = await parser.parseURL('https://insideevs.com/rss/articles/all/')

        // For autoevolution image urls
        const fetch = require('node-fetch');
        let response = await fetch('https://www.autoevolution.com/rss/backend-green.xml');
        let textString = await response.text();
        let parseString = require('xml2js').parseString;
        parseString(textString, function (err, result) {
            let articles = (result.rss.channel[0].item);
            articles.forEach((article, index) => {
                autoEvolutionImages.push(article["media:content"][0]["$"]["url"]);
            });
        });

        // Autoblog
        autoblogRaw.items.forEach(item => {
            let imgURL = item.content.split('<img src="').pop().split('"')[0];

            let obj = {
                title: item.title,
                img: imgURL,
                content: item.contentSnippet,
                pubDate: `${item.pubDate.split("2021")[0]}2021`,
                link: item.link,
                publisher: `Autoblog`,
                author: item["dc:creator"]
            }

            items.push(obj);
        })

        // Autoevolution
        autoevolutionRaw.items.forEach((item, index) => {

            let obj = {
                title: item.title,
                img: autoEvolutionImages[index],
                content: item.contentSnippet,
                pubDate: `${item.pubDate.split("2021")[0]}2021`,
                link: item.link,
                publisher: `Autoevolution`,
                author: item["dc:creator"].toString().split('(').pop().split(')')[0]
            }

            items.push(obj);
        })

        // InsideEVs
        insideevsRaw.items.forEach(item => {
            let imgURL = item["enclosure"]["url"].split('<img src="').pop().split('"')[0];

            let obj = {
                title: item.title,
                img: imgURL,
                content: item.contentSnippet,
                pubDate: `${item.pubDate.split("2021")[0]}2021`,
                link: item.link,
                publisher: `InsideEVs`,
                author: ``
            }

            items.push(obj);
        })

        res.status(200).send(items)
    }

    fetchArticles();
})

module.exports = router