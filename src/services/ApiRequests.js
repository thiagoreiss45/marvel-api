import axios from 'axios';

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8486e6d9ece10bffaff1a97630609ba0&hash=a97e1219c4606debc2478d13b048aea8';
const apiKey = '8486e6d9ece10bffaff1a97630609ba0';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}