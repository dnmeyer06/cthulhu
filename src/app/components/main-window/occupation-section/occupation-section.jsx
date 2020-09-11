import React, { useState, useEffect } from 'react';
import { OccupationContainer } from './styled-components';

export function OccupationSection() {
  const [occupations, setOccupations] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState();
  const [loading, setLoading] = useState(true);

  const getOccupations = () => {
    fetch(`/api/occupations`)
      .then((response) => response.json())
      .then((res) => setOccupations(res))
      .then(() => setLoading(false))
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getOccupations();
  }, []);

  return (
    <div>
      {loading && <p>Loading Occupations</p>}
      {loading || (
        <OccupationContainer>
          <p>test test test test test test</p>
          <ul>
            {occupations.map((occupation, index) => (
              <li
                key={occupation.id}
                onMouseEnter={() => {
                  setSelectedOccupation(index);
                }}
              >
                {occupation.name}
              </li>
            ))}
          </ul>
          <div>{occupations[selectedOccupation]?.description}</div>
        </OccupationContainer>
      )}
    </div>
  );
}
