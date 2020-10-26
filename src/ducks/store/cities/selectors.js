import { createSelector } from 'reselect';

export const citiesSelector = createSelector(
  state => state.cities.items,
  cities => cities
);
