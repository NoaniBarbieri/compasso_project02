const axios = require('axios');
const url = "https://developers-api.glitch.me/api"

export const getDevs = () => {
    axios.get('url').then(
        (res) => {
            console.log(res);
        }
    );
}
