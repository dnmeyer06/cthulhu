import React from "react";

const getOccupations = () => {
  fetch(`/api/occupations`)
    .then((response) => response.json())
    .then((occupations) => console.table(occupations));
};

export function SampleComponent() {
  return <div>This is a sample component {getOccupations()}</div>;
}
