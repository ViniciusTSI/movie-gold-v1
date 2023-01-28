import axios from 'axios';

export default axios.create({
    baseURL: 'https://5935-2804-59d4-1de-7900-b9ef-1b59-5a51-7109.sa.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});