import React, { useState, useRef } from 'react';

let defaultCities = [
  'Bangalore',
  'Bhubaneswar',
  'Brahmapur',
  'Burupada',
  'Baripada',
  'Balugaon'
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState(defaultCities);
  const cityInput = useRef();

  const searchChangeHandler = e => {
    setSearchTerm(e.target.value);
  };

  let filteredCities = cities.filter((city, index) => {
    return city.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let addCity = e => {
    setCities([...cities, cityInput.current.value]);
    cityInput.current.value = '';
  };

  let removeCity = removedCityIndex => {
    let filteredCities = cities.filter((city, index) => {
      if (index !== removedCityIndex) return city;
    });
    setCities(filteredCities);
  };

  return (
    <div>
      <input type="text" onChange={searchChangeHandler} value={searchTerm} />
      <ol>
        {filteredCities.map((city, index) => {
          return (
            <React.Fragment>
              <li key={index}>
                {city}
                <button onClick={() => removeCity(index)}>Remove</button>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
      <h3>Add new city</h3>
      <input type="text" ref={cityInput} />
      <button onClick={addCity}>Add</button>
    </div>
  );
}
