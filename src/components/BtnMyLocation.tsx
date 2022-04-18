import { useContext } from 'react';
import { MapContext } from '../context';
import { PlacesContext } from '../context/places/PlacesContext';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Map is not ready');
    if (!userLocation) throw new Error('User location is not defined');

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: 999,
      }}
      onClick={onClick}
      className='btn btn-primary'>
      Mi Ubicacion
    </button>
  );
};
