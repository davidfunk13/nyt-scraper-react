import axios from "axios";

export default {
    getPosts: function () {
        return axios.get('/api/posts')
    },
    saveArticle: function (title) {
        console.log(title)
        let Title = {
            title:title
        }
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
