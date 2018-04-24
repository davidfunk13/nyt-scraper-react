import axios from "axios";

export default {
    getPosts: function () {
        return axios.get('/api/posts')
    },
    savePost: function (postData) {
        return axios.post("/api/posts", postData);
    },
    scrapeArticles: function (query) {
        // console.log(query)
        let queryData = {
            query: query
        }
        console.log(queryData)
        return axios.post('/api/scraper', queryData)
    }
};
