const axios = require('axios');

export const getDevs = () => {
    axios.get('https://developers-api.glitch.me/api').then(
        (res) => {
            console.log(res);
        }
    );
}