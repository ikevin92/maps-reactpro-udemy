/* eslint import/no-webpack-loader-syntax: off */
import { useContext, useLayoutEffect, useRef } from 'react';
//@ts-ignore
import { Map } from '!mapbox-gl';
import { MapContext, PlacesContext } from '../context';
import { Loading } from './';

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (!isLoading) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      setMap(map);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <div
      ref={mapDiv}
      style={{
        backgroundColor: 'red',
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
      }}>
      {userLocation?.join(',')}
    </div>
  );
};
