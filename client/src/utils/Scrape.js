import axios from "axios";
const apiKey = 'a039a30e45144355ba84c17a25a0796c'

export default {
    scrapePosts: (query) =>{
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': apiKey,
                'q': query,
            }
        })
    }
}

