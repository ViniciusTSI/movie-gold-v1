import axios from 'axios';

export default axios.create({
    baseURL: 'https://9c96-103-109-239104.ap.ngrok.io',
    headers: {"ngrok-skip-brower-warning": true}
});