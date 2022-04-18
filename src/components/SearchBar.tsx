import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      console.log(event.target.value);
      //TODO: ejecutar la busqueda
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Buscar lugar...'
        className='form-control'
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
