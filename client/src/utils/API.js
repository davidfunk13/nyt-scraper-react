import axios from "axios";

export default {
    getPosts: function () {
        return axios.get('/api/saved')
    },
    deleteArticle: function (id) {
        console.log(id)
        return axios.post('/api/delete', id)
    },
    saveArticle: function (title) {
        // console.log(title)
        let Title = {
            title: title.title,
            url: title.url,
            snippet: title.snippet,
            source: title.source,
            pubDate: title.pubDate
        }
        // console.log(Title)
        return axios.post("/api/articles", Title);
    },
    scrapeArticles: function (query) {
        // console.log(query)
        let queryData = {
            query: query
        }
        return axios.post('/api/scraper', queryData)
    }
};
