import React, { useCallback, useEffect } from 'react';

import { citiesActions, citiesSelectors } from '@ducks/store/cities';
import { connect } from '@ducks/storeHelpers';

const HomePageView = ({ cities, setCities }) => {
  const memoizeSetCities = useCallback((cities1) => setCities(cities1), []);
  useEffect(() => {
    const getCities = async () => {
      try {
        const request = await fetch('http://localhost:3011/api/cities', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const response = await request.json();
        const { resultData } = response;
        memoizeSetCities(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getCities();
  }, [memoizeSetCities]);

  return (
    <div>
      {cities.map(city => <h4 key={city.id}>{city.name}</h4>)}
    </div>
  );
}

const mapStateToProps = state => ({
  cities: citiesSelectors.citiesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setCities(cities) {
    dispatch(citiesActions.setCities(cities));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageView);
