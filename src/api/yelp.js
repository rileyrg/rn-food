import axios from 'axios';
import {secrets as yelpSecrets} from './secrets/yelpSecrets';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization: 'Bearer ' + yelpSecrets.APIKey,
    }
});
