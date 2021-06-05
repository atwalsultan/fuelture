const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    const fetchArticles = async () => {
        const Parser = require('rss-parser')
        const parser = new Parser()
        let items = []

        const autoblogRaw = await parser.parseURL('https://www.autoblog.com/category/green-auto-news/rss.xml')
        const autoevolutionRaw = await parser.parseURL('https://www.autoevolution.com/rss/backend-green.xml')
        const insideevsRaw = await parser.parseURL('https://insideevs.com/rss/articles/all/')

        autoblogRaw.items.forEach(item => {
            let imgURL = item.content.split('<img src="').pop().split('"')[0];

            let obj = {
                title: item.title,
                img: imgURL,
                content: item.contentSnippet,
                pubDate: item.pubDate,
                link: item.link,

            }

            items.push(obj)
        })

        autoevolutionRaw.items.forEach(item => {
            let imgURL = item["content:encoded"].split('<img src="').pop().split('"')[0];
                        
            let obj = {
                title: item.title,
                img: imgURL,
                content: item.contentSnippet,
                pubDate: item.pubDate,
                link: item.link,

            }

            items.push(obj)
        })

        insideevsRaw.items.forEach(item => {
            let imgURL = item["enclosure"]["url"].split('<img src="').pop().split('"')[0];

            let obj = {
                title: item.title,
                img: imgURL,
                content: item.contentSnippet,
                pubDate: item.pubDate,
                link: item.link,

            }

            items.push(obj)
        })

        res.status(200).send(items)
    }

    fetchArticles();
})

module.exports = router