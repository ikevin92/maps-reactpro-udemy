import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    languaje: 'es',
    access_token:
      'pk.eyJ1IjoiaWtldmluOTIiLCJhIjoiY2tpaWQ3NzBlMDhoODJ3bnhjeDdnNDE1MiJ9.3bNHLj9E8XyrANMYSXzn8Q',
  },
});

export default searchApi;
