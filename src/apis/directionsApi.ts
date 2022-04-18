import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoiaWtldmluOTIiLCJhIjoiY2tpaWQ3NzBlMDhoODJ3bnhjeDdnNDE1MiJ9.3bNHLj9E8XyrANMYSXzn8Q',
  },
});

export default directionsApi;
