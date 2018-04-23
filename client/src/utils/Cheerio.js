import cheerio from 'cheerio';
import axios from 'axios';
export default {
    cheerioScrape: function () {
        return axios.get('http://nytimes.com/section/technology').then(function (response) {
            const $ = cheerio.load(response.data)
            $('headline').each(function (i, element) {
                console.log(element[i])
                let result = {}
                console.log(result)
                result.title = $(this)
                    .children("a")
                    .text();        
            })
        });
    }
};
