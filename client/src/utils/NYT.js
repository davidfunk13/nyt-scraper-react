import request from 'request'

export default {
    scrapeArticles: function () {
        let articlesArray =[]
        return request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "a039a30e45144355ba84c17a25a0796c",
                'q': this.state.title
            },
        }).then(body=>{
            console.log(body)
            body = JSON.parse(body);
            // console.log(body);
            let articles = body.response.docs
            articles.map(index => {
                articlesArray.push(index)
            })
        })
    } 
        
};
