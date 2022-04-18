import { createContext } from 'react';
import { Feature } from '../../interfaces/places';

export interface PlacesContextProps {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: Feature[];
  userLocation?: [number, number];

  //methods
  searchPlacesByTerm: (term: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext({} as PlacesContextProps);
