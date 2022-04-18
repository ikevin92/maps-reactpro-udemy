import { useEffect, useReducer } from 'react';
import { searchApi } from '../../apis';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';
//helpers
import { getUserLocation } from '../../helpers';
//interfaces
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface PlacesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    // se obtiene geolocalizacion y se carga al reducer
    getUserLocation().then((lngLat) =>
      dispatch({ type: 'setUserLocation', payload: lngLat }),
    );
  }, []);

  const searchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    //limpia listado
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });
      return [];
    }

    if (!state.userLocation) throw new Error('No hay ubicacion');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        //methods
        searchPlacesByTerm,
      }}>
      {children}
    </PlacesContext.Provider>
  );
};
