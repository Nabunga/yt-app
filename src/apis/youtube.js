import axios from 'axios';

const KEY = 'AIzaSyDmV0LVxWFVak71Jus30dRkWiWLT6Hr8uY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
}) 