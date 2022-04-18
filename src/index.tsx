/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';
//@ts-ignore

import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoiaWtldmluOTIiLCJhIjoiY2tpaWQ3NzBlMDhoODJ3bnhjeDdnNDE1MiJ9.3bNHLj9E8XyrANMYSXzn8Q';

// validar si soporta la geolocalizacion
if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
);
