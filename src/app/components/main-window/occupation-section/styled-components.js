import styled from "styled-components";

export const OccupationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  p {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
