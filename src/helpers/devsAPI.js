const axios = require('axios');
const url = "https://developers-api.glitch.me/api"

export const getDevs = async () => {
    const response = await axios.get(`${url}`);
    return response;
}
