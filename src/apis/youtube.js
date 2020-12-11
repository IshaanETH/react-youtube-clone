import axios from 'axios';

const KEY = 'AIzaSyAyrm7VEYtKM_GuC_J_BGOAxGd_NUT-_Jk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
