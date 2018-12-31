import axios from 'axios';
const KEY = 'AIzaSyAyY1-hTSsOMmpNf_VvM4E0uXYFmMxn6vs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

